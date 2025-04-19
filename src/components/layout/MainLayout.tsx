
import { ReactNode } from 'react';
import Navigation from './Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {isMobile && <Navigation />}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      {isMobile && <Navigation />}
    </div>
  );
};

export default MainLayout;
