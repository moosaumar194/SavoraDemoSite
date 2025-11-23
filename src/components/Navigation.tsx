import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-gold font-bold">Savoré Kitchen</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {['About', 'Menu', 'Testimonials', 'Reservation', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-cream hover:text-gold transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('reservation')}
              className="bg-burgundy text-cream px-6 py-2 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 font-medium"
            >
              Reserve Table
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream hover:text-gold"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-burgundy">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {['About', 'Menu', 'Testimonials', 'Reservation', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-cream hover:text-gold transition-colors duration-200 py-2 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
