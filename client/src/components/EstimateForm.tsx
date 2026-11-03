import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle, Phone, MessageSquare, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import {
  CrmError,
  SERVICE_OPTIONS,
  captureAttribution,
  loadForm,
  readyForm,
  sendLead,
  type PublicForm,
} from "@/lib/crm";

const input =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring";
const SMS_BODY = "Hi, I'd like a free estimate";

function newKeys() {
  return { key: crypto.randomUUID(), uploadSessionId: crypto.randomUUID() };
}

export default function EstimateForm({
  className,
  idPrefix = "est",
  defaultService = "",
}: {
  className?: string;
  idPrefix?: string;
  defaultService?: string;
}) {
  const formRef = useRef<PublicForm | null>(null);
  const keys = useRef<{ key: string; uploadSessionId: string } | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [thanks, setThanks] = useState("");
  const id = (s: string) => `${idPrefix}-${s}`;

  useEffect(() => {
    captureAttribution();
    // Load the signed token when the form opens so the 2-second rule is already met on submit.
    loadForm()
      .then((f) => (formRef.current = f))
      .catch(() => {
        /* retried on submit, where any failure is shown */
      });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(e.currentTarget);
    const values: Record<string, string> = {};
    fd.forEach((v, k) => (values[k] = String(v)));
    setStatus("sending");
    setError("");
    try {
      keys.current ??= newKeys();
      const form = await readyForm(formRef.current);
      formRef.current = form;
      const res = await sendLead(form, keys.current.key, keys.current.uploadSessionId, values, fd.get("smsConsent") === "on");
      setThanks(res.thankYou || "");
      setStatus("done");
      keys.current = null;
      const w = window as any;
      if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { form: "innovate-deck-estimate" });
    } catch (err) {
      setError(
        err instanceof CrmError
          ? err.message
          : `We couldn't send that. Please call or text ${COMPANY.phone.display}, or email ${COMPANY.email}. Your details are still here.`,
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={className} role="status" aria-live="polite">
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <CheckCircle className="w-8 h-8 text-accent mb-3" />
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Thanks, we have your request</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {thanks || "Your estimate request has been received."} We'll call or text you to talk through your
            project and set up a time to see it. Want to talk sooner?
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:+${COMPANY.phone.tel}`} className="inline-flex items-center gap-2 font-semibold text-primary">
              <Phone className="w-4 h-4" /> Call {COMPANY.phone.display}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={onSubmit} noValidate={false}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={id("name")} className="block text-sm font-medium mb-1">
              Your name *
            </label>
            <input type="text" id={id("name")} name="name" required autoComplete="name" className={input} />
          </div>
          <div>
            <label htmlFor={id("phone")} className="block text-sm font-medium mb-1">
              Phone *
            </label>
            <input type="tel" id={id("phone")} name="phone" required autoComplete="tel" inputMode="tel" className={input} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={id("email")} className="block text-sm font-medium mb-1">
              Email <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input type="email" id={id("email")} name="email" autoComplete="email" className={input} />
          </div>
          <div>
            <label htmlFor={id("location")} className="block text-sm font-medium mb-1">
              Project address or city
            </label>
            <input type="text" id={id("location")} name="location" autoComplete="street-address" className={input} />
          </div>
        </div>
        <div>
          <label htmlFor={id("service")} className="block text-sm font-medium mb-1">
            What can we help with?
          </label>
          <select id={id("service")} name="service" defaultValue={defaultService} className={input}>
            <option value="">Choose one</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={id("message")} className="block text-sm font-medium mb-1">
            Tell us a little about the project
          </label>
          <textarea id={id("message")} name="message" rows={4} className={`${input} resize-none`} placeholder="Size, material, timeline, anything that helps" />
        </div>
        {/* Honeypot: hidden from people, left empty. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor={id("website")}>Website</label>
          <input type="text" id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={id("sms")}
            name="smsConsent"
            className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border accent-accent"
          />
          <label htmlFor={id("sms")} className="text-xs leading-relaxed text-muted-foreground">
            I agree to receive text messages from Innovate Deck about my quote, appointments and project updates.
            Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. See our{" "}
            <a href="/privacy" className="underline text-primary">Privacy Policy</a> and{" "}
            <a href="/terms" className="underline text-primary">Terms</a>.
          </label>
        </div>

        {status === "error" && (
          <div role="alert" className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            <p className="mb-2">{error}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 font-semibold">
              <a href={`tel:+${COMPANY.phone.tel}`} className="inline-flex items-center gap-1.5 underline">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={`sms:+${COMPANY.phone.tel}?&body=${encodeURIComponent(SMS_BODY)}`} className="inline-flex items-center gap-1.5 underline">
                <MessageSquare className="w-4 h-4" /> Text
              </a>
              <a href={`mailto:${COMPANY.email}?subject=Deck%20estimate%20request`} className="inline-flex items-center gap-1.5 underline">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full min-h-[48px] bg-accent text-accent-foreground font-semibold py-3 px-6 rounded-md hover:bg-accent/90 transition-colors disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Get My Free Estimate"}
        </button>
        <p className="text-xs text-muted-foreground text-center">
          Prefer to talk? Call or text{" "}
          <a href={`tel:+${COMPANY.phone.tel}`} className="text-primary font-medium">
            {COMPANY.phone.display}
          </a>
        </p>
      </div>
    </form>
  );
}
