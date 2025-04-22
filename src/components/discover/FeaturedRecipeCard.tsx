
import { useNavigate } from 'react-router-dom';
import { Heart, Clock, Award, MapPin, ChefHat, Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FeaturedRecipeCardProps {
  id: string;
  title: string;
  image: string;
  chef: string;
  duration: string;
  difficulty: string;
  description: string;
  isRestaurant?: boolean;
  isChef?: boolean;
}

const FeaturedRecipeCard = ({
  id,
  title,
  image,
  chef,
  duration,
  difficulty,
  description,
  isRestaurant = false,
  isChef = false
}: FeaturedRecipeCardProps) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };
  
  const handleCardClick = () => {
    if (isRestaurant) {
      navigate(`/restaurants/${id}`);
    } else if (isChef) {
      navigate(`/chefs/${id}`);
    } else {
      navigate(`/recipes/${id}`);
    }
  };

  return (
    <div className="h-full flex flex-col animate-fade-in">
      {/* Main content */}
      <div className="relative h-[calc(100vh-180px)] bg-black">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 p-6 flex flex-col justify-between">
          {/* Top section */}
          <div className="flex justify-between items-start">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
              {isRestaurant ? (
                <div className="flex items-center">
                  <MapPin size={12} className="mr-1" />
                  <span>Restaurant</span>
                </div>
              ) : isChef ? (
                <div className="flex items-center">
                  <ChefHat size={12} className="mr-1" />
                  <span>Chef</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>{duration}</span>
                </div>
              )}
            </div>
            <button 
              onClick={handleLike} 
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full transition-transform hover:scale-110"
            >
              <Heart size={20} className={cn(
                "transition-colors",
                liked ? "fill-culinary-primary text-culinary-primary" : "text-white"
              )} />
            </button>
          </div>
          
          {/* Bottom section */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            
            <div className="flex items-center space-x-2">
              {isRestaurant ? (
                <>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star} 
                        size={14} 
                        className="text-culinary-accent fill-culinary-accent" 
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">{duration}</span>
                </>
              ) : isChef ? (
                <div className="flex items-center">
                  <Award size={14} className="text-culinary-accent mr-1" />
                  <span className="text-white/80 text-sm">{difficulty}</span>
                </div>
              ) : (
                <>
                  <span className="text-white/80 text-sm">By {chef}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80 text-sm">{difficulty}</span>
                </>
              )}
            </div>
            
            <p className="text-white/70 text-sm line-clamp-2">{description}</p>
            
            <div className="flex space-x-3 pt-2">
              <Button 
                onClick={handleCardClick}
                className="flex-1 rounded-full hover:scale-105 transition-transform"
              >
                {isRestaurant ? "Book Now" : isChef ? "View Profile" : "View Recipe"}
              </Button>
              
              {!isChef && (
                <Button 
                  variant="outline"
                  className="rounded-full bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 hover:text-white"
                  onClick={() => {
                    // Add to planner/favorites logic
                    if (isRestaurant) {
                      navigate('/booking');
                    } else {
                      navigate('/meal-planner');
                    }
                  }}
                >
                  {isRestaurant ? "Reserve" : "Add to Plan"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
