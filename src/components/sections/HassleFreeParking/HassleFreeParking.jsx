import { ArrowLeftRight, CarFront, MapPin, Users } from 'lucide-react';
import sitePlan from '../../../assets/images/zuzuvadi-safety-market.jpg';
import { SITE } from '../../../data/site.js';
import Diya from '../../common/Diya/Diya.jsx';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './HassleFreeParking.css';

const FEATURES = [
  {
    icon: CarFront,
    title: '2 Acres of Dedicated Parking',
    text: 'Plenty of organised space for visitors during the festive season',
  },
  {
    icon: ArrowLeftRight,
    title: 'Easy Entry & Exit',
    text: 'A simpler arrival and departure experience for families',
  },
  {
    icon: Users,
    title: 'Comfortable for Families',
    text: 'Park once and explore all 10 shops without repeatedly moving your vehicle',
  },
];

export default function HassleFreeParking() {
  return (
    <section className="parking section-seam" id="parking" aria-labelledby="parking-title">
      <PanelBurst className="parking__burst" />
      <Sparkles count={6} className="sparkles--parking" />
      <Diya className="parking__diya parking__diya--left" />
      <Diya className="parking__diya parking__diya--right" />

      <div className="container parking__inner">
        <div className="parking__copy">
          <SectionHeader
            align="start"
            id="parking-title"
            eyebrow="Hassle-Free Parking"
            title={
              <>
                <span className="parking__line">More Space</span>
                <span className="parking__line text-gold">Less Hassle</span>
              </>
            }
          />

          <Reveal as="p" delay={1} className="parking__lede">
            Festival shopping should begin without the stress of finding a place to park. Zuzuvadi Pattas Market
            offers 2 acres of dedicated parking so families can arrive comfortably, park with ease and enjoy the
            market without the usual roadside congestion.
          </Reveal>

          <ul className="parking__features">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" delay={Math.min(i + 1, 4)} className="parking-feature" key={title}>
                <span className="parking-feature__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <span className="parking-feature__body">
                  <h3 className="parking-feature__title">{title}</h3>
                  <p className="parking-feature__text">{text}</p>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={3} className="parking__cta">
            <a className="btn btn--gold" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
              <MapPin size={18} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

       <figure className="parking__plan">
  <Reveal as="div" delay={2} className="parking__plan-frame">
    <img
      className="parking__plan-image"
      src={sitePlan}
      alt="Site plan of Zuzuvadi Pattas Market: entry at top left, shops 1 to 10 around the edge, a central parking area with 5.9 m and 4.5 m wide internal roads, and boundary measurements"
      width="977"
      height="909"
      loading="lazy"
    />
  </Reveal>

  <figcaption className="parking__caption">
    <span className="parking__caption-main">
      <span>Drive in once.</span>
      <span className="parking__caption-dot">•</span>
      <span>Park comfortably.</span>
      <span className="parking__caption-dot">•</span>
      <span>Explore all 10 shops.</span>
    </span>

    <span className="parking__caption-hint">
      Tap the plan to view it full size
    </span>
  </figcaption>
</figure>
      </div>
    </section>
  );
}
