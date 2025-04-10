
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  chef: string;
  likes: number;
}

const RecipeCard = ({
  id,
  title,
  image,
  duration,
  difficulty,
  chef,
  likes
}: RecipeCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="recipe-card card-hover flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <button 
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full"
          onClick={handleLike}
        >
          <Heart 
            size={18} 
            className={cn(
              "transition-colors", 
              liked ? "fill-culinary-primary text-culinary-primary" : "text-white"
            )} 
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
          <p className="text-white/80 text-xxs">by {chef}</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-3 text-xxs text-gray-600 dark:text-gray-300">
        <span>{duration}</span>
        <span>{difficulty}</span>
        <span>{likeCount} likes</span>
      </div>
    </div>
  );
};

export default RecipeCard;
