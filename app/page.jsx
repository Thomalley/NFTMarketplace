import React from "react";

import HeroSection from './ui/HeroSection';
import TrendingCollection from './ui/TrendingCollection';
export default function Home() {

  return (
    <div className='flex p-20 justify-center flex-col'>
      <HeroSection />
      <TrendingCollection />
    </div>
  );
}
