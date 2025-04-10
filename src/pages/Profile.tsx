
import MainLayout from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Settings, Heart, Clock, Chef, CalendarDays } from 'lucide-react';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';

// Mock profile data
const profileData = {
  name: 'Alex Johnson',
  username: '@alexjohnson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
  bio: 'Food enthusiast & home cook. Always looking for new recipes and restaurants to try!',
  stats: {
    recipes: 24,
    saved: 87,
    following: 156,
    followers: 243
  }
};

// Mock saved recipes
const savedRecipes = [
  {
    id: 'sr1',
    title: 'Spicy Thai Basil Chicken',
    image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?q=80&w=2070',
    duration: '30 mins',
    difficulty: 'Medium',
    chef: 'Jamie Oliver',
    likes: 1240
  },
  {
    id: 'sr2',
    title: 'Fresh Summer Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084',
    duration: '15 mins',
    difficulty: 'Easy',
    chef: 'Nigella Lawson',
    likes: 1560
  },
  {
    id: 'sr3',
    title: 'Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1617026061250-62b474264442?q=80&w=1760',
    duration: '35 mins',
    difficulty: 'Medium',
    chef: 'Mary Berry',
    likes: 2300
  },
];

const Profile = () => {
  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto">
        <header className="flex justify-end mb-4">
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Settings size={18} />
          </Button>
        </header>
        
        <section className="flex flex-col items-center mb-6">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={profileData.avatar} alt={profileData.name} />
            <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <h1 className="text-lg font-bold">{profileData.name}</h1>
          <p className="text-xs text-gray-500 mb-2">{profileData.username}</p>
          
          <p className="text-sm text-center max-w-xs mb-4">{profileData.bio}</p>
          
          <div className="flex divide-x divide-gray-200 dark:divide-gray-700">
            <div className="px-4 text-center">
              <p className="text-sm font-semibold">{profileData.stats.recipes}</p>
              <p className="text-xxs text-gray-500">Recipes</p>
            </div>
            <div className="px-4 text-center">
              <p className="text-sm font-semibold">{profileData.stats.saved}</p>
              <p className="text-xxs text-gray-500">Saved</p>
            </div>
            <div className="px-4 text-center">
              <p className="text-sm font-semibold">{profileData.stats.following}</p>
              <p className="text-xxs text-gray-500">Following</p>
            </div>
            <div className="px-4 text-center">
              <p className="text-sm font-semibold">{profileData.stats.followers}</p>
              <p className="text-xxs text-gray-500">Followers</p>
            </div>
          </div>
          
          <div className="flex space-x-2 mt-6">
            <Button className="text-xs h-8 bg-culinary-primary text-white hover:bg-culinary-primary/90">
              Edit Profile
            </Button>
            <Button variant="outline" className="text-xs h-8">
              Share Profile
            </Button>
          </div>
        </section>
        
        <Tabs defaultValue="saved" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="saved" className="text-xs flex items-center">
              <Heart size={14} className="mr-1" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs flex items-center">
              <Clock size={14} className="mr-1" />
              History
            </TabsTrigger>
            <TabsTrigger value="chefs" className="text-xs flex items-center">
              <Chef size={14} className="mr-1" />
              Chefs
            </TabsTrigger>
            <TabsTrigger value="plans" className="text-xs flex items-center">
              <CalendarDays size={14} className="mr-1" />
              Plans
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="saved" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedRecipes.map(recipe => (
                <div key={recipe.id}>
                  <RecipeCard {...recipe} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <div className="text-center p-8">
              <p className="text-sm text-gray-500">You haven't viewed any recipes recently</p>
              <Button className="mt-4 bg-culinary-secondary text-white hover:bg-culinary-secondary/90">
                Discover Recipes
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="chefs" className="mt-4">
            <div className="text-center p-8">
              <p className="text-sm text-gray-500">You haven't followed any chefs yet</p>
              <Button className="mt-4 bg-culinary-secondary text-white hover:bg-culinary-secondary/90">
                Find Chefs
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="plans" className="mt-4">
            <div className="text-center p-8">
              <p className="text-sm text-gray-500">You haven't created any meal plans yet</p>
              <Button className="mt-4 bg-culinary-secondary text-white hover:bg-culinary-secondary/90">
                Create Meal Plan
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
