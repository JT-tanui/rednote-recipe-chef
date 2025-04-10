
import MainLayout from '@/components/layout/MainLayout';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock recipe data
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
  },
  {
    id: 'r3',
    title: 'Fresh Summer Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084',
    duration: '15 mins',
    difficulty: 'Easy',
    chef: 'Nigella Lawson',
    likes: 1560
  },
  {
    id: 'r4',
    title: 'Homemade Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899',
    duration: '40 mins',
    difficulty: 'Medium',
    chef: 'Bobby Flay',
    likes: 1120
  },
  {
    id: 'r5',
    title: 'Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1617026061250-62b474264442?q=80&w=1760',
    duration: '35 mins',
    difficulty: 'Medium',
    chef: 'Mary Berry',
    likes: 2300
  },
  {
    id: 'r6',
    title: 'Vegetable Curry',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974',
    duration: '50 mins',
    difficulty: 'Medium',
    chef: 'Madhur Jaffrey',
    likes: 890
  }
];

const cuisineFilters = [
  'Italian', 'Asian', 'Mexican', 'Mediterranean', 'Indian', 'American'
];

const Recipes = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-xl font-bold">Recipe Collection</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Discover and save your favorite recipes</p>
        </header>
        
        <div className="flex space-x-2 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search recipes..." 
              className="pl-9 h-10 text-sm"
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Filter size={16} />
          </Button>
        </div>
        
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {cuisineFilters.map(cuisine => (
              <Badge 
                key={cuisine} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors py-1"
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRecipes.map(recipe => (
            <div key={recipe.id}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-culinary-primary text-white hover:bg-culinary-primary/90">
            Load More Recipes
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipes;
