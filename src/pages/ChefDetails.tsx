
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Star, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layout/MainLayout';
import RecipeCard from '@/components/ui/recipe-card/RecipeCard';

const ChefDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [chef] = useState({
    id,
    name: 'David Kim',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974',
    specialty: 'Asian Fusion',
    rating: 4.8,
    availability: 'Monday to Friday',
    hourlyRate: '$65/hr',
    bio: 'Professional chef with 10+ years of experience specializing in Asian fusion cuisine. Trained in Paris and Tokyo, I bring a unique blend of East meets West to your dining table.',
    location: 'San Francisco, CA',
    languages: ['English', 'Korean', 'Japanese'],
    experience: '10+ years'
  });

  const [recipes] = useState([
    {
      id: 'c1r1',
      title: 'Korean BBQ Tacos',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071',
      duration: '45 mins',
      difficulty: 'Medium',
      chef: chef.name,
      likes: 423
    },
    {
      id: 'c1r2',
      title: 'Miso Glazed Salmon',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070',
      duration: '30 mins',
      difficulty: 'Easy',
      chef: chef.name,
      likes: 356
    }
  ]);
  
  // Handle booking
  const handleBookChef = () => {
    navigate(`/booking?type=chef&id=${id}`);
  };

  return (
    <MainLayout>
      <div className="pb-24">
        <div className="relative h-64">
          <img 
            src={chef.image} 
            alt={chef.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          <Link 
            to="/chefs" 
            className="absolute top-4 left-4 bg-white/20 p-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} className="text-white" />
          </Link>
        </div>
        
        <div className="px-4 -mt-16 relative">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-lg font-bold">{chef.name}</h1>
                <p className="text-sm text-gray-500">{chef.specialty}</p>
              </div>
              <div className="flex items-center bg-culinary-accent/10 px-2 py-1 rounded">
                <Star size={14} className="text-culinary-accent fill-culinary-accent mr-1" />
                <span className="text-xs font-medium">{chef.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="flex items-center text-xs text-gray-500">
                <MapPin size={12} className="mr-1" />
                <span>{chef.location}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar size={12} className="mr-1" />
                <span>{chef.availability}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock size={12} className="mr-1" />
                <span>{chef.experience}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-xs text-gray-600 dark:text-gray-300">{chef.bio}</p>
            </div>
            
            <div className="mt-4">
              <span className="text-culinary-primary font-bold text-lg">{chef.hourlyRate}</span>
              <Button className="w-full mt-3" onClick={handleBookChef}>Hire Chef</Button>
            </div>
          </div>
          
          <div className="mt-6">
            <Tabs defaultValue="recipes">
              <TabsList className="w-full">
                <TabsTrigger value="recipes" className="flex-1">Recipes</TabsTrigger>
                <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recipes" className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} {...recipe} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="mt-4">
                <div className="space-y-3">
                  {['Private Dining', 'Meal Prep', 'Cooking Classes', 'Special Events'].map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm flex justify-between items-center">
                      <span className="text-sm">{service}</span>
                      <Button variant="outline" size="sm" onClick={() => navigate(`/booking?type=chef&id=${id}&service=${service}`)}>Book</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  {[
                    { name: 'Emily J.', date: '2 weeks ago', content: 'David prepared an amazing dinner for our anniversary. His fusion dishes were creative and delicious!', rating: 5 },
                    { name: 'Michael T.', date: '1 month ago', content: 'Took his cooking class and learned so much about Asian spices and techniques. Highly recommend!', rating: 4.5 }
                  ].map((review, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <div>
                          <span className="text-sm font-medium">{review.name}</span>
                          <span className="text-xxs text-gray-500 ml-2">{review.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Star size={12} className="text-culinary-accent fill-culinary-accent" />
                          <span className="text-xs ml-1">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-300">{review.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChefDetails;
