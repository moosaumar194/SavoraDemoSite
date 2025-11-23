import { Leaf, ChefHat, Home, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Farm-Fresh Ingredients',
    description: 'We source locally from trusted farms to ensure the highest quality and freshness in every dish.'
  },
  {
    icon: ChefHat,
    title: 'World-Class Chefs',
    description: 'Our culinary team brings decades of experience and passion for creating exceptional cuisine.'
  },
  {
    icon: Home,
    title: 'Cozy Atmosphere',
    description: 'Elegant yet comfortable dining spaces designed for memorable experiences with loved ones.'
  },
  {
    icon: Heart,
    title: 'Exceptional Service',
    description: 'Attentive, knowledgeable staff dedicated to making your visit truly special.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Why Choose <span className="text-burgundy">Savoré Kitchen</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Experience the difference that passion, quality, and dedication make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-burgundy rounded-full mb-6 group-hover:bg-gold transition-colors duration-300">
                  <Icon className="text-cream" size={36} />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
