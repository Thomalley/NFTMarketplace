import { Button } from "@nextui-org/react";
import CreatorsCardMobile from "./CreatorsCardMobile";
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import TopCreatorAvatar1 from "../../public/TopCreatorAvatar1.png"
import TopCreatorAvatar2 from "../../public/TopCreatorAvatar2.png"
import TopCreatorAvatar3 from "../../public/TopCreatorAvatar3.png"
import TopCreatorAvatar4 from "../../public/TopCreatorAvatar4.png"

export default function TopCreatorsMobile() {
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
    <div className='flex flex-col m-10 sm:hidden'>
      <div className='flex flex-col justify-start items-start -mt-3'>
        <p className="text-2xl font-semibold">Top Creators</p>
        <p className="text-md text-default-500">Checkout Top Rated Creators on the NFT Marketplace.</p>
      </div>
      <div className='flex w-full flex-col mt-12'>
        {authors.map((c) => {
          return <CreatorsCardMobile
            item={c}
          />
        })}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          color='secondary'
          variant="bordered"
          className='text-white w-[25em] text-xl h-[60px]'
          size='lg'
          radius="xl"
          startContent={
            <RocketIcon color='#A259FF' className="text-2xl"/>
          }
        >
          View Rankings
        </Button>
      </div>
    </div >
  )
}