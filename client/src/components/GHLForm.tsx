import { COMPANY } from "@/lib/constants";

interface GHLFormProps {
  className?: string;
}

export default function GHLForm({ className }: GHLFormProps) {
  if (COMPANY.ghlFormId) {
    return (
      <div className={className}>
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${COMPANY.ghlFormId}`}
          style={{ width: "100%", height: "600px", border: "none" }}
          title="Contact Form"
        />
      </div>
    );
  }

  // Fallback contact form until GHL is set up
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${COMPANY.email}?subject=Deck%20Project%20Inquiry`;
      }}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select a service...</option>
            <option value="composite-decking">Composite Decking</option>
            <option value="wood-decking">Wood Decking</option>
            <option value="deck-repair">Deck Repair & Restoration</option>
            <option value="pergolas">Pergolas & Shade Structures</option>
            <option value="porches">Porches & Screened Porches</option>
            <option value="outdoor-kitchens">Outdoor Kitchens & Living</option>
            <option value="railings">Railings & Stairs</option>
            <option value="staining">Deck Staining & Sealing</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Project Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="City, State"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Describe your project, approximate size, timeline, etc."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground font-semibold py-3 px-6 rounded-md hover:bg-accent/90 transition-colors"
        >
          Get Your Free Estimate
        </button>
        <p className="text-xs text-muted-foreground text-center">
          Or call us directly at{" "}
          <a href={`tel:+${COMPANY.phone.tel}`} className="text-primary font-medium">
            {COMPANY.phone.display}
          </a>
        </p>
      </div>
    </form>
  );
}
