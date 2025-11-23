const dishes = [
  {
    name: 'Seared Scallops',
    description: 'Pan-seared diver scallops with cauliflower purée, crispy pancetta, and lemon beurre blanc',
    image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$42'
  },
  {
    name: 'Wagyu Beef Tenderloin',
    description: 'Premium Wagyu beef with truffle potato gratin, roasted vegetables, and red wine reduction',
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$68'
  },
  {
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with porcini mushrooms, parmesan, and white truffle oil',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$36'
  },
  {
    name: 'Pan-Roasted Duck Breast',
    description: 'Crispy duck breast with cherry gastrique, sweet potato purée, and seasonal greens',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$54'
  },
  {
    name: 'Mediterranean Sea Bass',
    description: 'Herb-crusted sea bass with saffron couscous, grilled vegetables, and citrus beurre blanc',
    image: 'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$48'
  },
  {
    name: 'Chocolate Soufflé',
    description: 'Warm dark chocolate soufflé with vanilla bean ice cream and raspberry coulis',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$16'
  }
];

export default function FeaturedDishes() {
  return (
    <section id="menu" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Featured <span className="text-gold">Dishes</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-burgundy text-cream px-4 py-2 rounded-full font-semibold">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">{dish.name}</h3>
                <p className="text-charcoal/70 leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-burgundy text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
