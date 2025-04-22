
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DiscoveryCategorySelector from '@/components/feed/DiscoveryCategorySelector';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';

type CategoryType = 'all' | 'recipes' | 'restaurants' | 'chefs';

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const navigate = useNavigate();
  
  const discoverItems = [
    {
      id: 'recipe1',
      title: 'Homemade Italian Pasta',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
      chef: 'Marco Rossi',
      duration: '45 mins',
      difficulty: 'Medium',
      likes: 234,
    },
    {
      id: 'recipe2',
      title: 'Avocado Toast with Poached Eggs',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080',
      chef: 'Sarah Lee',
      duration: '15 mins',
      difficulty: 'Easy',
      likes: 156,
    },
    {
      id: 'recipe3',
      title: 'Japanese Ramen Bowl',
      image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=2032',
      chef: 'Chef Tanaka',
      duration: '1 hour',
      difficulty: 'Medium',
      likes: 342,
    }
  ];

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
        
        {/* Discovery grid */}
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {discoverItems.map((item) => (
              <div key={item.id} className="animate-fade-in">
                <RecipeCard
                  {...item}
                  onClick={() => navigate(`/recipes/${item.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Discover;

