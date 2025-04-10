
import { Star, MapPin } from 'lucide-react';

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  location: string;
  priceRange: string;
}

const RestaurantCard = ({
  id,
  name,
  image,
  rating,
  cuisine,
  location,
  priceRange
}: RestaurantCardProps) => {
  return (
    <div className="recipe-card card-hover flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-1 px-2 rounded-full flex items-center">
          <Star size={14} className="text-culinary-accent mr-1 fill-culinary-accent" />
          <span className="text-xs font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xxs text-gray-600 dark:text-gray-300">{cuisine}</span>
          <span className="text-xxs text-gray-600 dark:text-gray-300">{priceRange}</span>
        </div>
        <div className="flex items-center mt-2 text-xxs text-gray-500 dark:text-gray-400">
          <MapPin size={12} className="mr-1" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
