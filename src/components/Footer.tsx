import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-gold mb-4">Savoré Kitchen</h3>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Experience the art of exceptional dining where flavor meets craftsmanship.
              Join us for an unforgettable culinary journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-burgundy p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-burgundy p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-burgundy p-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Menu', 'Reservation', 'Location'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-cream/80 hover:text-gold transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4 text-gold">Newsletter</h4>
            <p className="text-cream/80 mb-4">
              Subscribe for exclusive offers and culinary updates
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex items-center bg-cream/10 rounded-full overflow-hidden">
                <Mail className="ml-4 text-cream/50" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 bg-transparent text-cream placeholder-cream/50 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-burgundy text-cream px-6 py-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 font-medium"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/70">
            &copy; {new Date().getFullYear()} Savoré Kitchen. All rights reserved. | Made with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
