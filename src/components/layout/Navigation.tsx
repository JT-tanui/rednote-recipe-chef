
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, Utensils, MapPin, User, Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navItems = [
    { path: '/', label: 'Discover', icon: Home },
    { path: '/meal-planner', label: 'Planner', icon: CalendarDays },
    { path: '/recipes', label: 'Recipes', icon: Utensils },
    { path: '/inbox', label: 'Inbox', icon: Inbox },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  // Desktop navigation
  if (!isMobile) {
    return (
      <header className="bg-white dark:bg-gray-800 shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-xl font-bold text-culinary-primary">
                DineX
              </Link>
              <nav className="hidden md:flex space-x-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-culinary-primary/10 text-culinary-primary"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                to="/restaurants"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Restaurants</span>
                </div>
              </Link>
              <Link
                to="/chefs"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Chefs</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Mobile navigation
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              to={item.path} 
              key={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xxs",
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
