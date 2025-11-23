import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Visit <span className="text-burgundy">Us</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            We look forward to welcoming you to Savoré Kitchen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slideInLeft">
            <div className="flex items-start space-x-4">
              <div className="bg-burgundy p-4 rounded-lg">
                <MapPin className="text-cream" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal mb-2">Address</h3>
                <p className="text-charcoal/70 text-lg">
                  123 Culinary Boulevard<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-burgundy p-4 rounded-lg">
                <Clock className="text-cream" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal mb-2">Hours</h3>
                <div className="text-charcoal/70 text-lg space-y-1">
                  <p><span className="font-medium">Monday - Thursday:</span> 5:00 PM - 10:00 PM</p>
                  <p><span className="font-medium">Friday - Saturday:</span> 5:00 PM - 11:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-burgundy p-4 rounded-lg">
                <Phone className="text-cream" size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal mb-2">Contact</h3>
                <p className="text-charcoal/70 text-lg">
                  Phone: (555) 123-4567<br />
                  Email: reservations@savorekitchen.com
                </p>
              </div>
            </div>

            <button className="flex items-center space-x-2 bg-burgundy text-cream px-6 py-3 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 font-medium">
              <Navigation size={20} />
              <span>Get Directions</span>
            </button>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-slideInRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Savoré Kitchen Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
