import { Phone, MessageSquare } from "lucide-react";
import EstimateForm from "@/components/EstimateForm";
import { COMPANY } from "@/lib/constants";

/** Inline estimate form used on service, area and info pages so no page is a dead end. */
export default function EstimateSection({
  heading = "Get your free deck estimate",
  intro = "Tell us about your project and we'll call or text you to talk it through and set up a time to see it.",
  defaultService = "",
  idPrefix = "inline",
}: {
  heading?: string;
  intro?: string;
  defaultService?: string;
  idPrefix?: string;
}) {
  return (
    <section id="estimate" className="py-20 lg:py-24 bg-muted scroll-mt-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <p className="text-accent font-semibold tracking-wider uppercase text-xs mb-3">Free Estimate</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{heading}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{intro}</p>
            <div className="space-y-3">
              <a
                href={`tel:+${COMPANY.phone.tel}`}
                className="flex items-center gap-3 font-semibold text-foreground hover:text-primary"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                Call {COMPANY.phone.display}
              </a>
              <a
                href={`sms:+${COMPANY.phone.tel}?&body=${encodeURIComponent("Hi, I'd like a free estimate")}`}
                className="flex items-center gap-3 font-semibold text-foreground hover:text-primary"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </span>
                Text us
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border/60 shadow-sm p-6 sm:p-8">
            <EstimateForm idPrefix={idPrefix} defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
