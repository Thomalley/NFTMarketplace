import React from "react";

import HeroSection from './ui/HeroSection';
import TrendingCollection from './ui/Trending/TrendingCollection';
import TopCreators from "./ui/Artists/TopArtists";
import DiscoverMore from "./ui/DiscoverNFT/DiscoverMore";
export default function Home() {

  return (
    <div className='flex justify-center flex-col'>
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <DiscoverMore />
    </div>
  );
}
