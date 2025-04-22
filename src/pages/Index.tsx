import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import HomeContent from '@/components/home/HomeContent';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Automatically redirect to the discover page
    // This keeps the home page as landing page, but users will be
    // directed to the discover page for the app experience
    const timer = setTimeout(() => {
      navigate('/discover');
    }, 100);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageLayout>
      <HomeContent />
    </PageLayout>
  );
};

export default Index;
