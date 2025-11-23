import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <About />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <Reservation />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
