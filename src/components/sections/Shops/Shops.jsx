import marketImage from '../../../assets/hero-background.jpeg';
import { FireworksLayer, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import { useInView } from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './Shops.css';

// Bursts frame the heading on either side of the sky (viewBox 1000 × 420).
const BURSTS = [
  // Left — high in the open sky
  {
    cx: 85,
    cy: 65,
    r: 58,
    rays: 16,
    tone: 'gold',
  },

  // Right — high in the open sky
  {
    cx: 915,
    cy: 55,
    r: 64,
    rays: 18,
    tone: 'rose',
  },

  // Smaller left accent
  {
    cx: 245,
    cy: 42,
    r: 32,
    rays: 12,
    tone: 'white',
  },

  // Smaller right accent
  {
    cx: 755,
    cy: 48,
    r: 34,
    rays: 12,
    tone: 'gold',
  },
];
export default function Shops() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`shops section-seam${visible ? ' is-visible' : ''}`}
      id="shops"
      aria-labelledby="shops-title"
    >
      {/* The same market photograph as the hero, framed wide and full-bleed here */}
      <div className="shops__photo">
        <img
          className="shops__image"
          src={marketImage}
          alt="The full Zuzuvadi Pattas Market at dusk: ten lit shops on both sides of a wide parking ground"
          width="1600"
          height="900"
          loading="lazy"
        />
      </div>
      <FireworksLayer bursts={BURSTS} className="shops__fireworks" />
      <Sparkles count={8} className="sparkles--shops" />
      <div className="shops__embers" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="container shops__inner">
        <SectionHeader
  id="shops-title"
  className="shops__head"
  eyebrow="A Festive Destination"
  title={
    <>
      <span className="shops__main-title">
        More Space <span className="text-gold">Less Hassle</span>
      </span>

    <span className="shops__secondary-title">
  <span>10 Shops</span>
  <span className="shops__title-dot">•</span>
  <span>One Destination</span>
</span>
    </>
  }
  intro="More variety More joy All in one place"
/>
      </div>
    </section>
  );
}
