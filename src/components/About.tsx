import { Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Our <span className="text-burgundy">Story</span>
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Founded in 2015, Savoré Kitchen has been a beacon of culinary excellence in the heart of the city.
              Our passion for creating unforgettable dining experiences drives everything we do.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We believe that great food starts with great ingredients. That's why we partner with local farmers
              and artisans to source the freshest, highest-quality produce, meats, and seafood. Every dish is
              crafted with care, creativity, and a deep respect for culinary tradition.
            </p>
            <div className="flex items-start space-x-4 pt-4">
              <Award className="text-gold mt-1" size={28} />
              <div>
                <h3 className="font-semibold text-xl text-charcoal mb-1">Award-Winning Excellence</h3>
                <p className="text-charcoal/70">Recognized by culinary experts nationwide for our innovative approach and exceptional quality.</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Executive Chef at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6">
                <h3 className="font-serif text-2xl text-cream mb-1">Chef Marcus Beaumont</h3>
                <p className="text-gold">Executive Chef & Founder</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-burgundy rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
