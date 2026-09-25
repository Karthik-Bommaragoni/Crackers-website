// Small line icons that Lucide doesn't provide, drawn to match its 24px / stroke style.

export function DiyaIcon({ size = 22, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c1.6 2 2.2 3.4 0 6-2.2-2.6-1.6-4 0-6Z" />
      <path d="M3 13h18c-1 4-4.5 6-9 6s-8-2-9-6Z" />
      <path d="M19.5 13l2-1.5" />
    </svg>
  );
}

export function RingsIcon({ size = 22, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8.5" cy="14" r="5.5" />
      <circle cx="15.5" cy="14" r="5.5" />
      <path d="M13 5.5l2.5-2.5 2.5 2.5-2.5 2.5Z" />
    </svg>
  );
}
