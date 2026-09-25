import { Gift, House, Star, Users } from 'lucide-react';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Diya from '../../common/Diya/Diya.jsx';
import Lantern from '../../common/Lantern/Lantern.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import { DiyaIcon, RingsIcon } from './OccasionIcons.jsx';
import './Occasions.css';

/*
 * Photographs are picked up automatically. Save them (jpg, jpeg, png, webp or avif) as
 *   diwali · weddings · birthdays · housewarmings · family-functions · special-celebrations
 * in src/assets/images/occasions/ (src/assets/occasions/ also works).
 * Until a photo exists, a styled placeholder keeps the layout intact.
 */
const PHOTOS = import.meta.glob(
  ['../../../assets/images/occasions/*.{jpg,jpeg,png,webp,avif}', '../../../assets/occasions/*.{jpg,jpeg,png,webp,avif}'],
  { eager: true, import: 'default' }
);

function photoFor(slug) {
  const key = Object.keys(PHOTOS).find((path) => path.split('/').pop().replace(/\.[^.]+$/, '') === slug);
  return key ? PHOTOS[key] : null;
}

const OCCASIONS = [
  { slug: 'diwali', icon: DiyaIcon, title: 'Diwali', text: 'Light up the celebrations' },
  { slug: 'weddings', icon: RingsIcon, title: 'Weddings & Receptions', text: 'Add sparkle to your special day' },
  { slug: 'birthdays', icon: Gift, title: 'Birthdays', text: 'Make their day brighter' },
  { slug: 'housewarmings', icon: House, title: 'Housewarmings', text: 'Welcome new beginnings' },
  { slug: 'family-functions', icon: Users, title: 'Family Functions', text: 'Bring people closer' },
  { slug: 'special-celebrations', icon: Star, title: 'Special Celebrations', text: 'Good people. Brighter moments' },
];

export default function Occasions() {
  return (
    <section className="occasions section-seam" id="occasions" aria-labelledby="occasions-title">
      <PanelBurst className="occasions__burst occasions__burst--left" />
      <PanelBurst className="occasions__burst occasions__burst--right" />
      <Sparkles count={7} className="sparkles--occasions" />
      <Lantern beads={6} className="occasions__lantern occasions__lantern--left" />
      <Lantern beads={4} className="occasions__lantern occasions__lantern--right" />
      <Diya className="occasions__diya occasions__diya--left" />
      <Diya className="occasions__diya occasions__diya--right" />

      <div className="container occasions__inner">
        <SectionHeader
          id="occasions-title"
          eyebrow="For Every Occasion"
          title={
            <>
              More Than Just <span className="text-gold">Diwali</span>
            </>
          }
          intro="Find crackers and fireworks for every special moment in life"
        />

        <ul className="occasions__grid">
          {OCCASIONS.map(({ slug, icon: Icon, title, text }, i) => {
            const photo = photoFor(slug);
            return (
              <Reveal as="li" delay={(i % 3) + 1} className="occasion" key={slug}>
                <figure className="occasion__media">
                  {photo ? (
                    <img className="occasion__photo" src={photo} alt="" loading="lazy" />
                  ) : (
                    <div className="occasion__placeholder" aria-hidden="true">
                      <Icon size={54} strokeWidth={1} />
                    </div>
                  )}
                </figure>
                <span className="occasion__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="occasion__title">{title}</h3>
                <p className="occasion__text">{text}</p>
                <span className="occasion__rule" aria-hidden="true" />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
