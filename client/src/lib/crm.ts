// Estimate requests go to the business's published form in 360
// (GET /public/website/forms/:slug -> signed token, then POST /public/website/direct-submit).
// Field ids and select options must match the live form exactly.
import { COMPANY } from "./constants";

export const CRM = {
  apiBase: "https://api.get360crm.com",
  formSlug: "innovate-deck-estimate",
  workspaceId: "575c4cb3-f83c-4ad3-8a40-9f401b6cb353",
};

export const SERVICE_OPTIONS = [
  "New deck",
  "Composite deck",
  "Deck repair or rebuild",
  "Railings",
  "Porch / pergola",
  "Other / not sure yet",
] as const;

/** Must match the consent text configured on the 360 form, word for word. */
export const SMS_CONSENT_TEXT =
  "I agree to receive text messages from Innovate Deck about my quote, appointments and project updates. Message frequency varies. Msg & data rates may apply. Reply STOP to cancel, HELP for help. See our Privacy Policy and Terms.";

const FALLBACK = `Please call or text ${COMPANY.phone.display}, or email ${COMPANY.email}. Your details are still here.`;

export type PublicForm = {
  token: string;
  config: {
    consentRequired: boolean;
    consentText: string;
    requireCaptcha?: boolean;
    fields: { id: string; type: string; options?: string[] }[];
  };
};

export class CrmError extends Error {}

function claims(token: string): { ws?: string; kind?: string; issuedAt?: number; exp?: number } {
  const encoded = token.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, "=")));
}

async function requestJson<T>(url: string, body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: body ? "POST" : "GET",
      credentials: "omit",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    throw new CrmError(`We couldn't send that. ${FALLBACK}`);
  }
  if (!response.ok) {
    if (response.status === 429)
      throw new CrmError(`Too many requests. Please wait a minute and try again. ${FALLBACK}`);
    throw new CrmError(`We couldn't send that. ${FALLBACK}`);
  }
  return response.json() as Promise<T>;
}

export async function loadForm(): Promise<PublicForm> {
  const form = await requestJson<PublicForm>(
    `${CRM.apiBase}/public/website/forms/${encodeURIComponent(CRM.formSlug)}`,
  );
  const c = claims(form.token);
  const ids = form.config.fields.map((f) => f.id);
  if (
    c.ws !== CRM.workspaceId ||
    c.kind !== "form" ||
    form.config.requireCaptcha ||
    form.config.consentRequired ||
    form.config.consentText !== SMS_CONSENT_TEXT ||
    !["name", "phone", "email", "location", "service", "message"].every((id) => ids.includes(id))
  )
    throw new CrmError(`Online requests are temporarily unavailable. ${FALLBACK}`);
  return form;
}

/** 360 rejects a submit less than 2 s after the token was issued; reuse a valid token, else wait. */
export async function readyForm(current: PublicForm | null): Promise<PublicForm> {
  let form = current;
  let c: { issuedAt?: number; exp?: number } = {};
  try {
    if (form) c = claims(form.token);
  } catch {
    form = null;
  }
  if (!form || !c.exp || c.exp - Date.now() < 120_000) {
    form = await loadForm();
    c = claims(form.token);
  }
  const wait = (c.issuedAt ?? Date.now()) + 2500 - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  return form;
}

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return "+1" + digits;
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits;
  if (value.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15) return "+" + digits;
  throw new CrmError("Enter a valid phone number, for example (781) 555-0123.");
}

const ATTR_KEY = "innovatedeck_attribution";
const ATTR_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid", "gbraid", "wbraid"];

/** First-touch attribution, kept 90 days. */
export function captureAttribution() {
  try {
    const now = Date.now();
    const saved = JSON.parse(localStorage.getItem(ATTR_KEY) || "null");
    if (saved && saved.expires > now) return;
    const q = new URLSearchParams(location.search);
    const data: Record<string, string> = {};
    for (const p of ATTR_PARAMS) if (q.get(p)) data[p] = q.get(p)!;
    if (document.referrer && !document.referrer.includes(location.host)) data.referrer = document.referrer;
    data.landing_page = location.pathname;
    localStorage.setItem(ATTR_KEY, JSON.stringify({ data, expires: now + 90 * 864e5 }));
  } catch {
    /* storage blocked: attribution is optional */
  }
}

function attribution(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(ATTR_KEY) || "null")?.data ?? {};
  } catch {
    return {};
  }
}

export async function sendLead(
  form: PublicForm,
  key: string,
  uploadSessionId: string,
  values: Record<string, string>,
  smsConsent: boolean,
) {
  const answers: Record<string, string> = {};
  for (const id of ["name", "phone", "email", "location", "service", "message"]) {
    const v = (values[id] || "").trim();
    if (v) answers[id] = id === "phone" ? normalizePhone(v) : v;
  }
  if (answers.service && !(SERVICE_OPTIONS as readonly string[]).includes(answers.service)) {
    answers.message = `${answers.service}${answers.message ? `\n${answers.message}` : ""}`;
    delete answers.service;
  }
  if (form.config.fields.some((f) => f.id === "source_page")) answers.source_page = location.pathname;
  return requestJson<{ thankYou?: string }>(`${CRM.apiBase}/public/website/direct-submit`, {
    token: form.token,
    key,
    uploadSessionId,
    answers,
    attribution: attribution(),
    smsConsent,
    emailConsent: false,
    consent: false,
    website: values.website || "",
  });
}
