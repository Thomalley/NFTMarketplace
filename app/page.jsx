'use client'

import React, {useEffect} from "react";
import HeroSection from './ui/HeroSection/HeroSection';
import HeroSectionMobile from "./ui/HeroSection/HeroSectionMobile";
import TrendingCollection from './ui/Trending/TrendingCollection';
import TopCreators from "./ui/Creators/TopCreators";
import TopCreatorsMobile from "./ui/Creators/TopCreatorsMobile";
import DiscoverMore from "./ui/DiscoverNFT/DiscoverMore";
import { Toaster } from 'sonner'

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      })()
  }, []);
  
  return (
    <div className='flex justify-center flex-col overflow-hidden'>
      <HeroSection />
      <HeroSectionMobile />
      <TrendingCollection />
      <TopCreators />
      <TopCreatorsMobile />
      <DiscoverMore />
      <Toaster richColors theme="dark" />
    </div>
  );
}
