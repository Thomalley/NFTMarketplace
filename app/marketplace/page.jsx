import Header from 'app/ui/Marketplace/Header';

import React from 'react';
import { Divider } from '@nextui-org/react';
import MarkerplaceSection from 'app/ui/Marketplace/MarketplaceSection';

export default function Marketplace(){
return (
  <div>
    <Header />
    <Divider />
    <MarkerplaceSection />
  </div>
)
};