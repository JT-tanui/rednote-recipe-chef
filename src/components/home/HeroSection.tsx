
import { Search, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find your next culinary experience</h1>
          <p className="text-lg md:text-xl opacity-90">Discover restaurants, recipes, and personal chefs near you</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="border-0 pl-10 py-3 w-full rounded-l-md bg-transparent focus:ring-0 text-gray-900 dark:text-white"
                placeholder="Search for restaurants, recipes, or chefs..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="flex items-center px-4 border-l border-gray-300 dark:border-gray-600">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Near me</span>
            </div>
            <Button className="ml-2 bg-primary hover:bg-primary/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
