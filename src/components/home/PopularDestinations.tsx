
import { MapPin } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      city: "New York",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2070",
      restaurants: 1243,
      chefs: 89
    },
    {
      city: "Los Angeles",
      image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2070",
      restaurants: 986,
      chefs: 63
    },
    {
      city: "Chicago",
      image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2070",
      restaurants: 725,
      chefs: 42
    },
    {
      city: "Miami",
      image: "https://images.unsplash.com/photo-1571041804726-53e8bf082096?q=80&w=2072",
      restaurants: 612,
      chefs: 37
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Popular Food Destinations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the top culinary scenes in these foodie-favorite cities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center gap-1 text-white">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-bold text-lg">{destination.city}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-semibold text-primary">{destination.restaurants}</span> restaurants
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">{destination.chefs}</span> personal chefs
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
