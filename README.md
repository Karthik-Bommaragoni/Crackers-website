# Zuzuvadi Pattas Market — Homepage

One continuous homepage built with React + Vite + JavaScript + plain CSS.
No Tailwind, no Bootstrap, no TypeScript, no routing.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Page order

Navbar → Hero → The Zuzuvadi Difference → About → 10 Shops. One Destination.
→ Our Products → How It Works → Hassle-Free Parking → Safety at Zuzuvadi
→ More Than Just Diwali → Plan Your Visit → A Destination Worth the Drive → Footer

`src/App.jsx` only assembles the sections.

## Structure

```
src/
  assets/
    logo.png, hero-background.jpeg, family-shopping.jpg
    images/          site plan, safety market photo, satellite view, Bengaluru skyline
      occasions/     ← occasion photos (see below)
    products/        ← category photos (see below)
    how-it-works/    ← step photos (see below)
  data/site.js       phone number, maps link, nav anchors
  components/
    layout/          Navbar/, Footer/
    common/          Fireworks/, Diya/, Lantern/, Reveal/, SectionHeader/
    sections/        Hero/, Difference/, About/, Shops/, Products/, HowItWorks/,
                     HassleFreeParking/, Safety/, Occasions/, PlanYourVisit/, Destination/
  index.css          design tokens, base styles, buttons, shared utilities
```

Each section folder holds its own `.jsx` and `.css`.

## Adding your photographs (no code changes needed)

Drop files with these exact names into the folders below (jpg, jpeg, png, webp or avif).
They replace the stand-ins automatically on the next build or dev reload.

`src/assets/products/`
sparklers · flower-pots · ground-chakkars · rockets · sound-crackers · fancy-crackers · gift-boxes

`src/assets/how-it-works/`
drive-in · park-comfortably · explore-shops · take-celebration-home

`src/assets/images/occasions/`
diwali · weddings · birthdays · housewarmings · family-functions · special-celebrations
(shown at 16:10)

Product images are shown at a 4:5 portrait ratio; How It Works images at 4:3.
Both are cropped with `object-fit: cover`, so keep the subject near the centre.

## Before launch

- In `src/data/site.js`, replace the placeholder phone number (used for Call and WhatsApp)
  and set the exact Google Maps pin. Every "Get Directions" and "Call / WhatsApp" link reads from there.
- "Guides" currently scrolls to How It Works; point it at a Guides section once one exists.

All animation stops for visitors with "reduce motion" enabled.
