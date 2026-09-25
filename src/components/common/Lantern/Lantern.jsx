import './Lantern.css';

/**
 * Hanging festival lantern on a marigold string. Decorative only.
 * `beads` sets how many marigolds hang above the lantern.
 */
export default function Lantern({ beads = 5, className = '' }) {
  const bead = 11;
  const top = beads * bead;
  const h = top + 70;

  return (
    <svg className={`lantern ${className}`.trim()} viewBox={`0 0 40 ${h}`} aria-hidden="true">
      <defs>
        <radialGradient id="lantern-marigold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffd35c" />
          <stop offset="70%" stopColor="#f29a1d" />
          <stop offset="100%" stopColor="#c9620d" />
        </radialGradient>
        <radialGradient id="lantern-light" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="60%" stopColor="#ffb238" />
          <stop offset="100%" stopColor="#c9620d" />
        </radialGradient>
      </defs>
      <line x1="20" y1="0" x2="20" y2={top + 4} stroke="#d4af37" strokeWidth="0.8" />
      {Array.from({ length: beads }, (_, i) => (
        <circle key={i} cx="20" cy={i * bead + 6} r="5.2" fill="url(#lantern-marigold)" />
      ))}
      <g className="lantern__body">
        <circle className="lantern__halo" cx="20" cy={top + 30} r="20" />
        <path d={`M13 ${top + 8} L27 ${top + 8} L25 ${top + 13} L15 ${top + 13} Z`} fill="#d4af37" />
        <path
          d={`M12 ${top + 14} Q20 ${top + 10} 28 ${top + 14} L30 ${top + 42} Q20 ${top + 48} 10 ${top + 42} Z`}
          fill="url(#lantern-light)"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        <path d={`M20 ${top + 13} L20 ${top + 45} M15 ${top + 14} L14 ${top + 43} M25 ${top + 14} L26 ${top + 43}`} stroke="#b8860b" strokeWidth="0.7" opacity="0.7" />
        <path d={`M14 ${top + 45} L26 ${top + 45} L24 ${top + 50} L16 ${top + 50} Z`} fill="#d4af37" />
        <path d={`M17 ${top + 50} L23 ${top + 50} L22 ${top + 68} L20 ${top + 70} L18 ${top + 68} Z`} fill="#e0521d" />
      </g>
    </svg>
  );
}
