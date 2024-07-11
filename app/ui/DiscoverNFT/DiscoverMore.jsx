import { Button } from "@nextui-org/react";
import { LuEye } from "react-icons/lu";
import DiscoverMoreCard from "./DiscoverMoreCard";
import DistantGalaxy from "../../public/DistantGalaxy.png"
import LifeOnEdena from "../../public/LifeOnEdena.png"
import AstroFiction from "../../public/AstroFiction.png"
import TopCreatorAvatar1 from "../../public/TopCreatorAvatar1.png"
import TopCreatorAvatar2 from "../../public/TopCreatorAvatar2.png"
import TopCreatorAvatar3 from "../../public/TopCreatorAvatar3.png"

export default function DiscoverMore() {
  const items = [
    {
      id: 1,
      title: 'Distant Galaxy',
      authorName: 'MoonDancer',
      img: DistantGalaxy,
      avatar: TopCreatorAvatar1,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      title: 'Life on Edena',
      authorName: 'NebulaKid',
      img: LifeOnEdena,
      avatar: TopCreatorAvatar2,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 3,
      title: 'Astro Fiction',
      img: AstroFiction,
      authorName: 'Spaceone',
      avatar: TopCreatorAvatar3,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
  ];
  return (
    <div className='flex flex-col items-start justify-between mt-20 pb-10'>
      <div className='flex justify-between text-left w-[300px] md:w-11/12 self-center 2xl:w-5/6 md:px-8 pb-6'>
        <div className='flex flex-col items-start'>
          <p className="text-2xl md:text-4xl font-bold md:font-semibold w-full">Discover More NFTs</p>
          <p className="text-lg pt-4">Explore new trending NFTs</p>
        </div>
        <div className='hidden md:block'>
          <Button
            color='secondary'
            variant="bordered"
            className='text-white'
            size='lg'
            startContent={
              <LuEye color='#A259FF' />
            }
          >
            See All
          </Button>
        </div>
      </div>
      <div className='columns-1 md:columns-3 mx-auto'>
        <div className='w-full space-y-16 sm:space-y-0'>
          {items.map((i) => {
            return (
              <div className='mb-8 sm:mx-[61px]'>
                <DiscoverMoreCard
                  item={i}
                />
              </div>
            )
          })}
        </div>
        <div className='w-full md:hidden mb-10'>
          <Button
            color='secondary'
            variant="bordered"
            className='text-white w-full'
            size='lg'
            startContent={
              <LuEye color='#A259FF' />
            }
          >
            See All
          </Button>
        </div>
      </div>
    </div >
  )
}