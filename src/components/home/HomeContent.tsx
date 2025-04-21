
import { useState } from 'react';
import HeroSection from './HeroSection';
import FeaturedRestaurants from './FeaturedRestaurants';
import SeasonalSpecials from './SeasonalSpecials';
import BrowseCategories from './BrowseCategories';
import TopRated from './TopRated';
import PopularDestinations from './PopularDestinations';
import InspirationSection from './InspirationSection';
import CulinaryExperiences from './CulinaryExperiences';
import Newsletter from './Newsletter';

const HomeContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
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
    </>
  );
};

export default HomeContent;
