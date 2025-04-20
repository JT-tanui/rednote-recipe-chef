
import { Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TopRated = () => {
  const topRestaurants = [
    {
      name: "The Golden Spoon",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
      rating: 4.9,
      cuisine: "Contemporary",
      price: "$$$",
      location: "Downtown"
    },
    {
      name: "Sakura Sushi",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070",
      rating: 4.8,
      cuisine: "Japanese",
      price: "$$",
      location: "East Side"
    },
    {
      name: "Trattoria Milano",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074",
      rating: 4.7,
      cuisine: "Italian",
      price: "$$",
      location: "West End"
    },
    {
      name: "The Grill House",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974",
      rating: 4.8,
      cuisine: "Steakhouse",
      price: "$$$",
      location: "Financial District"
    }
  ];

  const topRecipes = [
    {
      title: "Classic Beef Wellington",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
      rating: 4.9,
      difficulty: "Hard",
      time: "2.5 hours",
      chef: "Gordon Ramsay"
    },
    {
      title: "Lemon Garlic Pasta",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070",
      rating: 4.7,
      difficulty: "Easy",
      time: "20 mins",
      chef: "Jamie Oliver"
    },
    {
      title: "Thai Green Curry",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070",
      rating: 4.8,
      difficulty: "Medium",
      time: "45 mins",
      chef: "Pad Thai"
    },
    {
      title: "Chocolate Soufflé",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1974",
      rating: 4.9,
      difficulty: "Hard",
      time: "1 hour",
      chef: "Julia Child"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Top Rated</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the highest-rated restaurants and recipes loved by our community
          </p>
        </div>
        
        <Tabs defaultValue="restaurants" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
              <TabsTrigger value="recipes">Recipes</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="restaurants" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRestaurants.map((restaurant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{restaurant.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="mr-2">{restaurant.cuisine}</span>•
                      <span className="mx-2">{restaurant.price}</span>•
                      <span className="ml-2">{restaurant.location}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary text-primary hover:bg-primary/10 mt-2"
                    >
                      View Details <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recipes" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRecipes.map((recipe, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{recipe.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{recipe.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="mr-2">{recipe.difficulty}</span>•
                      <span className="mx-2">{recipe.time}</span>•
                      <span className="ml-2">by {recipe.chef}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary text-primary hover:bg-primary/10 mt-2"
                    >
                      View Recipe <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TopRated;
