import {
  CarFront,
  DoorOpen,
  FireExtinguisher,
  Footprints,
  MoveHorizontal,
  Store,
  Users,
  Zap,
} from 'lucide-react';

import marketImage from '../../../assets/images/zuzuvadi-parking-site-plan.jpeg';

import { FireworksLayer, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal, { useInView } from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';

import './Safety.css';


/* ==========================================================
   SAFETY MEASURES
   ========================================================== */

const MEASURES = [
  {
    icon: FireExtinguisher,
    title: 'Fire Extinguishers Within Reach',
    text: 'Positioned at relevant locations throughout the market and inside shops',
  },
  {
    icon: DoorOpen,
    title: 'Clear Exit Routes',
    text: 'Exit routes are kept clearly identifiable and accessible for easy movement',
  },
  {
    icon: CarFront,
    title: 'Open Emergency Access',
    text: 'The layout keeps important access areas clear to help avoid unnecessary congestion',
  },
  {
    icon: Zap,
    title: 'Electrical Controls Outside Shops',
    text: 'Electrical control panels are positioned outside the shops to keep controls separated from fireworks storage areas',
  },
  {
    icon: Users,
    title: 'Space That Helps',
    text: 'Wide movement areas and organised parking make it easier and more comfortable for families to move around',
  },
];


/* ==========================================================
   STATS
   ========================================================== */

const STATS = [
  {
    icon: MoveHorizontal,
    value: '13 meters',
    label: 'Spacing Between Shops',
  },
  {
    icon: CarFront,
    value: '2 Acres',
    label: 'Organised Parking',
  },
  {
    icon: Footprints,
    value: 'Open Spaces',
    label: 'Easier Movement',
  },
  {
    icon: Store,
    value: '10 Shops',
    label: 'One Destination',
  },
];


/* ==========================================================
   FIREWORKS
   ========================================================== */

const BURSTS = [
  {
    cx: 90,
    cy: 110,
    r: 60,
    rays: 16,
    tone: 'gold',
  },
  {
    cx: 910,
    cy: 90,
    r: 70,
    rays: 18,
    tone: 'rose',
  },
  {
    cx: 180,
    cy: 250,
    r: 32,
    rays: 12,
    tone: 'white',
  },
  {
    cx: 840,
    cy: 250,
    r: 36,
    rays: 12,
    tone: 'gold',
  },
];


/* ==========================================================
   SAFETY
   ========================================================== */

export default function Safety() {
  const [ref, visible] = useInView({
    threshold: 0.15,
  });

  return (
    <section
      className="safety section-seam"
      id="safety"
      aria-labelledby="safety-title"
    >

      {/* ====================================================
          TOP CONTENT
          LEFT CONTENT + RIGHT SITE PLAN
          ==================================================== */}

      <div
        ref={ref}
        className={`safety__stage${visible ? ' is-visible' : ''}`}
      >

        {/* Decorative fireworks */}
        {/* <FireworksLayer
          bursts={BURSTS}
          className="safety__fireworks"
        /> */}

        <Sparkles
          count={7}
          className="sparkles--safety"
        /> 


        <div className="container safety__intro">

  <div className="safety__copy">

  <SectionHeader
    align="start"
    id="safety-title"
    className="safety__head"
    eyebrow="Safety at Zuzuvadi"
    title={
      <>
        Designed With Space in <span className="text-gold">Mind</span>
      </>
    }
    intro="More room to park. More room to move. More room to enjoy."
  />


  <Reveal as="p" delay={2} className="safety__lede">
    When families come to buy fireworks, safety should never be an afterthought.
    At Zuzuvadi Pattas Market, the market layout is planned with clear access,
    open spaces and visible safety measures so families can shop with greater confidence.
  </Reveal>
    <Reveal delay={1} className="safety__tag">
    <span className="safety__tag-icon" aria-hidden="true">
      ✦
    </span>

    <span className="safety__tag-content">
      <strong>SAFETY  & CONVENIENCE FIRST</strong>
      <span>Thoughtfully Planned. Safely Designed.</span>
    </span>
  </Reveal>


</div>

  <Reveal className="safety__layout" delay={2}>
    <div className="safety__frame">
      <img
        className="safety__layout-image"
        src={marketImage}
        alt="Zuzuvadi Pattas Market layout showing ten shops and organised parking"
      />
    </div>
  </Reveal>

</div>

      </div>


      {/* ====================================================
          BOTTOM SAFETY CARDS
          ==================================================== */}

      <div className="safety__band">

        <div className="container safety__band-inner">

          <Reveal
            as="h3"
            className="closing-line safety__band-title"
          >
            Visible Safety Measures
          </Reveal>


          <ul className="safety__measures">

            {MEASURES.map(
              ({ icon: Icon, title, text }, i) => (
                <Reveal
                  as="li"
                  delay={Math.min(i + 1, 4)}
                  className="measure"
                  key={title}
                >

                  <span
                    className="measure__icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.4}
                    />
                  </span>

                  <h4 className="measure__title">
                    {title}
                  </h4>

                  <p className="measure__text">
                    {text}
                  </p>

                </Reveal>
              )
            )}

          </ul>


          {/* ----------------------------------------------
              STATS
              ---------------------------------------------- */}

          <Reveal
            as="ul"
            delay={2}
            className="safety__stats"
            aria-label="Market layout at a glance"
          >

            {STATS.map(
              ({ icon: Icon, value, label }) => (
                <li
                  className="stat"
                  key={value}
                >

                  <Icon
                    className="stat__icon"
                    size={26}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />

                  <span className="stat__text">

                    <span className="stat__value">
                      {value}
                    </span>

                    <span className="stat__label">
                      {label}
                    </span>

                  </span>

                </li>
              )
            )}

          </Reveal>

        </div>

      </div>

    </section>
  );
}