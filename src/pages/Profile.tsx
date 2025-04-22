import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, User, Settings, BookUser, CreditCard, Heart, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const isMobile = useIsMobile();
  const [user] = useState({
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
    bio: 'Food enthusiast and home cook passionate about experimenting with new flavors and cuisines.',
  });

  // Mock saved recipes
  const savedRecipes = [
    {
      id: 'saved1',
      title: 'Homemade Pasta Carbonara',
      image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=2035',
      duration: '35 mins',
      difficulty: 'Medium',
      chef: 'Marco Rossi',
      likes: 342
    },
    {
      id: 'saved2',
      title: 'Avocado Toast with Poached Eggs',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080',
      duration: '15 mins',
      difficulty: 'Easy',
      chef: 'Sarah Lee',
      likes: 289
    }
  ];

  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-20">
        {isMobile && (
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">Profile</h1>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/settings')}
            >
              <Settings size={20} />
            </Button>
          </div>
        )}
        
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <Avatar className="w-20 h-20 mb-3 hover-scale">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-xs text-center text-gray-600 mt-2 max-w-xs">{user.bio}</p>
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outline">Edit Profile</Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => navigate('/settings')}
            >
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="saved" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="saved" className="text-xs">
              <Heart size={14} className="mr-1" />
              Saved
            </TabsTrigger>
            <TabsTrigger value="history" className="text-xs">
              <Clock size={14} className="mr-1" />
              History
            </TabsTrigger>
            <TabsTrigger value="account" className="text-xs">
              <User size={14} className="mr-1" />
              Account
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="saved">
            <div className="grid grid-cols-2 gap-4">
              {savedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="flex flex-col space-y-2 p-4 text-center bg-gray-50 dark:bg-gray-800 rounded-md">
              <p className="text-sm text-gray-500">Your browsing history will appear here</p>
              <Button variant="outline" size="sm">Browse Recipes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="account">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <BookUser size={18} className="mr-3 text-culinary-primary" />
                  <span className="text-sm font-medium">Personal Information</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Manage your personal details
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <CreditCard size={18} className="mr-3 text-culinary-primary" />
                  <span className="text-sm font-medium">Payment Methods</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Manage your payment options
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Utensils size={18} className="mr-3 text-culinary-primary" />
                  <span className="text-sm font-medium">Dietary Preferences</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Update your food preferences
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
