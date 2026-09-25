import { CarFront, House, ShoppingBag, SquareParking } from 'lucide-react';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './HowItWorks.css';

/*
 * Final photographs are picked up automatically: save them in
 * src/assets/how-it-works/ with these names (jpg, jpeg, png or webp):
 *   drive-in, park-comfortably, explore-shops, take-celebration-home
 * Until then a styled placeholder keeps the layout intact.
 */
const PHOTOS = import.meta.glob('../../../assets/how-it-works/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

function photoFor(slug) {
  const key = Object.keys(PHOTOS).find((path) => path.split('/').pop().replace(/\.[^.]+$/, '') === slug);
  return key ? PHOTOS[key] : null;
}

const STEPS = [
  {
    slug: 'drive-in',
    icon: CarFront,
    title: 'Drive In',
    text: 'Reach Zuzuvadi Pattas Market easily from Bangalore, Hosur and nearby areas',
  },
  {
    slug: 'park-comfortably',
    icon: SquareParking,
    title: 'Park',
    text: 'Use the large dedicated parking area and avoid the usual roadside parking rush',
  },
  {
    slug: 'explore-shops',
    icon: ShoppingBag,
    title: 'Explore',
    text: 'Walk around comfortably, compare products and choose from a wide range across 10 shops',
  },
  {
    slug: 'take-celebration-home',
    icon: House,
    title: 'Celebrate',
    text: 'Finish your shopping and get back to enjoying the festival with your family',
  },
];

export default function HowItWorks() {
  return (
    <section className="how section-seam" id="how-it-works" aria-labelledby="how-title">
      <PanelBurst className="how__burst" />
      <Sparkles count={6} className="sparkles--how" />

      <p className="how__tagline" aria-hidden="true">
        Easy in
        <br />
        Happy out
      </p>

      <div className="container how__inner">
        <SectionHeader
  id="how-title"
  eyebrow="How It Works"
  title="A simple, comfortable and enjoyable shopping experience for you and your family"
/>

        <ul className="how__grid">
          {STEPS.map(({ slug, icon: Icon, title, text }, i) => {
            const photo = photoFor(slug);
            return (
              <Reveal as="li" delay={i + 1} className="step" key={slug}>
  <h3 className="step__title">{title}</h3>

  <figure className="step__media">
    {photo ? (
      <img className="step__photo" src={photo} alt="" loading="lazy" />
    ) : (
      <div className="step__placeholder" aria-hidden="true">
        <Icon size={56} strokeWidth={1} />
      </div>
    )}
  </figure>

  <p className="step__text">{text}</p>
</Reveal>
            );
          })}
        </ul>

        {/* Static closing statement — not interactive */}
        <Reveal as="p" delay={2} className="closing-line how__note">
          Celebrations Travel Further
        </Reveal>
      </div>
    </section>
  );
}
