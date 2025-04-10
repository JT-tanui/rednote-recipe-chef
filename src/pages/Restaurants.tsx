
import MainLayout from '@/components/layout/MainLayout';
import RestaurantCard from '@/components/ui/restaurant-card/RestaurantCard';
import { Search, Filter, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock restaurant data
const mockRestaurants = [
  {
    id: 'rest1',
    name: 'The Rustic Table',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    rating: 4.7,
    cuisine: 'Mediterranean',
    location: 'Downtown',
    priceRange: '$$$'
  },
  {
    id: 'rest2',
    name: 'Blue Ocean Sushi',
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070',
    rating: 4.5,
    cuisine: 'Japanese',
    location: 'Harbor District',
    priceRange: '$$'
  },
  {
    id: 'rest3',
    name: 'Spice Avenue',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974',
    rating: 4.3,
    cuisine: 'Indian',
    location: 'Midtown',
    priceRange: '$$'
  },
  {
    id: 'rest4',
    name: 'Mama Mia Trattoria',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071',
    rating: 4.8,
    cuisine: 'Italian',
    location: 'Little Italy',
    priceRange: '$$$'
  },
  {
    id: 'rest5',
    name: 'Green Garden Vegan',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070',
    rating: 4.2,
    cuisine: 'Vegan',
    location: 'Westside',
    priceRange: '$$'
  },
  {
    id: 'rest6',
    name: 'Burger Joint',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1974',
    rating: 4.4,
    cuisine: 'American',
    location: 'Central Square',
    priceRange: '$'
  }
];

const Restaurants = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-xl font-bold">Restaurants</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Find and book amazing dining experiences</p>
        </header>
        
        <div className="flex space-x-2 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search restaurants or cuisines..." 
              className="pl-9 h-10 text-sm"
            />
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-10 flex items-center whitespace-nowrap text-xs"
          >
            <MapPin size={14} className="mr-1" />
            Near Me
          </Button>
          
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Filter size={16} />
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="nearby" className="text-xs">Nearby</TabsTrigger>
            <TabsTrigger value="popular" className="text-xs">Popular</TabsTrigger>
            <TabsTrigger value="bookmarked" className="text-xs">Bookmarked</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockRestaurants.map(restaurant => (
                <div key={restaurant.id}>
                  <RestaurantCard {...restaurant} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nearby" className="mt-4">
            <div className="text-center p-8">
              <p className="text-sm text-gray-500">Enable location services to see nearby restaurants</p>
              <Button className="mt-4 bg-culinary-primary text-white hover:bg-culinary-primary/90">
                Enable Location
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockRestaurants
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3)
                .map(restaurant => (
                  <div key={restaurant.id}>
                    <RestaurantCard {...restaurant} />
                  </div>
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="bookmarked" className="mt-4">
            <div className="text-center p-8">
              <p className="text-sm text-gray-500">You haven't bookmarked any restaurants yet</p>
              <Button className="mt-4 bg-culinary-secondary text-white hover:bg-culinary-secondary/90">
                Explore Restaurants
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Restaurants;
