 import crypto from "crypto";
 import { NextResponse } from "next/server";
 
 export const runtime = "nodejs";
 
 function base64Url(input: Buffer | string) {
   const buf = typeof input === "string" ? Buffer.from(input) : input;
   return buf
     .toString("base64")
     .replace(/=/g, "")
     .replace(/\+/g, "-")
     .replace(/\//g, "_");
 }
 
 function getEnv(name: string) {
   const value = process.env[name];
   if (!value) throw new Error(`Missing env: ${name}`);
  return value.trim();
 }
 
function extractSpreadsheetId(input: string) {
  const trimmed = input.trim().replace(/^['"]|['"]$/g, "");
  if (trimmed.includes("docs.google.com/spreadsheets/d/")) {
    const match = trimmed.match(/\/spreadsheets\/d\/([^/]+)/);
    if (match?.[1]) return match[1];
  }
  if (/^\d+$/.test(trimmed)) {
    throw new Error(
      "GOOGLE_SHEET_ID looks like a numeric client_id. Use the Spreadsheet ID from the Google Sheets URL (the part after /d/)."
    );
  }
  return trimmed;
}

function normalizePrivateKey(input: string) {
  const cleaned = input.trim().replace(/^['"]|['"]$/g, "").replace(/\\n/g, "\n");
  if (!cleaned.includes("BEGIN PRIVATE KEY")) {
    throw new Error("GOOGLE_PRIVATE_KEY is invalid. Paste the service account private_key value with \\n for newlines.");
  }
  return cleaned;
}

 async function getGoogleAccessToken() {
   const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
   const privateKeyRaw = getEnv("GOOGLE_PRIVATE_KEY");
  const privateKey = normalizePrivateKey(privateKeyRaw);
 
   const now = Math.floor(Date.now() / 1000);
   const header = { alg: "RS256", typ: "JWT" };
   const payload = {
     iss: clientEmail,
     scope: "https://www.googleapis.com/auth/spreadsheets",
     aud: "https://oauth2.googleapis.com/token",
     iat: now,
     exp: now + 60 * 60,
   };
 
   const unsigned = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(payload))}`;
   const signer = crypto.createSign("RSA-SHA256");
   signer.update(unsigned);
   signer.end();
   const signature = base64Url(signer.sign(privateKey));
   const assertion = `${unsigned}.${signature}`;
 
   const body = new URLSearchParams({
     grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
     assertion,
   });
 
   const res = await fetch("https://oauth2.googleapis.com/token", {
     method: "POST",
     headers: { "content-type": "application/x-www-form-urlencoded" },
     body,
   });
 
   if (!res.ok) {
     const text = await res.text().catch(() => "");
     throw new Error(`Failed to get token: ${res.status} ${text}`);
   }
 
   const json = (await res.json()) as { access_token?: string };
   if (!json.access_token) throw new Error("No access_token in response");
   return json.access_token;
 }
 
 async function appendToSheet(values: string[]) {
  const sheetId = extractSpreadsheetId(getEnv("GOOGLE_SHEET_ID"));
   const tab = process.env.GOOGLE_SHEET_TAB || "Enquiries";
   const accessToken = await getGoogleAccessToken();
 
   const range = `${tab}!A1`;
   const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}:append`);
   url.searchParams.set("valueInputOption", "USER_ENTERED");
   url.searchParams.set("insertDataOption", "INSERT_ROWS");
 
   const res = await fetch(url, {
     method: "POST",
     headers: {
       authorization: `Bearer ${accessToken}`,
       "content-type": "application/json",
     },
     body: JSON.stringify({ values: [values] }),
   });
 
   if (!res.ok) {
     const text = await res.text().catch(() => "");
     throw new Error(`Sheets append failed: ${res.status} ${text}`);
   }
 }
 
 export async function POST(req: Request) {
   try {
     const payload = (await req.json().catch(() => null)) as
       | null
       | {
           source?: string;
           name?: string;
           email?: string;
           phone?: string;
           company?: string;
           currency?: string;
           budget?: string;
           timeline?: string;
           location?: string;
           services?: string[] | string;
           details?: string;
         };
 
     if (!payload || typeof payload !== "object") {
       return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
     }
 
     const createdAt = new Date().toISOString();
 
     const row = [
       createdAt,
       payload.source || "unknown",
       payload.name || "",
       payload.email || "",
       payload.phone || "",
       payload.company || "",
       payload.currency || "",
       payload.budget || "",
       payload.timeline || "",
       payload.location || "",
       Array.isArray(payload.services) ? payload.services.join(", ") : payload.services || "",
       payload.details || "",
     ];
 
     await appendToSheet(row);
 
     return NextResponse.json({ ok: true });
   } catch (e) {
     const message = e instanceof Error ? e.message : "Unknown error";
     return NextResponse.json({ ok: false, error: message }, { status: 500 });
   }
 }
 
