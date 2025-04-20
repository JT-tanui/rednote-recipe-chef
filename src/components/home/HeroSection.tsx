
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState<string>("restaurants");
  
  return (
    <div className="bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Perfect Culinary Experience</h1>
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
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                    placeholder="Search restaurants by name or cuisine..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Near me</span>
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Tonight</span>
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">2 guests</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 px-6">
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
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                    placeholder="Search recipes, ingredients, or cuisines..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Prep time</span>
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Difficulty</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 px-6">
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
                    className="border border-gray-200 pl-10 py-3 w-full rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                    placeholder="Search for personal chefs by cuisine or name..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Near me</span>
                </div>
                <div className="flex items-center px-4 py-2 border border-gray-200 rounded-md">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Available date</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 px-6">
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
