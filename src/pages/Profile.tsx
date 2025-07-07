import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, User, Settings, BookUser, CreditCard, Heart, Clock, MapPin, Calendar, Star, Edit, Camera } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className={`p-4 md:p-8 ${!isMobile ? "max-w-6xl mx-auto" : ""} pb-20`}>
          {isMobile && (
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Profile</h1>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/settings')}
                className="hover:bg-accent"
              >
                <Settings size={20} />
              </Button>
            </div>
          )}
          
          {!isMobile && (
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-3">
                My Profile
              </h1>
              <p className="text-muted-foreground text-xl">Manage your culinary journey</p>
            </header>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Profile Info Card */}
            <Card className="lg:col-span-1 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 hover-scale ring-4 ring-primary/10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-background border-2"
                    >
                      <Camera size={14} />
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                  <Badge variant="secondary" className="mb-4">
                    <Star size={12} className="mr-1" />
                    Food Enthusiast
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{user.bio}</p>
                  
                  <div className="grid grid-cols-3 gap-4 w-full mb-6 p-4 bg-accent/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">24</div>
                      <div className="text-xs text-muted-foreground">Recipes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">12</div>
                      <div className="text-xs text-muted-foreground">Following</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">156</div>
                      <div className="text-xs text-muted-foreground">Likes</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                      <Edit size={14} className="mr-2" />
                      Edit Profile
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate('/settings')}
                      className="flex-1"
                    >
                      <Settings size={14} className="mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Main Content */}
            <div className="lg:col-span-2">

              <Tabs defaultValue="saved" className="w-full">
                <TabsList className={`w-full grid grid-cols-3 mb-8 ${!isMobile ? 'h-12 p-1 bg-muted/50 backdrop-blur-sm' : 'h-10'}`}>
                  <TabsTrigger 
                    value="saved" 
                    className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
                  >
                    <Heart size={14} className="mr-2" />
                    Saved
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history" 
                    className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
                  >
                    <Clock size={14} className="mr-2" />
                    History
                  </TabsTrigger>
                  <TabsTrigger 
                    value="account" 
                    className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
                  >
                    <User size={14} className="mr-2" />
                    Account
                  </TabsTrigger>
                </TabsList>
          
                <TabsContent value="saved" className="animate-fade-in">
                  <div className={`grid ${!isMobile ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-1 gap-4'}`}>
                    {savedRecipes.map((recipe, index) => (
                      <div key={recipe.id} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                        <Link to={`/recipes/${recipe.id}`} className="block">
                          <RecipeCard {...recipe} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="animate-fade-in">
                  <Card className="bg-accent/30 border-dashed border-2 border-muted-foreground/20">
                    <CardContent className="p-8 text-center">
                      <Clock size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">No History Yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">Your browsing history will appear here</p>
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                        <Utensils size={14} className="mr-2" />
                        Browse Recipes
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account" className="animate-fade-in">
                  <div className="space-y-4">
                    <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-base">
                          <BookUser size={20} className="mr-3 text-primary" />
                          Personal Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">Manage your personal details and preferences</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-accent">
                          <Edit size={14} className="mr-2" />
                          Edit Profile Details
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-base">
                          <CreditCard size={20} className="mr-3 text-primary" />
                          Payment Methods
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">Manage your payment options and billing</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-accent">
                          <CreditCard size={14} className="mr-2" />
                          Manage Payment Methods
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-base">
                          <Utensils size={20} className="mr-3 text-primary" />
                          Dietary Preferences
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">Update your food preferences and allergies</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">Vegetarian</Badge>
                          <Badge variant="secondary">Gluten-Free</Badge>
                          <Badge variant="outline">+ Add More</Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-accent">
                          <Utensils size={14} className="mr-2" />
                          Update Preferences
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
