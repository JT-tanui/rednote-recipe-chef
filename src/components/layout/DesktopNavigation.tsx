
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, Utensils, MapPin, User, Inbox, Settings, LogOut, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Discover', icon: Home },
    { path: '/meal-planner', label: 'Planner', icon: CalendarDays },
    { path: '/recipes', label: 'Recipes', icon: Utensils },
    { path: '/inbox', label: 'Inbox', icon: Inbox },
  ];

  return (
    <nav className="hidden md:block w-full bg-white dark:bg-gray-800 shadow-sm border-b">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-culinary-primary text-white">U</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-gray-800 shadow-lg border">
                <DropdownMenuLabel className="text-gray-900 dark:text-gray-100">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center cursor-pointer">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex items-center cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-400 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
