import './OfferTag.css';

export default function OfferTag() {
  return (
    <div className="offer" role="note" aria-label="Festive savings up to 70% off, factory-direct pricing">
      <div className="offer__tag">
        <div className="offer__body">
          <span className="offer__eyelet" />
          <span className="offer__kicker">Festive Savings</span>
          <span className="offer__upto">Up to</span>
          <span className="offer__value">
            <span className="offer__num">70</span>
            <span className="offer__sup">
              <span className="offer__pct">%</span>
              <span className="offer__off">Off</span>
            </span>
          </span>
          <span className="offer__rule" />
          <span className="offer__note">Factory-Direct Pricing</span>
        </div>
      </div>
    </div>
  );
}
