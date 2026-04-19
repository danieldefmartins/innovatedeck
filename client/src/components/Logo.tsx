interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "dark" ? "#5C3D2E" : "#FFFFFF";
  const accent = "#C9963B";

  return (
    <svg
      viewBox="0 0 260 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Innovate Deck"
      role="img"
    >
      {/* Deck plank icon — 3 bold horizontal bars */}
      <rect x="0" y="5" width="32" height="6" rx="1.5" fill={accent} />
      <rect x="0" y="18" width="40" height="6" rx="1.5" fill={accent} />
      <rect x="0" y="31" width="28" height="6" rx="1.5" fill={accent} />

      {/* INNOVATE — bold geometric */}
      <text
        x="52"
        y="22"
        fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="3"
        fill={primary}
      >
        INNOVATE
      </text>

      {/* DECK — bold, accent underline treatment */}
      <text
        x="52"
        y="41"
        fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="5"
        fill={primary}
      >
        DECK
      </text>
    </svg>
  );
}
