
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, Utensils, MapPin, User, Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/discover', label: 'Discover', icon: Home },
    { path: '/meal-planner', label: 'Planner', icon: CalendarDays },
    { path: '/recipes', label: 'Recipes', icon: Utensils },
    { path: '/inbox', label: 'Inbox', icon: Inbox },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="hidden md:block w-full bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-culinary-primary">DineX</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "text-culinary-primary bg-culinary-primary/10"
                        : "text-gray-600 hover:text-culinary-primary hover:bg-culinary-primary/5 dark:text-gray-300"
                    )}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Add additional header items like search, notifications here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
