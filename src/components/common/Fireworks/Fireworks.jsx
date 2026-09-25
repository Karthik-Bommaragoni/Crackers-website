import './Fireworks.css';

/**
 * ----------------------------------------------------------
 * FIREWORK BURST
 * ----------------------------------------------------------
 *
 * Creates a large radial Diwali-style firework:
 *
 *       *   |   *
 *         \ | /
 *      ---- ● ----
 *         / | \
 *       *   |   *
 *
 * The rays, tip sparks and core are animated by Fireworks.css.
 */

export function Burst({
  cx,
  cy,
  r,
  rays = 24,
  tone = 'gold',
  variant = 1,
  sparks: showSparks = true,
}) {
  const lines = [];
  const sparks = [];

  for (let i = 0; i < rays; i += 1) {
    const angle =
      (i / rays) * Math.PI * 2 +
      variant * 0.17;

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    /*
     * Alternating ray lengths make the explosion
     * look natural rather than perfectly mechanical.
     */
    const length =
      i % 3 === 0
        ? 1
        : i % 3 === 1
          ? 0.86
          : 0.72;

    const start = 0.10;
    const end = length;

    lines.push(
      <line
        key={`ray-${i}`}
        x1={cx + cos * r * start}
        y1={cy + sin * r * start}
        x2={cx + cos * r * end}
        y2={cy + sin * r * end}
        className="burst__ray"
      />,
    );

    if (showSparks) {
      sparks.push(
        <circle
          key={`spark-${i}`}
          cx={cx + cos * r * (end + 0.045)}
          cy={cy + sin * r * (end + 0.045)}
          r={r * 0.018 + 0.65}
          className="burst__tip-spark"
        />,
      );
    }
  }

  /*
   * Additional smaller particles.
   * These make the explosion feel more organic.
   */
  const particles = [];

  if (showSparks) {
    const particleCount = Math.max(10, Math.floor(rays * 0.65));

    for (let i = 0; i < particleCount; i += 1) {
      const angle =
        (i / particleCount) * Math.PI * 2 +
        variant * 0.43;

      const distance =
        r *
        (0.45 + ((i * 17) % 45) / 100);

      const size =
        r * (0.012 + ((i % 3) * 0.004));

      particles.push(
        <circle
          key={`particle-${i}`}
          cx={cx + Math.cos(angle) * distance}
          cy={cy + Math.sin(angle) * distance}
          r={size}
          className="burst__particle"
        />,
      );
    }
  }

  return (
    <g
      className={`burst burst--${tone} burst--v${variant}`}
    >
      {/* Bright explosion flash */}
      <circle
        className="burst__flash"
        cx={cx}
        cy={cy}
        r={r * 0.14}
      />

      {/* Main long radial rays */}
      <g className="burst__rays">
        {lines}
      </g>

      {/* Bright sparks at the end of rays */}
      {showSparks && (
        <g className="burst__sparks">
          {sparks}
        </g>
      )}

      {/* Secondary particles */}
      {showSparks && (
        <g className="burst__particles">
          {particles}
        </g>
      )}

      {/* Bright center */}
      <circle
        className="burst__core"
        cx={cx}
        cy={cy}
        r={r * 0.055 + 1.5}
      />
    </g>
  );
}


/**
 * ----------------------------------------------------------
 * FIREWORKS LAYER
 * ----------------------------------------------------------
 *
 * Renders rockets + explosions.
 *
 * The rocket starts near the bottom of the SVG and travels
 * upward to the burst position.
 */
export function FireworksLayer({
  bursts = [],
  className = '',
  height = 420,
  align = 'xMidYMin',
}) {
  return (
    <svg
      className={`fireworks-layer ${className}`.trim()}
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio={`${align} slice`}
      aria-hidden="true"
    >
      {bursts.map((burst, index) => {
        const delay =
          burst.delay ??
          `${index * 2.1}s`;

        const launchDistance =
          Math.max(
            40,
            height - burst.cy,
          );

        return (
          <g
            key={`firework-${index}`}
            className="firework"
            style={{
              '--firework-delay': delay,
              '--launch-distance': `${launchDistance}px`,
            }}
          >
            {/* ------------------------------------------------
                Rocket trail
            ------------------------------------------------ */}
            <line
              className="firework__trail"
              x1={burst.cx}
              y1={height + 12}
              x2={burst.cx}
              y2={burst.cy}
            />

            {/* ------------------------------------------------
                Rocket head
            ------------------------------------------------ */}
            <circle
              className="firework__rocket"
              cx={burst.cx}
              cy={height}
              r="3.2"
            />

            {/* ------------------------------------------------
                Firework explosion
            ------------------------------------------------ */}
            <g className="firework__burst">
              <Burst
                {...burst}
                variant={(index % 6) + 1}
              />
            </g>
          </g>
        );
      })}
    </svg>
  );
}


/**
 * ----------------------------------------------------------
 * PANEL BURST
 * ----------------------------------------------------------
 *
 * Large static decorative burst for the navy panel.
 */
export function PanelBurst({
  className = '',
}) {
  return (
    <svg
      className={`panel-burst ${className}`.trim()}
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      <Burst
        cx={200}
        cy={200}
        r={190}
        rays={36}
        tone="gold"
        variant={0}
        sparks={false}
      />
    </svg>
  );
}


/**
 * ----------------------------------------------------------
 * SMALL TWINKLING SPARKLES
 * ----------------------------------------------------------
 */
export function Sparkles({
  count = 8,
  className = '',
}) {
  return (
    <div
      className={`sparkles ${className}`.trim()}
      aria-hidden="true"
    >
      {Array.from(
        { length: count },
        (_, i) => (
          <span
            key={i}
            className="sparkle"
          />
        ),
      )}
    </div>
  );
}