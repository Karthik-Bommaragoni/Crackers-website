import { MapPin, Phone } from 'lucide-react';
import cityImage from '../../../assets/images/bengaluru-destination.jpeg';
import { SITE } from '../../../data/site.js';
import { FireworksLayer, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal, { useInView } from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './Destination.css';

// Kept high and away from the heading; the photograph carries its own lanterns and marigolds.
const BURSTS = [
  { cx: 170, cy: 60, r: 40, rays: 14, tone: 'gold' },
  { cx: 850, cy: 55, r: 46, rays: 16, tone: 'rose' },
  { cx: 330, cy: 26, r: 20, rays: 12, tone: 'white' },
  { cx: 690, cy: 24, r: 22, rays: 12, tone: 'gold' },
];

export default function Destination() {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`destination section-seam${visible ? ' is-visible' : ''}`}
      id="destination"
      aria-labelledby="destination-title"
    >
      <div className="destination__photo">
        <img
          className="destination__image"
          src={cityImage}
          alt="Bengaluru at night: lit skyline, a metro train crossing an elevated track, a lakeside road and the moon above"
          width="1600"
          height="726"
          loading="lazy"
        />
      </div>
      {/* <FireworksLayer bursts={BURSTS} className="destination__fireworks" />
      <Sparkles count={8} className="sparkles--destination" /> */}

      {/* Decorative editorial notes at the edges */}
      <div className="destination__note destination__note--left" aria-hidden="true">
        <p className="destination__route">
          Bangalore
          <span className="destination__route-arrow">→ Zuzuvadi</span>
        </p>
        <p className="destination__caps">
          Same city
          <br />
          Brighter
          <br />
          traditions
        </p>
      </div>
      <p className="destination__note destination__note--right destination__caps" aria-hidden="true">
        People
        <br />
        Places
        <br />
        Festivals
        <br />
        Always a
        <br />
        reason to
        <br />
        celebrate
      </p>

      <div className="container destination__inner">
        <SectionHeader
          id="destination-title"
          className="destination__head"
          eyebrow="A Destination Worth the Drive"
          title={
            <>
              <span className="nowrap">More Space</span> <span className="nowrap">More Choice</span>{' '}
              <span className="nowrap text-gold">Less Hassle</span>
            </>
          }
          intro={
  <>
    <span className="destination__intro-item">10 Shops</span>
    <span className="destination__intro-dot">•</span>
    <span className="destination__intro-item">Dedicated Parking</span>
    <span className="destination__intro-dot">•</span>
    <span className="destination__intro-item">More Room to Browse</span>
  </>
}
        />

        <Reveal delay={1} className="destination__actions">
          <a className="btn btn--gold" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
            Get Directions
            <MapPin size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a className="btn btn--outline" href={SITE.phoneHref}>
            <Phone size={17} strokeWidth={2} aria-hidden="true" />
            Call / WhatsApp
          </a>
        </Reveal>

        <Reveal delay={2} className="destination__sign">
          {/* <svg className="destination__lotus" viewBox="0 0 40 24" aria-hidden="true">
            <path d="M20 2 C25 8 25 15 20 21 C15 15 15 8 20 2 Z" />
            <path d="M20 21 C14 19 9 14 8 7 C13 9 17 13 20 21 Z" />
            <path d="M20 21 C26 19 31 14 32 7 C27 9 23 13 20 21 Z" />
          </svg> */}
          <p className="destination__tagline">Same Roads Brighter Celebrations</p>
        </Reveal>
      </div>
    </section>
  );
}
