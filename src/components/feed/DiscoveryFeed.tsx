
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeedItem {
  id: string;
  type: 'recipe' | 'restaurant' | 'chef';
  content: React.ReactNode;
}

interface DiscoveryFeedProps {
  items: FeedItem[];
}

const DiscoveryFeed = ({ items }: DiscoveryFeedProps) => {
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
      if (currentIndex < items.length - 1) {
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

  return (
    <div className="relative h-[calc(100vh-64px)]">
      <div 
        ref={feedRef}
        className="h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-transform duration-500",
              index === currentIndex ? "translate-y-0" : 
              index < currentIndex ? "-translate-y-full" : "translate-y-full"
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
      
      {/* Navigation indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {items.map((_, index) => (
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
      {currentIndex < items.length - 1 && (
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown size={24} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default DiscoveryFeed;
