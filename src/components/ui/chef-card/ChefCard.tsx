
import { Star, Calendar } from 'lucide-react';

interface ChefCardProps {
  id: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  availability: string;
  hourlyRate: string;
}

const ChefCard = ({
  id,
  name,
  image,
  specialty,
  rating,
  availability,
  hourlyRate
}: ChefCardProps) => {
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
        <p className="text-xxs text-gray-600 dark:text-gray-300 mt-1">{specialty}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-xxs text-gray-500 dark:text-gray-400">
            <Calendar size={12} className="mr-1" />
            <span>{availability}</span>
          </div>
          <span className="text-xs font-medium text-culinary-primary">{hourlyRate}</span>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
