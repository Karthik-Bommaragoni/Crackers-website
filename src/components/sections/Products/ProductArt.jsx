/**
 * Illustrated stand-in artwork for each product category.
 * Shown only until a real photograph is placed in src/assets/products/.
 * Pure SVG in the site's navy / burgundy / gold palette — no brand marks.
 */

const GOLD = '#f2c14e';

function Burst({ x, y, r, rays = 14, color = GOLD, width = 1.4 }) {
  return (
    <g stroke={color} strokeWidth={width} strokeLinecap="round">
      {Array.from({ length: rays }, (_, i) => {
        const a = (i / rays) * Math.PI * 2;
        const l = i % 2 ? r * 0.7 : r;
        return (
          <line
            key={i}
            x1={x + Math.cos(a) * r * 0.25}
            y1={y + Math.sin(a) * r * 0.25}
            x2={x + Math.cos(a) * l}
            y2={y + Math.sin(a) * l}
          />
        );
      })}
    </g>
  );
}

function Fountain({ x, y, spread = 70, len = 60, rays = 11 }) {
  return (
    <g stroke="#ffd67a" strokeWidth="1.2" strokeLinecap="round" className="product-art__glow">
      {Array.from({ length: rays }, (_, i) => {
        const deg = -90 - spread / 2 + (spread / (rays - 1)) * i;
        const a = (deg * Math.PI) / 180;
        const l = i % 2 ? len * 0.72 : len;
        return <line key={i} x1={x} y1={y} x2={x + Math.cos(a) * l} y2={y + Math.sin(a) * l} />;
      })}
    </g>
  );
}

function Cone({ x, base, w, h }) {
  const top = base - h;
  return (
    <g>
      <path d={`M${x - w / 2} ${base} L${x + w / 2} ${base} L${x + 3} ${top} Q${x} ${top - 3} ${x - 3} ${top} Z`} fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.2" />
      <path d={`M${x - w * 0.38} ${base - h * 0.28} Q${x} ${base - h * 0.22} ${x + w * 0.38} ${base - h * 0.28}`} stroke={GOLD} strokeWidth="1.3" fill="none" />
      <path d={`M${x - w * 0.24} ${base - h * 0.56} Q${x} ${base - h * 0.52} ${x + w * 0.24} ${base - h * 0.56}`} stroke={GOLD} strokeWidth="1.3" fill="none" />
      <circle cx={x} cy={base - h * 0.14} r="2.4" fill={GOLD} />
    </g>
  );
}

function Star({ x, y, s = 1, fill = GOLD }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -10 L2.9 -3.1 L10 -3.1 L4.3 1.4 L6.2 8.5 L0 4.3 L-6.2 8.5 L-4.3 1.4 L-10 -3.1 L-2.9 -3.1 Z"
      fill={fill}
    />
  );
}

const ART = {
  sparklers: (
    <>
      <g stroke="#c9a458" strokeWidth="2.2" strokeLinecap="round">
        <line x1="70" y1="226" x2="104" y2="88" />
        <line x1="130" y1="226" x2="96" y2="96" />
        <line x1="100" y1="230" x2="100" y2="70" />
      </g>
      <g className="product-art__glow">
        <Burst x={104} y={84} r={34} rays={18} />
        <Burst x={96} y={92} r={24} rays={14} color="#fff1c9" width={1.1} />
        <Burst x={100} y={64} r={20} rays={12} color="#ffd67a" width={1.1} />
      </g>
    </>
  ),
  'flower-pots': (
    <>
      <Fountain x={100} y={100} spread={80} len={78} rays={13} />
      <Fountain x={58} y={156} spread={70} len={46} />
      <Fountain x={146} y={146} spread={70} len={52} />
      <Cone x={100} base={228} w={62} h={128} />
      <Cone x={58} base={228} w={40} h={72} />
      <Cone x={146} base={228} w={44} h={82} />
    </>
  ),
  'ground-chakkars': (
    <>
      <g className="product-art__glow" stroke="#ffd67a" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <path d="M100 118 m-78 0 a78 30 0 1 0 156 0" strokeDasharray="2 7" />
        <path d="M100 118 m-62 -8 a62 22 0 1 1 124 0" strokeDasharray="3 8" opacity="0.7" />
      </g>
      <ellipse cx="100" cy="168" rx="58" ry="22" fill="url(#pa-navy)" stroke={GOLD} strokeWidth="1.4" />
      <ellipse cx="100" cy="162" rx="58" ry="22" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.4" />
      <path d="M100 162 m0 -3 a6 3 0 1 1 -6 3 a12 6 0 1 1 12 0 a18 9 0 1 1 -18 0 a26 12 0 1 1 26 0 a34 15 0 1 1 -34 0" fill="none" stroke={GOLD} strokeWidth="1.2" />
      <ellipse cx="62" cy="214" rx="30" ry="11" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.2" />
      <path d="M62 214 m-18 0 a18 6 0 1 0 36 0 a10 3.5 0 1 0 -20 0" fill="none" stroke={GOLD} strokeWidth="1" />
    </>
  ),
  rockets: (
    <>
      {[
        { x: 78, y: 70, t: -8 },
        { x: 122, y: 92, t: 8 },
      ].map(({ x, y, t }) => (
        <g key={x} transform={`rotate(${t} ${x} ${y + 60})`}>
          <line x1={x} y1={y + 60} x2={x} y2={y + 150} stroke="#c9a458" strokeWidth="2" />
          <rect x={x - 9} y={y + 10} width="18" height="52" rx="2" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.2" />
          <path d={`M${x - 9} ${y + 10} L${x} ${y - 10} L${x + 9} ${y + 10} Z`} fill={GOLD} />
          <line x1={x - 9} y1={y + 30} x2={x + 9} y2={y + 30} stroke={GOLD} strokeWidth="1.2" />
        </g>
      ))}
      <rect x="136" y="150" width="34" height="78" rx="3" fill="url(#pa-navy)" stroke={GOLD} strokeWidth="1.2" />
      <Star x={153} y={186} s={0.9} />
      <g className="product-art__glow">
        <Burst x={150} y={52} r={26} rays={16} color="#ff8c9a" width={1.2} />
      </g>
    </>
  ),
  'sound-crackers': (
    <>
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={36 + i * 16} y={172 - (i % 2) * 6} width="13" height="52" rx="2" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1" />
        ))}
        <path d="M42 170 Q70 150 110 162" fill="none" stroke="#c9a458" strokeWidth="1.4" />
      </g>
      <circle cx="140" cy="186" r="36" fill="url(#pa-navy)" stroke={GOLD} strokeWidth="1.4" />
      <path d="M112 186 Q140 196 168 186" fill="none" stroke={GOLD} strokeWidth="1.2" />
      <Star x={140} y={176} s={0.8} />
      <path d="M140 150 Q146 128 160 118" fill="none" stroke="#c9a458" strokeWidth="1.6" />
      <g className="product-art__glow">
        <Burst x={162} y={114} r={16} rays={12} color="#fff1c9" width={1.2} />
        <Burst x={80} y={96} r={38} rays={18} color="#ff8c9a" />
      </g>
    </>
  ),
  'fancy-crackers': (
    <>
      <g className="product-art__glow">
        <Burst x={62} y={70} r={28} rays={14} color="#8fd3ff" width={1.2} />
        <Burst x={142} y={60} r={34} rays={16} />
        <Burst x={104} y={112} r={20} rays={12} color="#ff8c9a" width={1.1} />
      </g>
      <Cone x={64} base={226} w={46} h={86} />
      <rect x="96" y="166" width="42" height="60" rx="3" fill="url(#pa-navy)" stroke={GOLD} strokeWidth="1.2" />
      <Star x={117} y={194} s={1} />
      <circle cx="160" cy="206" r="20" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.2" />
      <Star x={160} y={206} s={0.6} fill="#ffe7a8" />
    </>
  ),
  'gift-boxes': (
    <>
      <g className="product-art__glow">
        <Fountain x={100} y={128} spread={110} len={60} rays={15} />
      </g>
      <path d="M40 150 L160 150 L166 128 L34 128 Z" fill="#8e1f1c" stroke={GOLD} strokeWidth="1.2" />
      <rect x="44" y="150" width="112" height="78" rx="3" fill="url(#pa-red)" stroke={GOLD} strokeWidth="1.3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={54 + i * 19} y={140} width="14" height="26" rx="2" fill={i % 2 ? 'url(#pa-navy)' : '#c73a2c'} stroke={GOLD} strokeWidth="0.9" />
      ))}
      <rect x="94" y="150" width="12" height="78" fill="#e0b040" />
      <line x1="44" y1="190" x2="156" y2="190" stroke="#e0b040" strokeWidth="6" />
      <path d="M100 190 C84 172 70 182 86 192 M100 190 C116 172 130 182 114 192" fill="none" stroke="#ffe7a8" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
};

export default function ProductArt({ slug }) {
  return (
    <svg className="product-art" viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="pa-bg" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#4a1a2a" />
          <stop offset="55%" stopColor="#12275a" />
          <stop offset="100%" stopColor="#061a3a" />
        </radialGradient>
        <radialGradient id="pa-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2a91d" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#f2a91d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pa-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b3302a" />
          <stop offset="100%" stopColor="#5a0f10" />
        </linearGradient>
        <linearGradient id="pa-navy" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1b4596" />
          <stop offset="100%" stopColor="#061a3a" />
        </linearGradient>
      </defs>
      <rect width="200" height="250" fill="url(#pa-bg)" />
      {/* warm table glow */}
      <ellipse cx="100" cy="240" rx="110" ry="26" fill="url(#pa-floor)" />
      {ART[slug]}
    </svg>
  );
}
