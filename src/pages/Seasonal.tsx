
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Clock, Tag } from "lucide-react";
import { Link } from 'react-router-dom';

const Seasonal = () => {
  const seasonalCollections = [
    {
      id: "spring",
      title: "Spring Collection",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070",
      period: "March - May",
      description: "Fresh, seasonal ingredients that celebrate the renewal of spring",
      restaurants: 24,
      featured: ["Spring Garden Menu", "Cherry Blossom Festival", "Easter Specials"],
      path: "/restaurants/spring-garden"
    },
    {
      id: "summer",
      title: "Summer Collection",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=2070",
      period: "June - August",
      description: "Light, refreshing dishes perfect for warm summer days",
      restaurants: 32,
      featured: ["Summer Berry Collection", "Grill & BBQ Festival", "Seafood Extravaganza"],
      path: "/restaurants/summer-collection"
    },
    {
      id: "autumn",
      title: "Autumn Collection",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
      period: "September - November",
      description: "Hearty comfort foods featuring seasonal harvest ingredients",
      restaurants: 28,
      featured: ["Wild Mushroom Season", "Pumpkin Spice Festival", "Harvest Celebration"],
      path: "/restaurants/autumn-collection"
    },
    {
      id: "winter",
      title: "Winter Collection",
      image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2070",
      period: "December - February",
      description: "Warming, festive dishes to celebrate the holiday season",
      restaurants: 22,
      featured: ["Holiday Feast", "Winter Comfort Foods", "New Year Specials"],
      path: "/restaurants/winter-collection"
    }
  ];
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Seasonal Collections</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated seasonal menus featuring the freshest ingredients at their peak
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasonalCollections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all hover-lift">
              <div className="relative h-64">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{collection.title}</h2>
                  <div className="flex items-center text-white/90 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{collection.period}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {collection.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1 text-culinary-primary" />
                    <span>{collection.restaurants} restaurants</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-culinary-primary" />
                    <span>Limited time</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-culinary-primary" />
                    <span>Featured</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Featured Menus:</h3>
                  {collection.featured.map((menu, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 text-sm"
                    >
                      {menu}
                    </div>
                  ))}
                </div>
                
                <Link to={collection.path}>
                  <Button className="w-full bg-culinary-primary text-white hover:bg-culinary-primary/90">
                    Explore Collection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Seasonal;
