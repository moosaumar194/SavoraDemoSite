import { Calendar, Clock, Users, Mail, User, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Book Your <span className="text-burgundy">Culinary Experience</span>
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Reserve your table today and prepare for an unforgettable dining journey.
              Whether it's a romantic dinner, family celebration, or business gathering,
              we'll make it extraordinary.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-burgundy p-3 rounded-lg">
                  <Calendar className="text-cream" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-1">Flexible Booking</h3>
                  <p className="text-charcoal/70">Choose from lunch, dinner, or special event reservations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-burgundy p-3 rounded-lg">
                  <Users className="text-cream" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-1">Private Events</h3>
                  <p className="text-charcoal/70">Host your special occasions in our elegant private dining rooms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-charcoal rounded-2xl p-8 shadow-2xl animate-slideInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-cream mb-2">
                  <User size={18} className="mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center text-cream mb-2">
                  <Mail size={18} className="mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="flex items-center text-cream mb-2">
                  <Phone size={18} className="mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-cream mb-2">
                    <Calendar size={18} className="mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-cream mb-2">
                    <Clock size={18} className="mr-2" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center text-cream mb-2">
                  <Users size={18} className="mr-2" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="9+">9+ Guests (Call for arrangements)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-burgundy text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {submitted ? 'Reservation Submitted!' : 'Reserve Table'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
