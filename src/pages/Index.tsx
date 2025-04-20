
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
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [searchQuery, setSearchQuery] = useState('');

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
        {/* Hero Section with Search - Booking.com Style */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Find your next culinary experience</h1>
              <p className="text-lg md:text-xl opacity-90">Discover restaurants, recipes, and personal chefs near you</p>
            </div>

            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-3xl mx-auto">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="border-0 pl-10 py-3 w-full rounded-l-md bg-transparent focus:ring-0 text-gray-900 dark:text-white"
                    placeholder="Search for restaurants, recipes, or chefs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center px-4 border-l border-gray-300 dark:border-gray-600">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Near me</span>
                </div>
                <Button className="ml-2 bg-primary hover:bg-primary/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <Tabs 
              defaultValue={activeTab} 
              onValueChange={(value) => setActiveTab(value as FeedType)} 
              className="w-full"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2">
                <TabsList className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full">
                  <TabsTrigger value="for-you" className="rounded-full">For You</TabsTrigger>
                  <TabsTrigger value="trending" className="rounded-full">Trending</TabsTrigger>
                  <TabsTrigger value="nearby" className="rounded-full">Nearby</TabsTrigger>
                </TabsList>
                
                <div className="mt-2 md:mt-0">
                  <DiscoveryCategorySelector
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategoryChange}
                  />
                </div>
              </div>
              
              <TabsContent value="for-you" className="m-0 mt-4">
                <ForYouSection items={getFilteredItems(forYouItems)} />
              </TabsContent>
              
              <TabsContent value="trending" className="m-0 mt-4">
                <TrendingSection trendingItems={getFilteredItems(trendingItems)} />
              </TabsContent>
              
              <TabsContent value="nearby" className="m-0 mt-4">
                <NearbySection items={getFilteredItems(nearbyItems)} />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Content sections that appear on all tabs - Booking.com style browsing categories */}
        <section className="py-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Restaurants', 'Recipes', 'Personal Chefs', 'Catering'].map((category, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-md transition-all cursor-pointer">
                  <div className="h-24 flex items-center justify-center">
                    {/* Placeholder for category icon */}
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">{category.charAt(0)}</span>
                    </div>
                  </div>
                  <p className="font-medium mt-2">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional sections that would appear on all tabs */}
        <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Get Inspired</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Weekend Getaway Meals", desc: "Quick recipes for your trip" },
                { title: "Fine Dining Experiences", desc: "Top-rated restaurants" },
                { title: "Private Chef Experience", desc: "Luxury dining at home" }
              ].map((item, index) => (
                <div key={index} className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  {/* Placeholder gradient background instead of image */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-${(index + 3) * 100} to-purple-${(index + 4) * 100}`}></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white z-20">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
