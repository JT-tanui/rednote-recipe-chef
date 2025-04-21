
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import BrowseCategories from '@/components/home/BrowseCategories';
import InspirationSection from '@/components/home/InspirationSection';
import PopularDestinations from '@/components/home/PopularDestinations';
import CulinaryExperiences from '@/components/home/CulinaryExperiences';
import TopRated from '@/components/home/TopRated';
import Newsletter from '@/components/home/Newsletter';
import FeaturedRestaurants from '@/components/home/FeaturedRestaurants';
import SeasonalSpecials from '@/components/home/SeasonalSpecials';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        
        {/* Main Content Sections with increased spacing and clear separation */}
        <div className="mt-8 space-y-16 pb-16">
          <FeaturedRestaurants />
          <SeasonalSpecials />
          <BrowseCategories />
          <TopRated />
          <PopularDestinations />
          <InspirationSection />
          <CulinaryExperiences />
          <Newsletter />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
