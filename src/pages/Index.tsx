import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DiscoveryCategorySelector from '@/components/feed/DiscoveryCategorySelector';
import TrendingSection from '@/components/discover/TrendingSection';
import ForYouSection from '@/components/discover/ForYouSection';
import NearbySection from '@/components/discover/NearbySection';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';
import RestaurantCard from '@/components/ui/restaurant-card/RestaurantCard';
import ChefCard from '@/components/ui/chef-card/ChefCard';

type CategoryType = 'all' | 'recipes' | 'restaurants' | 'chefs';
type FeedType = 'for-you' | 'trending' | 'nearby';

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

// For you feed items (personalized)
const forYouItems = [
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

// Trending feed items
const trendingItems = [
  {
    id: 'trend1',
    type: 'recipe' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <RecipeCard 
            id="trend-r1"
            title="Viral Baked Feta Pasta"
            image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070"
            duration="25 mins"
            difficulty="Easy"
            chef="Social Chef"
            likes={15400}
          />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Trending Recipe</h2>
            <p className="text-xs text-gray-300 mt-1">Everyone is making this right now!</p>
            <button className="mt-4 btn-primary w-full">View Recipe</button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'trend2',
    type: 'restaurant' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <RestaurantCard 
            id="trend-r1"
            name="La Petite Bistro"
            image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074"
            rating={4.9}
            cuisine="French"
            location="Arts District"
            priceRange="$$$$"
          />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Hottest Restaurant</h2>
            <p className="text-xs text-gray-300 mt-1">Book now before it's full for months</p>
            <button className="mt-4 btn-secondary w-full">Make Reservation</button>
          </div>
        </div>
      </div>
    )
  }
];

// Nearby feed items
const nearbyItems = [
  {
    id: 'nearby1',
    type: 'restaurant' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <RestaurantCard 
            id="nearby-r1"
            name="Corner Café"
            image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071"
            rating={4.3}
            cuisine="Café"
            location="0.2 miles away"
            priceRange="$"
          />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Just Around the Corner</h2>
            <p className="text-xs text-gray-300 mt-1">2 minute walk from your location</p>
            <button className="mt-4 btn-secondary w-full">View Details</button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'nearby2',
    type: 'chef' as const,
    content: (
      <div className="h-full bg-gradient-to-b from-gray-900/70 to-gray-900/95 flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          <ChefCard 
            id="nearby-c1"
            name="Alex Zhang"
            image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954"
            specialty="Private Dining"
            rating={4.7}
            availability="Available Today"
            hourlyRate="$80/hr"
          />
          <div className="mt-4 text-white">
            <h2 className="text-lg font-semibold">Chef Near You</h2>
            <p className="text-xs text-gray-300 mt-1">Available for same-day booking</p>
            <button className="mt-4 btn-primary w-full">Book Chef</button>
          </div>
        </div>
      </div>
    )
  }
];

const Index = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [activeTab, setActiveTab] = useState<FeedType>('for-you');

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const getFilterType = () => {
    if (selectedCategory === 'all') return null;
    if (selectedCategory === 'recipes') return 'recipe' as const;
    if (selectedCategory === 'restaurants') return 'restaurant' as const;
    if (selectedCategory === 'chefs') return 'chef' as const;
    return null;
  };

  const getFilteredItems = (items: typeof forYouItems) => {
    const filterType = getFilterType();
    return filterType ? items.filter(item => item.type === filterType) : items;
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4 sticky top-0 z-10">
          {isMobile && <h1 className="text-lg font-bold text-gradient mb-4">DineX</h1>}
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as FeedType)} className="w-full">
            <TabsList className="w-full justify-center bg-gray-100 dark:bg-gray-700 p-1 rounded-full">
              <TabsTrigger value="for-you" className="rounded-full">For You</TabsTrigger>
              <TabsTrigger value="trending" className="rounded-full">Trending</TabsTrigger>
              <TabsTrigger value="nearby" className="rounded-full">Nearby</TabsTrigger>
            </TabsList>
          </Tabs>
        </header>
        
        <DiscoveryCategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        
        <main>
          <TabsContent value="for-you" className="m-0">
            <ForYouSection items={getFilteredItems(forYouItems)} />
          </TabsContent>
          
          <TabsContent value="trending" className="m-0">
            <TrendingSection trendingItems={getFilteredItems(trendingItems)} />
          </TabsContent>
          
          <TabsContent value="nearby" className="m-0">
            <NearbySection items={getFilteredItems(nearbyItems)} />
          </TabsContent>
        </main>
      </div>
    </MainLayout>
  );
};

export default Index;
