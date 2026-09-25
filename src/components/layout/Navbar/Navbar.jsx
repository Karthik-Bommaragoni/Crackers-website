import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import logo from '../../../assets/logo.png';
import { NAV_LINKS, SITE } from '../../../data/site.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape and when the viewport grows past the breakpoint.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 992px)');
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar${open ? ' navbar--open' : ''}`}>
      <a className="navbar__brand" href="#top" aria-label={`${SITE.name} home`} onClick={close}>
        <img className="navbar__logo" src={logo} alt={SITE.name} width="640" height="416" />
      </a>

      <nav className="navbar__nav" aria-label="Primary">
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="navbar__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="navbar__link navbar__link--call" href={SITE.phoneHref}>
              <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
              Call
            </a>
          </li>
        </ul>
        <a className="btn btn--gold btn--sm" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
          Get Directions
          <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </nav>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul className="mobile-menu__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="mobile-menu__link" href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="mobile-menu__link" href={SITE.phoneHref} onClick={close}>
              <Phone size={18} aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </a>
          </li>
        </ul>
        <a
          className="btn btn--gold mobile-menu__cta"
          href={SITE.mapsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={close}
        >
          Get Directions
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
