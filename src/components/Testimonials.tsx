import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Critic',
    text: 'Savoré Kitchen delivers an unparalleled dining experience. Every dish is a masterpiece, and the attention to detail is exceptional. This is fine dining at its absolute best.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Regular Guest',
    text: 'I\'ve been coming here for years, and they never disappoint. The consistency in quality, the warm atmosphere, and the impeccable service keep me coming back. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    text: 'From the moment you walk in, you know you\'re in for something special. The ambiance, the presentation, and especially the flavors are absolutely incredible. A must-visit!',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'David Thompson',
    role: 'Business Executive',
    text: 'Perfect for both business dinners and special occasions. The wine selection is outstanding, and the staff always goes above and beyond to ensure a memorable experience.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            What Our <span className="text-gold">Guests Say</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Don't just take our word for it — hear from those who've experienced Savoré Kitchen
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="text-gold mb-6" size={48} />

            <div className="space-y-6 animate-fadeIn" key={currentIndex}>
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={24} />
                ))}
              </div>

              <p className="text-xl text-charcoal leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center space-x-4 pt-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg text-charcoal">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-charcoal/70">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-cream/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
