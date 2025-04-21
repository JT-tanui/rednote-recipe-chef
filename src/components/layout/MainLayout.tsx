
import { ReactNode } from 'react';
import Navigation from './Navigation';
import DesktopNavigation from './DesktopNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <DesktopNavigation />
      
      {isMobile && (
        <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-800 border-b">
          <div className="flex items-center justify-between px-4 h-14">
            <h1 className="text-lg font-semibold text-culinary-primary">DineX</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative w-40">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search..." 
                  className="pl-8 h-8 text-sm"
                />
              </div>
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
      )}
      
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      
      {isMobile && <Navigation />}
      
      <Footer />
    </div>
  );
};

export default MainLayout;
