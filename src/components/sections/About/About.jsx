import { CircleCheck } from 'lucide-react';
import familyImage from '../../../assets/family-shopping.jpg';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './About.css';

const POINTS = [
  'No struggling for parking',
  'No cramped shop-to-shop movement',
  'No running around to find variety',
  'Just drive in, park comfortably, explore 10 shops and choose what you need',
];

export default function About() {
  return (
    <section className="about section-seam" id="about" aria-labelledby="about-title">
      <PanelBurst className="about__burst" />
      <Sparkles count={6} className="sparkles--about" />

      <div className="container about__inner">
        <div className="about__copy">
          <SectionHeader
            align="start"
            id="about-title"
            eyebrow="A Better Way to Shop"
            title={
              <>
                Diwali shopping should feel like part of the <em className="about__accent text-gold">celebration</em>
              </>
            }
          />

          <Reveal as="p" delay={1} className="about__lede">
            Buying crackers should be exciting, not stressful. At Zuzuvadi Pattas Market, we’ve created a more
            organised shopping experience for families coming from Bangalore, Hosur and nearby areas.
          </Reveal>

          <ul className="about__list">
            {POINTS.map((point, i) => (
              <Reveal as="li" delay={Math.min(i + 1, 4)} className="about__point" key={point}>
                <CircleCheck className="about__check" size={22} strokeWidth={1.7} aria-hidden="true" />
                <span>{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="about__media" delay={2}>
          <div className="about__frame">
            <img
              className="about__image"
              src={familyImage}
              alt="A family walking past brightly stocked cracker shops at Zuzuvadi Pattas Market, the children smiling with a box of sparklers"
              width="1243"
              height="1265"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
