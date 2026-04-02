import { COMPANY } from "@/lib/constants";

interface PhoneLinkProps {
  phone?: { display: string; tel: string };
  className?: string;
  children?: React.ReactNode;
}

export default function PhoneLink({ phone, className, children }: PhoneLinkProps) {
  const p = phone || COMPANY.phone;
  return (
    <a
      href={`tel:+${p.tel}`}
      className={className}
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "phone_call",
            event_category: "engagement",
            event_label: "phone_click",
          });
        }
      }}
    >
      {children || p.display}
    </a>
  );
}
