import { CarFront, Map, MapPin, Route } from 'lucide-react';
import satView from '../../../assets/images/sat-view-final.jpg';
import { SITE } from '../../../data/site.js';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Lantern from '../../common/Lantern/Lantern.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './PlanYourVisit.css';

// Distances and road details exactly as supplied by the client.
const FACTS = [
  { icon: Map, value: 'COMING FROM BENGALURU?', label: 'Your first crackers stop in Tamilnadu' },
  { icon: CarFront, value: '~15 km', label: 'From Electronic City Toll Plaza' },
  { icon: MapPin, value: '~750 meters', label: 'From Attibele Toll Plaza' },
  // { icon: Route, value: 'On Bagalur Road', label: 'Bengaluru – Chennai Hwy' },
  
];

export default function PlanYourVisit() {
  return (
    <section className="visit section-seam" id="plan-your-visit" aria-labelledby="visit-title">
      <PanelBurst className="visit__burst" />
      <Sparkles count={6} className="sparkles--visit" />
      <Lantern beads={5} className="visit__lantern" />

      <div className="container visit__inner">
        <div className="visit__copy">
          <SectionHeader
            align="start"
            id="visit-title"
            eyebrow="Plan Your Visit"
            title={
              <>
                <span className="visit__line">Easy to Reach</span>
                <span className="visit__line text-gold">Worth the Visit</span>
              </>
            }
          />

          <Reveal as="p" delay={1} className="visit__lede">
            Coming from Bengaluru? Your first crackers stop in Tamilnadu is just past Attibele Toll Plaza. Follow the Bengaluru–Chennai Highway towards Hosur and look for the Hosur City Welcome board. Turn into Zuzuvadi Pattas Market, park in the spacious, dedicated parking area, and explore 10 Crackers shops at your own pace
          </Reveal>

          <Reveal delay={2} className="visit__cta">
            <a className="btn btn--gold" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
              <MapPin size={18} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal as="p" delay={3} className="visit__signature">
            More space Less hassle
          </Reveal>
        </div>

        <Reveal as="figure" delay={2} className="visit__map">
          <a className="visit__map-frame" href={satView} target="_blank" rel="noreferrer" aria-label="Open the full location view in a new tab">
            <img
              className="visit__map-image"
              src={satView}
              alt="Aerial view of Zuzuvadi Pattas Market beside the Bengaluru–Chennai Highway, showing the entrance, parking and 10 shops, with Mahidhara Fortune City and the Hosur welcome board marked nearby"
              width="1742"
              height="903"
              loading="lazy"
            />
          </a>
          <figcaption className="visit__hint">Tap the map to view it full size</figcaption>
        </Reveal>
      </div>

      <div className="container visit__facts-wrap">
        <div className="visit__divider" aria-hidden="true">
          <svg viewBox="0 0 40 24">
            <path d="M20 2 C25 8 25 15 20 21 C15 15 15 8 20 2 Z" />
            <path d="M20 21 C14 19 9 14 8 7 C13 9 17 13 20 21 Z" />
            <path d="M20 21 C26 19 31 14 32 7 C27 9 23 13 20 21 Z" />
          </svg>
        </div>

        <ul className="visit__facts" aria-label="Getting here">
          {FACTS.map(({ icon: Icon, value, label }, i) => (
            <Reveal as="li" delay={Math.min(i + 1, 4)} className="fact" key={value}>
              <span className="fact__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.4} />
              </span>
              <span className="fact__value">{value}</span>
              <span className="fact__label">{label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
