import Navbar from './components/layout/Navbar/Navbar.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Hero from './components/sections/Hero/Hero.jsx';
import Difference from './components/sections/Difference/Difference.jsx';
import About from './components/sections/About/About.jsx';
import Shops from './components/sections/Shops/Shops.jsx';
import Products from './components/sections/Products/Products.jsx';
import HowItWorks from './components/sections/HowItWorks/HowItWorks.jsx';
import HassleFreeParking from './components/sections/HassleFreeParking/HassleFreeParking.jsx';
import Safety from './components/sections/Safety/Safety.jsx';
import Occasions from './components/sections/Occasions/Occasions.jsx';
import PlanYourVisit from './components/sections/PlanYourVisit/PlanYourVisit.jsx';
import Destination from './components/sections/Destination/Destination.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Difference />
        <About />
        <Shops />
        <Products />
        <HowItWorks />
        <HassleFreeParking />
        <Safety />
        <Occasions />
        <PlanYourVisit />
        <Destination />
      </main>
      <Footer />
    </>
  );
}
