// Illustrations SVG maison utilisées dans les "fresques" France/Maroc.
// Couleurs pilotées via les classes Tailwind fill-*/stroke-* pour rester
// alignées sur la palette navy/accent du thème.

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
