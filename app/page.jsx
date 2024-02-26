import React from "react";

import HeroSection from './ui/HeroSection/HeroSection';
import HeroSectionMobile from "./ui/HeroSection/HeroSectionMobile";
import TrendingCollection from './ui/Trending/TrendingCollection';
import TopCreators from "./ui/Creators/TopCreators";
import TopCreatorsMobile from "./ui/Creators/TopCreatorsMobile";
import DiscoverMore from "./ui/DiscoverNFT/DiscoverMore";

export default function Home() {
  return (
    <div className='flex justify-center flex-col overflow-hidden'>
      <HeroSection />
      <HeroSectionMobile /> 
      <TrendingCollection />
      <TopCreators />
      <TopCreatorsMobile /> 
      <DiscoverMore />
    </div>
  );
}
