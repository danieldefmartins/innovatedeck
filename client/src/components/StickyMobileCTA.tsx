import { Phone, MessageSquare } from "lucide-react";
import { useLocalPhone } from "@/lib/useLocalPhone";

export default function StickyMobileCTA() {
  const phone = useLocalPhone();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary border-t border-primary/20 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="flex">
        <a
          href={`tel:+${phone.tel}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <div className="w-px bg-primary-foreground/20" />
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}
