import { Car, ShieldCheck, ShoppingBag, Users } from 'lucide-react';
import { PanelBurst, Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Reveal from '../../common/Reveal/Reveal.jsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader.jsx';
import './Difference.css';

const BENEFITS = [
  { icon: ShieldCheck, title: 'Safety', text: 'Designed with care' },
  { icon: Car, title: 'Parking', text: '2 acres' },
  { icon: Users, title: 'Space', text: 'Room to browse' },
  { icon: ShoppingBag, title: 'Choice', text: '10 shops' },
];

export default function Difference() {
  return (
    <section className="difference section-seam" id="why" aria-labelledby="difference-title">
      <PanelBurst className="difference__burst difference__burst--left" />
      <PanelBurst className="difference__burst difference__burst--right" />
      <Sparkles count={7} className="sparkles--difference" />

      <div className="container difference__inner">
        <SectionHeader
          id="difference-title"
          className="difference__head"
          eyebrow="The ZPM Difference"
          title={
            <>
              <span className="nowrap">More Space</span> <span className="nowrap text-gold">Less Hassle</span>
            </>
          }
          intro="Designed to make your festive shopping easier, safer and more enjoyable"
        />

        <ul className="difference__grid">
          {BENEFITS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" delay={i + 1} className="benefit" key={title}>
              <span className="benefit__icon" aria-hidden="true">
                <Icon size={32} strokeWidth={1.4} />
              </span>
              <h3 className="benefit__title">{title}</h3>
              <p className="benefit__text">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
