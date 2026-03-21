import crypto from "crypto";
import fs from "fs";

function base64Url(input) {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function extractSpreadsheetId(input) {
  const trimmed = input.trim().replace(/^['"]|['"]$/g, "");
  if (trimmed.includes("docs.google.com/spreadsheets/d/")) {
    const match = trimmed.match(/\/spreadsheets\/d\/([^/]+)/);
    if (match?.[1]) return match[1];
  }
  return trimmed;
}

function normalizePrivateKey(input) {
  const cleaned = input.trim().replace(/^['"]|['"]$/g, "").replace(/\\n/g, "\n");
  if (!cleaned.includes("BEGIN PRIVATE KEY")) {
    throw new Error("GOOGLE_PRIVATE_KEY is invalid. Paste the service account private_key value with \\n for newlines.");
  }
  return cleaned;
}

async function run() {
  const envText = fs.readFileSync(".env", "utf8");
  const env = {};
  envText.split("\n").forEach(line => {
    const [k, ...v] = line.split("=");
    if (k && v.length) env[k.trim()] = v.join("=").trim();
  });

  const getEnv = (name) => env[name];

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

  console.log("Fetching token...");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to get token: ${res.status} ${text}`);
  }

  const json = (await res.json());
  if (!json.access_token) throw new Error("No access_token in response");
  const accessToken = json.access_token;
  
  console.log("Obtained token. Appending to sheet...");

  const sheetId = extractSpreadsheetId(getEnv("GOOGLE_SHEET_ID"));
  const tab = env.GOOGLE_SHEET_TAB || "Enquiries";
  const range = `${tab}!A1`;
  const url = new URL(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}:append`);
  url.searchParams.set("valueInputOption", "USER_ENTERED");
  url.searchParams.set("insertDataOption", "INSERT_ROWS");

  const appendRes = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ values: [["test", "test2"]] }),
  });

  if (!appendRes.ok) {
    const text = await appendRes.text().catch(() => "");
    throw new Error(`Sheets append failed: ${appendRes.status} ${text}`);
  }
  
  console.log("Success appended to sheet.");
}

run().catch(console.error);
