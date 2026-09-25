// Central place for contact details and links.
//
// ⚠️ BEFORE LAUNCH — replace the two placeholders below:
//   1. PHONE: the real Call / WhatsApp number (display text + tel link + WhatsApp link).
//   2. MAPS_URL: the exact Google Maps pin for the market. The current value is only a
//      name search, not a verified location.

const PHONE_E164 = '910000000000'; // PLACEHOLDER — country code + number, digits only

export const SITE = {
  name: 'Zuzuvadi Pattas Market',
  phoneDisplay: '+91 7639 998 000', // PLACEHOLDER
  phoneHref: `tel:+${PHONE_E164}`,
  whatsappHref: `https://wa.me/${PHONE_E164}`,
  mapsUrl: 'https://maps.app.goo.gl/71xss1nnc6nbHiDZA', // PLACEHOLDER
  // As supplied by the client — not an exact postal address.
  locationLine: 'Bengaluru–Chennai Highway towards Hosur',
};

// Homepage section anchors. There is no separate Guides section yet, so "Guides"
// points to How It Works until one is added.
export const NAV_LINKS = [
  { label: 'The Market', href: '#shops' },
  { label: 'Celebrations', href: '#occasions' },
  { label: 'Plan Your Visit', href: '#plan-your-visit' },
  { label: 'How it works', href: '#how-it-works' },
];
