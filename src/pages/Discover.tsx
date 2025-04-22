
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DiscoveryCategorySelector from '@/components/feed/DiscoveryCategorySelector';
import DiscoveryFeed from '@/components/feed/DiscoveryFeed';
import FeaturedRecipeCard from '@/components/discover/FeaturedRecipeCard';
import { useIsMobile } from '@/hooks/use-mobile';

type CategoryType = 'all' | 'recipes' | 'restaurants' | 'chefs';

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const isMobile = useIsMobile();
  
  // Mock feed items for demonstration
  const feedItems = [
    {
      id: '1',
      type: 'recipe',
      content: <FeaturedRecipeCard 
        id="recipe1"
        title="Homemade Italian Pasta"
        image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032"
        chef="Marco Rossi"
        duration="45 mins"
        difficulty="Medium"
        description="Authentic Italian pasta made from scratch with fresh ingredients."
      />
    },
    {
      id: '2',
      type: 'restaurant',
      content: <FeaturedRecipeCard 
        id="restaurant1"
        title="Sakura Japanese Restaurant"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
        chef="Top Rated"
        duration="$$"
        difficulty="Reservation"
        description="Experience authentic Japanese cuisine in an elegant atmosphere."
        isRestaurant={true}
      />
    },
    {
      id: '3',
      type: 'chef',
      content: <FeaturedRecipeCard 
        id="chef1"
        title="Chef Gordon Ramsay"
        image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954"
        chef="Celebrity Chef"
        duration="20+ Years"
        difficulty="Expert"
        description="World-renowned chef with multiple Michelin stars."
        isChef={true}
      />
    },
    {
      id: '4',
      type: 'recipe',
      content: <FeaturedRecipeCard 
        id="recipe2"
        title="Avocado Toast with Poached Eggs"
        image="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080"
        chef="Sarah Lee"
        duration="15 mins"
        difficulty="Easy"
        description="The perfect breakfast to start your day with healthy fats and protein."
      />
    }
  ];
  
  // Convert category to filter type for the feed
  const getCategoryFilterType = (category: CategoryType) => {
    if (category === 'all') return null;
    // Convert plural to singular for the filter
    if (category === 'recipes') return 'recipe';
    if (category === 'restaurants') return 'restaurant';
    if (category === 'chefs') return 'chef';
    return null;
  };
  
  return (
    <MainLayout>
      <div className="relative">
        {/* Category selector */}
        <div className="sticky top-14 z-30 bg-white dark:bg-gray-900 py-3 px-4 shadow-sm">
          <DiscoveryCategorySelector 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {/* Discovery feed */}
        <DiscoveryFeed 
          items={feedItems}
          filterType={getCategoryFilterType(selectedCategory)}
        />
      </div>
    </MainLayout>
  );
};

export default Discover;
