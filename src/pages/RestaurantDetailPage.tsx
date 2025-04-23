
import MainLayout from '@/components/layout/MainLayout';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';

const RestaurantDetailPage = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const restaurant = {
    name: "Sample Restaurant",
    rating: 4.8,
    cuisine: "Contemporary",
    priceRange: "$$$",
    address: "123 Culinary Street",
    hours: "11:00 AM - 10:00 PM",
    description: "Experience fine dining at its best with our carefully curated menu featuring seasonal ingredients and innovative cooking techniques.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                {restaurant.rating}
              </span>
              <span>•</span>
              <span>{restaurant.cuisine}</span>
              <span>•</span>
              <span>{restaurant.priceRange}</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">{restaurant.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p className="text-gray-600">{restaurant.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <DollarSign className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Price Range</h3>
                  <p className="text-gray-600">{restaurant.priceRange}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {restaurant.description}
            </p>
          </div>

          <div className="pt-6">
            <Button 
              className="w-full md:w-auto bg-culinary-primary hover:bg-culinary-primary/90"
              onClick={() => window.location.href = `/booking?type=restaurant&id=${id}`}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RestaurantDetailPage;
