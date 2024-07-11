import { Button } from "@nextui-org/react";
import CreatorCard from "./CreatorsCard";
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import TopCreatorAvatar1 from "../../public/TopCreatorAvatar1.png"
import TopCreatorAvatar2 from "../../public/TopCreatorAvatar2.png"
import TopCreatorAvatar3 from "../../public/TopCreatorAvatar3.png"
import TopCreatorAvatar4 from "../../public/TopCreatorAvatar4.png"

export default function TopCreators() {
  const authors = [
    {
      id: 1,
      title: 'Keepitreal',
      img: TopCreatorAvatar1,
      totalSales: '34.53 ETH',
    },
    {
      id: 2,
      title: 'DigiLab',
      img: TopCreatorAvatar2,
      totalSales: '34.53 ETH',
    },
    {
      id: 3,
      title: 'GravityOne',
      img: TopCreatorAvatar3,
      totalSales: '34.53 ETH',
    },
    {
      id: 4,
      title: 'Juanie',
      img: TopCreatorAvatar4,
      totalSales: '34.53 ETH',
    },
  ];
  
  return (
    <div className='hidden md:flex flex-col items-start justify-around'>
      <div className='flex justify-between text-left w-[300px] md:w-11/12 self-center 2xl:w-5/6 md:px-8 pb-6'>
        <div className='flex flex-col items-start'>
          <p className="text-2xl md:text-4xl font-bold md:font-semibold w-full">Top Creators</p>
          <p className="text-md text-default-500">Checkout Top Rated Creators on the NFT Marketplace.</p>
        </div>
        <div>
          <Button
            color='secondary'
            variant="bordered"
            className='text-white'
            size='lg'
            startContent={
              <RocketIcon color='#A259FF'/>
            }
          >
            View Rankings
          </Button>
        </div>
      </div>
      <div className='flex justify-between self-center w-11/12 2xl:w-4/5 '>
        {authors.map((c) => {
          return <CreatorCard
            item={c}
          />
        })}
      </div>
    </div >
  )
};
