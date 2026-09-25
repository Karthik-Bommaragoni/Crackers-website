import Diya from '../../common/Diya/Diya.jsx';

/**
 * A small still-life of generic festive crackers and diyas that sits on the
 * pavement at the bottom-left of the hero photograph. Pure SVG, no images,
 * no brand marks.
 */
export default function FestiveProps() {
  const fountain = [];
  for (let i = 0; i < 11; i += 1) {
    const a = (-150 + i * 12) * (Math.PI / 180);
    const len = i % 2 ? 26 : 34;
    fountain.push(
      <line key={i} x1={62} y1={44} x2={62 + Math.cos(a) * len} y2={44 + Math.sin(a) * len} />
    );
  }

  return (
    <div className="festive-props" aria-hidden="true">
      <Diya className="festive-props__diya" />
      <svg className="festive-props__art" viewBox="0 0 220 140">
        <defs>
          <linearGradient id="fp-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a8261f" />
            <stop offset="100%" stopColor="#5a0f10" />
          </linearGradient>
          <linearGradient id="fp-navy" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0c2f78" />
            <stop offset="100%" stopColor="#061a3a" />
          </linearGradient>
        </defs>

        {/* Flower pot with a soft fountain */}
        <g className="festive-props__fountain">{fountain}</g>
        <path d="M40 138 L84 138 L66 46 Q62 40 58 46 Z" fill="url(#fp-red)" />
        <g stroke="#e8b845" strokeWidth="1.4" fill="none">
          <path d="M47 112 Q62 116 78 112" />
          <path d="M51 90 Q62 94 73 90" />
          <path d="M55 70 Q62 72 69 70" />
        </g>
        <circle cx="62" cy="126" r="3" fill="#f2a91d" />

        {/* Cylinder cracker */}
        <rect x="94" y="70" width="36" height="68" rx="3" fill="url(#fp-navy)" />
        <ellipse cx="112" cy="70" rx="18" ry="4" fill="#123a86" />
        <g stroke="#d4af37" strokeWidth="1.3">
          <line x1="94" y1="84" x2="130" y2="84" />
          <line x1="94" y1="124" x2="130" y2="124" />
        </g>
        <path d="M112 97 l3 7 7 0 -5.5 4.5 2 7 -6.5 -4 -6.5 4 2 -7 -5.5 -4.5 7 0 z" fill="#f2a91d" />
        <path d="M112 66 Q116 56 124 54" fill="none" stroke="#d4af37" strokeWidth="1.3" />

        {/* Gift box */}
        <rect x="140" y="96" width="62" height="42" rx="2" fill="url(#fp-red)" />
        <rect x="136" y="88" width="70" height="12" rx="2" fill="#8e1f1c" />
        <rect x="166" y="88" width="10" height="50" fill="#e0b040" />
        <path d="M171 88 C160 74 150 80 158 88 M171 88 C182 74 192 80 184 88" fill="none" stroke="#f2c14e" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <Diya className="festive-props__diya festive-props__diya--small" />
    </div>
  );
}
