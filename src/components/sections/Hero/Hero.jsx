import {
  ArrowRight,
  Compass,
  MapPin,
  SquareParking,
  Store,
} from 'lucide-react';

import heroImage from '../../../assets/hero-background.jpeg';
import { SITE } from '../../../data/site.js';

import FeatureCard from './FeatureCard.jsx';

import {
  FireworksLayer,
  Sparkles,
} from '../../common/Fireworks/Fireworks.jsx';

import './Hero.css';


/* ==========================================================
   FEATURES
   ========================================================== */

const FEATURES = [
   {
    icon: MapPin,
    title: 'RIGHT AT THE BORDER',
    subtitle: 'A convenient stop from Bengaluru',
  },
  {
    icon: SquareParking,
    title: 'LARGE DEDICATED PARKING',
    subtitle: 'An easier start to your visit',
  },
  {
    icon: Store,
    title: '10 Crackers Shops',
    subtitle: 'More choice in one place',
  },
  
  {
    icon: Compass,
    title: 'SPACE TO EXPLORE',
    subtitle: 'Take your time choosing together',
  },
 
];


/* ==========================================================
   ROCKET FIREWORKS
   ==========================================================

   Each rocket:
   1. launches upward
   2. leaves a glowing trail
   3. reaches the sky
   4. bursts into multiple rays
   5. expands and fades
   6. another rocket follows

   These fireworks are contained ONLY inside the
   right-side image area.
   ========================================================== */

const FIREWORK_BURSTS = [
  {
    cx: 170,
    cy: 90,
    r: 72,
    rays: 14,
    tone: 'gold',
  },
  {
    cx: 430,
    cy: 125,
    r: 82,
    rays: 16,
    tone: 'rose',
  },
  {
    cx: 690,
    cy: 75,
    r: 68,
    rays: 12,
    tone: 'gold',
  },
  {
    cx: 820,
    cy: 145,
    r: 62,
    rays: 14,
    tone: 'white',
  },
  {
    cx: 560,
    cy: 55,
    r: 58,
    rays: 12,
    tone: 'rose',
  },
];


// function RocketFireworks() {
//   return (
//     <div
//       className="rocket-fireworks"
//       aria-hidden="true"
//     >
//       {FIREWORKS.map((firework) => (
//         <div
//           key={firework.className}
//           className={`
//             firework
//             ${firework.className}
//             firework--${firework.tone}
//           `}
//           style={{
//             '--firework-delay': firework.delay,
//           }}
//         >
//           {/* Rocket / launch trail */}
//           <span className="firework__rocket" />

//           {/* Burst */}
//           <span className="firework__burst">

//             {Array.from({
//               length: firework.rays,
//             }).map((_, index) => (
//               <span
//                 key={index}
//                 className="firework__spark"
//                 style={{
//                   '--spark-angle': `${
//                     index * (360 / firework.rays)
//                   }deg`,
//                 }}
//               />
//             ))}

//             {/* Bright center */}
//             <span className="firework__core" />

//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }


/* ==========================================================
   HERO
   ========================================================== */

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      aria-labelledby="hero-title"
    >

      {/* ====================================================
          LEFT CONTENT PANEL
          ==================================================== */}

      <div className="hero__panel">

        {/* Existing decorative panel burst */}
    

        {/* Small decorative stars */}
        <Sparkles
          count={6}
          className="sparkles--panel"
        />

        <div className="hero__content">

          {/* ----------------------------------------------
              Eyebrow
              ---------------------------------------------- */}

          <p className="hero__eyebrow">

            <span
              className="hero__eyebrow-star"
              aria-hidden="true"
            />

            <span className="hero__eyebrow-text">
              JUST ACROSS THE BORDER, IN HOSUR
            </span>

          </p>


          {/* ----------------------------------------------
              Main headline
              ---------------------------------------------- */}

          <h1
            className="hero__title"
            id="hero-title"
          >
            <span className="hero__line">
              More Space
            </span>

            <span className="hero__line">
              More Choice
            </span>

            <span className="hero__line hero__line--gold">
              Less Hassle
            </span>
          </h1>


          {/* ----------------------------------------------
              Description
              ---------------------------------------------- */}

         <div className="hero__lede">

  <div className="hero__lede-item">
    <span className="hero__lede-mark">✦</span>
    <span>
      Your <strong>Diwali shopping starts</strong> as soon as you enter Tamilnadu.
    </span>
  </div>

  <div className="hero__lede-item">
    <span className="hero__lede-mark">✦</span>
    <span>
      Park in the <strong>Large, Dedicated Parking space.</strong>
    </span>
  </div>

  <div className="hero__lede-item">
    <span className="hero__lede-mark">✦</span>
    <span>
      Explore <strong>10 Crackers shops.</strong>
    </span>
  </div>

  <div className="hero__lede-item">
    <span className="hero__lede-mark">✦</span>
    <span>
      Enjoy <strong>choosing together</strong> without rushing through crowded market roads.
    </span>
  </div>

</div>


          {/* ----------------------------------------------
              CTA buttons
              ---------------------------------------------- */}

          <div className="hero__actions">

            <button
              className="btn btn--gold"
              href="#shops"
            >
              Explore Shops

              
            </button>


            <a
              className="btn btn--outline"
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions

              <ArrowRight
                size={18}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </a>

          </div>

        </div>
      </div>


      {/* ====================================================
          RIGHT IMAGE PANEL
          ==================================================== */}

      <div className="hero__media">

        <div className="hero__frame">

          {/* ----------------------------------------------
              Original photograph
              ---------------------------------------------- */}

          <img
            className="hero__image"
            src={heroImage}
            alt="Zuzuvadi Pattas Market at sunset: lit white shops lining a wide parking ground with families and cars"
            width="1600"
            height="900"
            fetchPriority="high"
          />


          {/* ----------------------------------------------
              Image readability overlay
              ---------------------------------------------- */}

          <div
            className="hero__media-shade"
            aria-hidden="true"
          />


          {/* ----------------------------------------------
              Animated rockets + fireworks
              ---------------------------------------------- */}

          <FireworksLayer
  bursts={FIREWORK_BURSTS}
  className="hero__fireworks-layer"
  height={420}
/>


          {/* ----------------------------------------------
              Small ambient stars
              ---------------------------------------------- */}

          <Sparkles
            count={8}
            className="sparkles--media"
          />

        </div>

      </div>


      {/* ====================================================
          FULL-WIDTH FEATURE RAIL

          IMPORTANT:
          This is OUTSIDE both hero__panel and hero__media.

          Therefore Hero.css can use:

          grid-column: 1 / -1;

          and the cards will span the entire viewport.
          ==================================================== */}

      <ul
        className="hero__features"
        aria-label="Market highlights"
      >
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </ul>

    </section>
  );
}