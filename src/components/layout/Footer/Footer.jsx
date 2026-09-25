import { ArrowRight, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import logo from '../../../assets/logo.png';
import { NAV_LINKS, SITE } from '../../../data/site.js';
import { Sparkles } from '../../common/Fireworks/Fireworks.jsx';
import Diya from '../../common/Diya/Diya.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section-seam" id="footer">
      <Sparkles count={5} className="sparkles--footer" />
      <Diya className="footer__diya footer__diya--left" />
      <Diya className="footer__diya footer__diya--right" />

      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt={SITE.name} width="640" height="416" loading="lazy" />
          <p className="footer__motto">More Space Less Hassle</p>
          <p className="footer__points">
            <span>10 Shops</span>
            <span className="footer__dot" aria-hidden="true">•</span>
            <span>One Destination</span>
            <span className="footer__dot" aria-hidden="true">•</span>
            <span>Dedicated Parking</span>
          </p>
        </div>

        <div className="footer__rule" aria-hidden="true" />

        {/* Navigation */}
        <nav aria-label="Footer">
          <ul className="footer__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__rule" aria-hidden="true" />

        {/* Visit / contact */}
        <div className="footer__contact">
          <div className="footer__block">
            <MapPin className="footer__icon" size={22} strokeWidth={1.5} aria-hidden="true" />
            <h2 className="footer__label">Location</h2>
            <p className="footer__value footer__location">
              {SITE.locationLine.split(', ').map((part) => (
                <span key={part}>{part}</span>
              ))}
            </p>
          </div>

          <div className="footer__block">
            <Phone className="footer__icon" size={22} strokeWidth={1.5} aria-hidden="true" />
            <h2 className="footer__label">Call / WhatsApp</h2>
            <p className="footer__value footer__links">
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" />
                WhatsApp
              </a>
            </p>
          </div>

          <div className="footer__block">
            <Navigation className="footer__icon" size={22} strokeWidth={1.5} aria-hidden="true" />
            <h2 className="footer__label">Directions</h2>
            <p className="footer__value">
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </p>
          </div>
        </div>

        <p className="footer__plan" href="#plan-your-visit">
          Plan Your Visit
          {/* <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" /> */}
        </p>
      </div>

      <div className="footer__bottom">
        <p className="container">© 2026 Zuzuvadi Pattas Market. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
