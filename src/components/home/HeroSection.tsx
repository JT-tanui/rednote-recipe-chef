
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState<string>("restaurants");
  const navigate = useNavigate();
  
  const handleSearch = () => {
    // Navigate to appropriate page based on active tab
    if (searchQuery.trim()) {
      switch(activeTab) {
        case 'restaurants':
          navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
          break;
        case 'recipes':
          navigate(`/recipes?search=${encodeURIComponent(searchQuery)}`);
          break;
        case 'chefs':
          navigate(`/chefs?search=${encodeURIComponent(searchQuery)}`);
          break;
      }
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-culinary-primary/90 to-culinary-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Discover Your Perfect Culinary Experience</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Find and book amazing restaurants, discover recipes, or hire personal chefs in your area
          </p>
        </div>

        {/* Search Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="restaurants" className="text-sm md:text-base">Restaurants</TabsTrigger>
              <TabsTrigger value="recipes" className="text-sm md:text-base">Recipes</TabsTrigger>
              <TabsTrigger value="chefs" className="text-sm md:text-base">Personal Chefs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="restaurants" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-culinary-primary text-gray-900 dark:text-white"
                    placeholder="Search restaurants by name or cuisine..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <Link to="/restaurants?filter=nearby">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <MapPin className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Near me</span>
                  </div>
                </Link>
                <Link to="/booking">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <Calendar className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Tonight</span>
                  </div>
                </Link>
                <Link to="/booking?guests=2">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <Users className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">2 guests</span>
                  </div>
                </Link>
                <Button className="bg-culinary-primary hover:bg-culinary-primary/90 px-6" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="recipes" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-culinary-primary text-gray-900 dark:text-white"
                    placeholder="Search recipes, ingredients, or cuisines..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <Link to="/recipes?filter=time">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <Calendar className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Prep time</span>
                  </div>
                </Link>
                <Link to="/recipes?filter=difficulty">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <Users className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Difficulty</span>
                  </div>
                </Link>
                <Button className="bg-culinary-primary hover:bg-culinary-primary/90 px-6" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="chefs" className="mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-culinary-primary text-gray-900 dark:text-white"
                    placeholder="Search for personal chefs by cuisine or name..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <Link to="/chefs?filter=nearby">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <MapPin className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Near me</span>
                  </div>
                </Link>
                <Link to="/booking?type=chef">
                  <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:border-culinary-primary transition-colors">
                    <Calendar className="h-5 w-5 text-culinary-primary mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Available date</span>
                  </div>
                </Link>
                <Button className="bg-culinary-primary hover:bg-culinary-primary/90 px-6" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
