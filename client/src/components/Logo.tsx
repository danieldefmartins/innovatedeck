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
      <rect x="0" y="8" width="28" height="5" rx="1" fill={accent} />
      <rect x="0" y="19" width="34" height="5" rx="1" fill={accent} />
      <rect x="0" y="30" width="24" height="5" rx="1" fill={accent} />

      {/* INNOVATE — bold geometric */}
      <text
        x="46"
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
        x="46"
        y="41"
        fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="5"
        fill={primary}
      >
        DECK
      </text>

      {/* Accent underline under DECK */}
      <rect x="46" y="44.5" width="72" height="2.5" rx="1" fill={accent} />
    </svg>
  );
}
