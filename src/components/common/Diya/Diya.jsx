import './Diya.css';

/** Small clay diya with a gently flickering flame. Decorative only. */
export default function Diya({ className = '' }) {
  return (
    <svg className={`diya ${className}`.trim()} viewBox="0 0 60 64" aria-hidden="true">
      <defs>
        <radialGradient id="diya-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffb13b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="diya-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff8a1d" />
          <stop offset="55%" stopColor="#ffd35c" />
          <stop offset="100%" stopColor="#fff6d8" />
        </linearGradient>
        <linearGradient id="diya-bowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8432a" />
          <stop offset="100%" stopColor="#5a0f10" />
        </linearGradient>
      </defs>
      <circle className="diya__glow" cx="30" cy="24" r="22" fill="url(#diya-glow)" />
      <path className="diya__flame" d="M30 8 C35 17 37 23 30 32 C23 23 25 17 30 8 Z" fill="url(#diya-flame)" />
      <path d="M4 38 Q30 66 56 38 Q52 36 46 38 L30 39 L14 38 Q8 36 4 38 Z" fill="url(#diya-bowl)" />
      <path d="M4 38 Q30 44 56 38" fill="none" stroke="#f2c14e" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 46 Q30 52 44 46" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.7" strokeDasharray="1.5 3" />
    </svg>
  );
}
