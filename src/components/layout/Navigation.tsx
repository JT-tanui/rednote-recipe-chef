
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, Utensils, MapPin, User, Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Discover', icon: Home },
    { path: '/meal-planner', label: 'Planner', icon: CalendarDays },
    { path: '/recipes', label: 'Recipes', icon: Utensils },
    { path: '/inbox', label: 'Inbox', icon: Inbox },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative bg-white dark:bg-gray-800 shadow-lg md:shadow-none z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto md:max-w-none md:px-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              to={item.path} 
              key={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xxs md:text-xs",
                isActive 
                  ? "text-culinary-primary" 
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              )}
            >
              <IconComponent 
                size={20} 
                className={cn(
                  "mb-1",
                  isActive && "animate-pulse" 
                )} 
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
