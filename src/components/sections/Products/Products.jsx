import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bomb,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Gift,
  LoaderPinwheel,
  PartyPopper,
  Rocket,
  Sparkles as SparklesIcon,
} from 'lucide-react';
import Diya from '../../common/Diya/Diya.jsx';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import ProductCategory from './ProductCategory.jsx';
import './Products.css';

/*
 * Real photographs are picked up automatically: drop a file named after the
 * slug (e.g. sparklers.jpg, flower-pots.webp) into src/assets/products/ and it
 * replaces the illustrated stand-in. No code change needed.
 */
const PHOTOS = import.meta.glob('../../../assets/products/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

function photoFor(slug) {
  const key = Object.keys(PHOTOS).find((path) => path.split('/').pop().replace(/\.[^.]+$/, '') === slug);
  return key ? PHOTOS[key] : null;
}

const CATEGORIES = [
  { slug: 'sparklers', title: 'Sparklers', text: 'A favourite for all ages', icon: SparklesIcon },
  { slug: 'flower-pots', title: 'Flower Pots', text: 'Bright colours and festive energy', icon: Flower2 },
  { slug: 'ground-chakkars', title: 'Ground Chakkars', text: 'Classic Diwali fun', icon: LoaderPinwheel },
  { slug: 'rockets', title: 'Rockets & Sky Shots', text: 'For bigger celebrations', icon: Rocket },
  { slug: 'sound-crackers', title: 'Sound Crackers', text: 'For celebrations with a bang', icon: Bomb },
  { slug: 'fancy-crackers', title: 'Fancy Crackers', text: 'Fresh surprises for your celebration', icon: PartyPopper },
  { slug: 'gift-boxes', title: 'Gift Boxes', text: 'A festive mix to share', icon: Gift },
];

export default function Products() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  // Carousel controls only move the track; the showcases themselves stay static.
  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.product');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="products section-seam" id="products" aria-labelledby="products-title">
      <PanelBurst className="products__burst products__burst--left" />
      <PanelBurst className="products__burst products__burst--right" />
      <Sparkles count={7} className="sparkles--products" />
      <Diya className="products__diya products__diya--left" />
      <Diya className="products__diya products__diya--right" />

      <div className="container products__inner">
        <SectionHeader
          id="products-title"
          eyebrow="Our Products"
          title={
            <>
              Everything for Your <span className="text-gold">Celebration</span>
            </>
          }
          intro="Different celebrations Same joy"
        />

        <Reveal className="products__carousel" delay={1}>
          <button
            type="button"
            className="products__control products__control--prev"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Show previous categories"
            aria-controls="products-track"
          >
            <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <ul
            id="products-track"
            className="products__track"
            ref={trackRef}
            onScroll={updateEdges}
            tabIndex={0}
            aria-label="Product categories — scroll sideways to see all seven"
          >
            {CATEGORIES.map((c, i) => (
              <ProductCategory key={c.slug} number={String(i + 1).padStart(2, '0')} photo={photoFor(c.slug)} {...c} />
            ))}
          </ul>

          <button
            type="button"
            className="products__control products__control--next"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Show more categories"
            aria-controls="products-track"
          >
            <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </Reveal>

        {/* Static statement — intentionally not a link or button */}
        <Reveal as="p" delay={2} className="closing-line products__note">
          <span>
            Visit Store to View More Items
            {/* <ArrowRight className="products__note-arrow" size={16} strokeWidth={2} aria-hidden="true" /> */}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
