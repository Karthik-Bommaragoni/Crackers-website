import './FeatureCard.css';

export default function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <li className="feature-card">
      <span className="feature-card__icon" aria-hidden="true">
        <Icon size={19} strokeWidth={1.9} />
      </span>

      <span className="feature-card__text">
        <span className="feature-card__title">
          {title}
        </span>

        <span className="feature-card__subtitle">
          {subtitle}
        </span>
      </span>
    </li>
  );
}