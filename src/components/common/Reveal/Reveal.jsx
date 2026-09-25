import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * Fades its children up once when they scroll into view.
 * `delay` (0–4) staggers siblings. Renders as any element via `as`.
 */
export function useInView(options = { rootMargin: '0px 0px -6% 0px', threshold: 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      options
    );
    io.observe(node);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInView();

  const classes = ['reveal', delay ? `reveal--d${delay}` : '', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
