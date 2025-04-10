
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ChefCard from '@/components/ui/chef-card/ChefCard';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Chefs = () => {
  const [chefs] = useState([
    {
      id: 'c1',
      name: 'Maria Rodriguez',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080',
      specialty: 'French Cuisine',
      rating: 4.9,
      availability: 'Weekends',
      hourlyRate: '$75/hr'
    },
    {
      id: 'c2',
      name: 'David Kim',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974',
      specialty: 'Asian Fusion',
      rating: 4.8,
      availability: 'Mon-Fri',
      hourlyRate: '$65/hr'
    },
    {
      id: 'c3',
      name: 'James Peterson',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964',
      specialty: 'Italian Cuisine',
      rating: 4.7,
      availability: 'Everyday',
      hourlyRate: '$70/hr'
    },
    {
      id: 'c4',
      name: 'Aisha Johnson',
      image: 'https://images.unsplash.com/photo-1611695267521-9891f56104a4?q=80&w=1935',
      specialty: 'Mediterranean',
      rating: 4.8,
      availability: 'Weekdays',
      hourlyRate: '$80/hr'
    }
  ]);

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Personal Chefs</h1>
        </div>
        
        <div className="relative mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input 
            type="search"
            placeholder="Search for chefs by cuisine or name"
            className="pl-9 text-sm"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="nearby" className="text-xs">Nearby</TabsTrigger>
            <TabsTrigger value="top-rated" className="text-xs">Top Rated</TabsTrigger>
            <TabsTrigger value="available" className="text-xs">Available</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-2 gap-4">
              {chefs.map(chef => (
                <ChefCard key={chef.id} {...chef} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nearby">
            <div className="grid grid-cols-2 gap-4">
              {chefs.slice(0, 2).map(chef => (
                <ChefCard key={chef.id} {...chef} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="top-rated">
            <div className="grid grid-cols-2 gap-4">
              {chefs.filter(chef => chef.rating >= 4.8).map(chef => (
                <ChefCard key={chef.id} {...chef} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="available">
            <div className="grid grid-cols-2 gap-4">
              {chefs.filter(chef => chef.availability.includes('Everyday')).map(chef => (
                <ChefCard key={chef.id} {...chef} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Chefs;
