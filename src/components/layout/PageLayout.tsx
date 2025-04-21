
import { ReactNode } from 'react';
import MainLayout from './MainLayout';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
    </MainLayout>
  );
};

export default PageLayout;
