
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface FeedItem {
  id: string;
  type: 'recipe' | 'restaurant' | 'chef';
  content: React.ReactNode;
}

interface DiscoveryFeedProps {
  items: FeedItem[];
  filterType?: 'recipe' | 'restaurant' | 'chef' | null;
}

const DiscoveryFeed = ({ items, filterType = null }: DiscoveryFeedProps) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swiped up
      if (currentIndex < filteredItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    if (touchStart - touchEnd < -100) {
      // Swiped down
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleItemClick = (item: FeedItem) => {
    switch (item.type) {
      case 'recipe':
        navigate(`/recipes/${item.id}`);
        break;
      case 'restaurant':
        navigate(`/restaurants/${item.id}`);
        break;
      case 'chef':
        navigate(`/chefs/${item.id}`);
        break;
    }
  };

  // Filter items based on type if filterType is provided
  const filteredItems = filterType 
    ? items.filter(item => item.type === filterType)
    : items;

  if (filteredItems.length === 0) {
    return (
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-4">
          <h3 className="text-lg font-semibold mb-2">No content found</h3>
          <p className="text-sm text-gray-500">Try a different category or check back later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-64px)] bg-black">
      <div 
        ref={feedRef}
        className="h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {filteredItems.map((item, index) => (
          <div 
            key={item.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-transform duration-500 cursor-pointer",
              index === currentIndex ? "translate-y-0" : 
              index < currentIndex ? "-translate-y-full" : "translate-y-full"
            )}
            onClick={() => handleItemClick(item)}
          >
            {item.content}
          </div>
        ))}
      </div>
      
      {/* Navigation indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {filteredItems.map((_, index) => (
            <div 
              key={index} 
              className={cn(
                "w-2 h-2 rounded-full",
                index === currentIndex ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
      
      {/* Swipe indicator */}
      {currentIndex < filteredItems.length - 1 && (
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown size={24} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default DiscoveryFeed;
