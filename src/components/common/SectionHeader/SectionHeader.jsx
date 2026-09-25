import Reveal from '../Reveal/Reveal.jsx';
import './SectionHeader.css';

/** Small gold lotus used above centred section eyebrows. */
function Lotus() {
  return (
    <svg className="section-header__lotus" viewBox="0 0 40 24" aria-hidden="true">
      <path d="M20 2 C25 8 25 15 20 21 C15 15 15 8 20 2 Z" />
      <path d="M20 21 C14 19 9 14 8 7 C13 9 17 13 20 21 Z" />
      <path d="M20 21 C26 19 31 14 32 7 C27 9 23 13 20 21 Z" />
      <path d="M20 21 C13 22 6 20 2 15 C8 15 14 17 20 21 Z" />
      <path d="M20 21 C27 22 34 20 38 15 C32 15 26 17 20 21 Z" />
    </svg>
  );
}

/**
 * Shared eyebrow + editorial heading + intro used by every section,
 * so headings read as one family across the homepage.
 */
export default function SectionHeader({ eyebrow, title, intro, id, align = 'center', as: Heading = 'h2', className = '' }) {
  return (
    <Reveal as="header" className={`section-header section-header--${align} ${className}`.trim()}>
      {align === 'center' && <Lotus />}
      <p className="section-header__eyebrow">
        <span className="section-header__rule" aria-hidden="true" />
        <span>{eyebrow}</span>
        <span className="section-header__rule" aria-hidden="true" />
      </p>
      <Heading className="section-header__title" id={id}>
        {title}
      </Heading>
      {intro && <p className="section-header__intro">{intro}</p>}
    </Reveal>
  );
}
