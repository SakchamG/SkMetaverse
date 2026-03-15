export function getClientIp(headers: Headers) {
  const cf = headers.get("cf-connecting-ip");
  if (cf) return cf.split(",")[0].trim();

  const real = headers.get("x-real-ip");
  if (real) return real.split(",")[0].trim();

  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();

  return "unknown";
}

export function parseAllowedOrigins() {
  const raw = process.env.ENQUIRY_ALLOWED_ORIGINS;
  if (!raw) return null;
  const origins = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return origins.length > 0 ? origins : null;
}

export function isOriginAllowed(headers: Headers) {
  const allowed = parseAllowedOrigins();
  if (!allowed) return true;
  const origin = headers.get("origin")?.trim();
  if (!origin) return false;
  return allowed.includes(origin);
}

export function isApiKeyValid(headers: Headers) {
  const required = process.env.ENQUIRY_API_KEY?.trim();
  if (!required) return { enabled: false as const, ok: true as const };
  const provided = headers.get("x-enquiry-api-key")?.trim();
  if (!provided) return { enabled: true as const, ok: false as const };
  return { enabled: true as const, ok: provided === required };
}

export function normalizeText(input: unknown, maxLen: number) {
  if (typeof input !== "string") return "";
  const cleaned = input.replace(/\r/g, "").trim();
  return cleaned.length > maxLen ? cleaned.slice(0, maxLen) : cleaned;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export function sanitizeServices(input: unknown) {
  if (Array.isArray(input)) {
    return input
      .filter((v) => typeof v === "string")
      .map((v) => v.trim())
      .filter(Boolean)
      .slice(0, 25);
  }
  if (typeof input === "string") {
    return input
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean)
      .slice(0, 25);
  }
  return [];
}

export type EnquiryPayload = {
  source: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  currency: string;
  budget: string;
  timeline: string;
  location: string;
  services: string[];
  details: string;
  captchaToken: string;
};

export function validateEnquiryPayload(input: unknown): { ok: true; value: EnquiryPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") return { ok: false, error: "Invalid JSON" };
  const obj = input as Record<string, unknown>;

  const source = normalizeText(obj.source, 40) || "unknown";
  const name = normalizeText(obj.name, 80);
  const email = normalizeText(obj.email, 200);
  const phone = normalizeText(obj.phone, 40);
  const company = normalizeText(obj.company, 120);
  const currency = normalizeText(obj.currency, 10);
  const budget = normalizeText(obj.budget, 40);
  const timeline = normalizeText(obj.timeline, 40);
  const location = normalizeText(obj.location, 120);
  const details = normalizeText(obj.details, 2000);
  const services = sanitizeServices(obj.services);
  const captchaToken = normalizeText(obj.captchaToken, 4096);

  if (!name) return { ok: false, error: "Name is required" };
  if (!email || !isValidEmail(email)) return { ok: false, error: "Valid email is required" };
  if (!details) return { ok: false, error: "Details are required" };

  return {
    ok: true,
    value: {
      source,
      name,
      email,
      phone,
      company,
      currency,
      budget,
      timeline,
      location,
      services,
      details,
      captchaToken,
    },
  };
}

export async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) return { enabled: false as const, ok: true as const };
  if (!token) return { enabled: true as const, ok: false as const, error: "Captcha is required" };

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip && ip !== "unknown") body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) return { enabled: true as const, ok: false as const, error: "Captcha verification failed" };
  const json = (await res.json()) as { success?: boolean };
  if (!json.success) return { enabled: true as const, ok: false as const, error: "Captcha verification failed" };
  return { enabled: true as const, ok: true as const };
}

