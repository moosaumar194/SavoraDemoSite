import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeIn">
        <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6 leading-tight">
          Experience the Art of <span className="text-gold">Exceptional Dining</span>
        </h1>
        <p className="text-xl md:text-2xl text-cream/90 mb-12 max-w-2xl mx-auto">
          Where flavor meets craftsmanship — made from the finest ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('reservation')}
            className="bg-burgundy text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-transparent border-2 border-cream text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-cream hover:text-charcoal transition-all duration-300 transform hover:scale-105"
          >
            View Menu
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce cursor-pointer z-10"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
