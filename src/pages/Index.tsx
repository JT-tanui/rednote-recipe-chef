
import MainLayout from '@/components/layout/MainLayout';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';
import RestaurantCard from '@/components/ui/restaurant-card/RestaurantCard';
import ChefCard from '@/components/ui/chef-card/ChefCard';
import DiscoveryFeed from '@/components/feed/DiscoveryFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for our feed
const mockRecipes = [
  {
    id: 'r1',
    title: 'Spicy Thai Basil Chicken',
    image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?q=80&w=2070',
    duration: '30 mins',
    difficulty: 'Medium',
    chef: 'Jamie Oliver',
    likes: 1240
  },
  {
    id: 'r2',
    title: 'Creamy Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=2134',
    duration: '45 mins',
    difficulty: 'Hard',
    chef: 'Gordon Ramsay',
    likes: 980
  }
];

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
  }
];

const mockChefs = [
  {
    id: 'c1',
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080',
    specialty: 'French Cuisine',
    rating: 4.9,
    availability: 'Weekends',
    hourlyRate: '$75/hr'
  },
  {
    id: 'c2',
    name: 'David Kim',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974',
    specialty: 'Asian Fusion',
    rating: 4.8,
    availability: 'Mon-Fri',
    hourlyRate: '$65/hr'
  }
];

// Create feed items from our mock data
const feedItems = [
  ...mockRecipes.map(recipe => ({
    id: recipe.id,
    type: 'recipe' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <RecipeCard {...recipe} />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Try This Recipe</h2>
            <p className="text-xs text-gray-300 mt-1">A delicious meal that's quick to prepare</p>
            <button className="mt-4 btn-primary w-full">View Recipe</button>
          </div>
        </div>
      </div>
    )
  })),
  ...mockRestaurants.map(restaurant => ({
    id: restaurant.id,
    type: 'restaurant' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <RestaurantCard {...restaurant} />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Discover New Places</h2>
            <p className="text-xs text-gray-300 mt-1">Book your next dining experience</p>
            <button className="mt-4 btn-secondary w-full">Make Reservation</button>
          </div>
        </div>
      </div>
    )
  })),
  ...mockChefs.map(chef => ({
    id: chef.id,
    type: 'chef' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <ChefCard {...chef} />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Hire a Professional Chef</h2>
            <p className="text-xs text-gray-300 mt-1">For special occasions or weekly meal prep</p>
            <button className="mt-4 btn-primary w-full">Book Chef</button>
          </div>
        </div>
      </div>
    )
  }))
];

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gradient">DineX</h1>
          <Tabs defaultValue="for-you" className="w-auto">
            <TabsList className="bg-gray-100 dark:bg-gray-700">
              <TabsTrigger value="for-you" className="text-xs">For You</TabsTrigger>
              <TabsTrigger value="trending" className="text-xs">Trending</TabsTrigger>
              <TabsTrigger value="nearby" className="text-xs">Nearby</TabsTrigger>
            </TabsList>
          </Tabs>
        </header>
        
        <section>
          <DiscoveryFeed items={feedItems} />
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
