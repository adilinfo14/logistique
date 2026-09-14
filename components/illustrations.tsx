// Illustrations SVG maison — donnent une identité "logistique concrète"
// (camion/semi-remorque, fret maritime, port, stock) plutôt que des icônes
// génériques. Couleurs pilotées via les classes Tailwind fill-*/stroke-*
// pour rester alignées sur la palette navy/accent du thème.

export function LogisticsScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 300"
      className={className}
      role="img"
      aria-label="Illustration d'un camion semi-remorque roulant vers un port avec bateau, grue et stock de marchandises"
    >
      {/* --- Scène portuaire (fret maritime + grue + stock) --- */}
      <g transform="translate(210,14)">
        {/* vagues */}
        <path
          d="M0,132 Q15,124 30,132 T60,132 T90,132 T120,132 T150,132 T180,132 T210,132 T240,132"
          className="stroke-accent-300"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M0,144 Q15,138 30,144 T60,144 T90,144 T120,144 T150,144 T180,144 T210,144 T240,144"
          className="stroke-accent-200"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* coque du navire */}
        <path d="M4,96 L200,96 L184,128 L20,128 Z" className="fill-navy-800" />
        {/* cabine du navire */}
        <rect x="162" y="66" width="30" height="34" rx="6" className="fill-navy-700" />
        <rect x="169" y="74" width="8" height="8" rx="2" className="fill-accent-200" />
        <rect x="181" y="74" width="8" height="8" rx="2" className="fill-accent-200" />

        {/* conteneurs sur le pont */}
        <rect x="30" y="70" width="34" height="26" rx="5" className="fill-accent-500" />
        <rect x="68" y="62" width="34" height="34" rx="5" className="fill-navy-500" />
        <rect x="106" y="70" width="34" height="26" rx="5" className="fill-accent-400" />

        {/* grue de port */}
        <rect x="238" y="8" width="9" height="120" rx="4" className="fill-navy-700" />
        <rect x="172" y="4" width="96" height="9" rx="4" className="fill-navy-700" />
        <line x1="205" y1="13" x2="205" y2="56" className="stroke-navy-400" strokeWidth="3" />
        <rect x="188" y="56" width="34" height="24" rx="5" className="fill-accent-500" />

        {/* stock / palettes de marchandises près du quai */}
        <g transform="translate(0,150)">
          <rect x="0" y="24" width="28" height="24" rx="5" className="fill-navy-500" />
          <rect x="32" y="24" width="28" height="24" rx="5" className="fill-accent-500" />
          <rect x="64" y="24" width="28" height="24" rx="5" className="fill-navy-400" />
          <rect x="16" y="0" width="28" height="24" rx="5" className="fill-accent-400" />
          <rect x="48" y="0" width="28" height="24" rx="5" className="fill-navy-500" />
        </g>
      </g>

      {/* --- Route + camion semi-remorque --- */}
      <g>
        {/* ombre au sol */}
        <ellipse cx="120" cy="256" rx="126" ry="8" className="fill-navy-950" opacity="0.18" />

        {/* pointillés de route (effet de mouvement) */}
        <rect x="-30" y="238" width="18" height="5" rx="2.5" className="fill-white" opacity="0.15" />
        <rect x="-4" y="238" width="18" height="5" rx="2.5" className="fill-white" opacity="0.25" />
        <rect x="24" y="238" width="14" height="5" rx="2.5" className="fill-white" opacity="0.35" />

        <g transform="translate(20,196)">
          {/* remorque */}
          <rect x="0" y="-54" width="182" height="54" rx="10" className="fill-accent-500" />
          <rect x="0" y="-24" width="182" height="7" rx="3.5" className="fill-navy-900" opacity="0.18" />

          {/* cabine du tracteur */}
          <rect x="182" y="-44" width="58" height="44" rx="12" className="fill-navy-800" />
          <rect x="190" y="-38" width="24" height="18" rx="5" className="fill-accent-200" />
          <rect x="196" y="-56" width="32" height="8" rx="4" className="fill-accent-400" />

          {/* roues */}
          <circle cx="46" cy="6" r="15" className="fill-navy-900" />
          <circle cx="46" cy="6" r="5.5" className="fill-navy-50" />
          <circle cx="118" cy="6" r="15" className="fill-navy-900" />
          <circle cx="118" cy="6" r="5.5" className="fill-navy-50" />
          <circle cx="220" cy="6" r="15" className="fill-navy-900" />
          <circle cx="220" cy="6" r="5.5" className="fill-navy-50" />
        </g>
      </g>
    </svg>
  );
}

export function EiffelTowerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} role="img" aria-label="Silhouette de la tour Eiffel">
      <path
        d="M50 6 L58 46 L74 46 L60 78 L82 78 L64 108 L88 132 L12 132 L36 108 L18 78 L40 78 L26 46 L42 46 Z"
        className="fill-current"
      />
      <rect x="42" y="108" width="16" height="24" className="fill-current" />
      <line x1="50" y1="6" x2="50" y2="132" className="stroke-current" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function MoroccanArchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} role="img" aria-label="Silhouette d'une porte marocaine et d'un minaret">
      <path
        d="M14 132 L14 76 C14 52 30 38 50 38 C70 38 86 52 86 76 L86 132 Z"
        className="fill-current"
        opacity="0.16"
      />
      <path
        d="M22 132 L22 78 C22 58 34 46 50 46 C66 46 78 58 78 78 L78 132 Z"
        fill="none"
        className="stroke-current"
        strokeWidth="4"
      />
      <rect x="66" y="16" width="12" height="46" className="fill-current" />
      <path d="M60 16 L72 2 L84 16 Z" className="fill-current" />
      <circle cx="72" cy="2" r="3" className="fill-current" />
    </svg>
  );
}
