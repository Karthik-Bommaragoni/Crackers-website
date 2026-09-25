import ProductArt from './ProductArt.jsx';

/**
 * Informational category showcase. Deliberately NOT interactive:
 * no links, no buttons, no click handlers.
 */
export default function ProductCategory({ number, slug, title, text, icon: Icon, photo }) {
  return (
    <li className="product">
      <span className="product__num" aria-hidden="true">
        {number}
      </span>
      <div className="product__frame">
        <div className="product__media">
          {photo ? (
            <img className="product__photo" src={photo} alt={title} loading="lazy" />
          ) : (
            <ProductArt slug={slug} />
          )}
        </div>
        <span className="product__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.5} />
        </span>
        <h3 className="product__title">{title}</h3>
        <p className="product__text">{text}</p>
      </div>
    </li>
  );
}
