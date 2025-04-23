import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const FeaturedRestaurants = () => {
  const navigate = useNavigate();
  
  const featuredRestaurants = [
    {
      id: 1,
      name: "Le Petit Bistro",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
      rating: 4.8,
      cuisine: "French",
      priceRange: "$$$",
      description: "Experience authentic French cuisine in an intimate setting",
      featured: "Chef's Special: Coq au Vin",
      path: "/restaurants/le-petit-bistro"
    },
    {
      id: 2,
      name: "Sakura Japanese",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070",
      rating: 4.9,
      cuisine: "Japanese",
      priceRange: "$$$$",
      description: "Premium sushi and authentic Japanese dishes",
      featured: "Omakase Experience",
      path: "/restaurants/sakura-japanese"
    },
    {
      id: 3,
      name: "Tuscan Garden",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      rating: 4.7,
      cuisine: "Italian",
      priceRange: "$$",
      description: "Rustic Italian cuisine in a garden setting",
      featured: "Truffle Season Menu",
      path: "/restaurants/tuscan-garden"
    }
  ];

  const handleReserveTable = (restaurantId: number) => {
    navigate(`/booking?restaurant=${restaurantId}`);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Featured Restaurants</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our hand-picked selection of extraordinary dining experiences
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredRestaurants.map((restaurant) => (
              <CarouselItem key={restaurant.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Link to={restaurant.path}>
                      <div className="relative h-64">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-2 rounded-full flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{restaurant.rating}</span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <Link to={restaurant.path}>
                        <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                      </Link>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{restaurant.cuisine}</span>
                        <span className="mx-2">•</span>
                        <span>{restaurant.priceRange}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {restaurant.description}
                      </p>
                      <div className="bg-primary/5 rounded-lg p-3 mb-4">
                        <p className="text-primary font-medium">{restaurant.featured}</p>
                      </div>
                      <Button 
                        className="w-full"
                        onClick={() => handleReserveTable(restaurant.id)}
                      >
                        Reserve a Table
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
