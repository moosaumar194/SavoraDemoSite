const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant plated dish'
  },
  {
    url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fine wine selection'
  },
  {
    url: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Restaurant interior'
  },
  {
    url: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gourmet appetizer'
  },
  {
    url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant dining area'
  },
  {
    url: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Signature cocktail'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            A visual journey through our culinary creations and elegant atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
