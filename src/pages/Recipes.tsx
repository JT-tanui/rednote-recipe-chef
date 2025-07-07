import MainLayout from '@/components/layout/MainLayout';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className={`p-4 md:p-8 ${!isMobile ? "max-w-7xl mx-auto" : ""}`}>
          {!isMobile && (
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Recipe Collection
              </h1>
              <p className="text-muted-foreground text-xl">Discover culinary masterpieces from around the world</p>
            </header>
          )}
          
          {isMobile && (
            <header className="mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Recipe Collection</h1>
              <p className="text-sm text-muted-foreground mt-1">Discover and save your favorite recipes</p>
            </header>
          )}
          
          <div className="flex space-x-3 mb-8">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search recipes, ingredients, chefs..." 
                className={`pl-12 ${!isMobile ? 'h-12 text-base' : 'h-11 text-sm'} bg-background/80 backdrop-blur-sm border-2 border-transparent focus:border-primary transition-all duration-200`}
              />
            </div>
            <Button 
              variant="outline" 
              size={!isMobile ? "default" : "icon"} 
              className={`${!isMobile ? 'h-12 px-6' : 'h-11 w-11'} bg-background/80 backdrop-blur-sm border-2 hover:border-primary transition-all duration-200`}
            >
              <Filter size={18} />
              {!isMobile && <span className="ml-2">Filters</span>}
            </Button>
          </div>
          
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-3 pb-2">
              {cuisineFilters.map(cuisine => (
                <Badge 
                  key={cuisine} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 py-2 px-4 text-sm font-medium whitespace-nowrap"
                >
                  {cuisine}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className={`grid ${!isMobile ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' : 'grid-cols-1 gap-6'} animate-fade-in`}>
            {mockRecipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <Link to={`/recipes/${recipe.id}`} className="block">
                  <RecipeCard {...recipe} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              size={!isMobile ? "lg" : "default"} 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Load More Recipes
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipes;
