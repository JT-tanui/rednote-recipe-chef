
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Navigation />
    </div>
  );
};

export default MainLayout;
