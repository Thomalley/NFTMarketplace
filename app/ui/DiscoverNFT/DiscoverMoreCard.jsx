import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'
export default function DiscoverMoreCard({ item }) {
  return (
    <div className='mx-20'>
      <Image
        alt={item.title}
        height={450}
        width={400}
        style={{ borderRadius: '8% 8% 0% 0%' }}
        src={item.img}
      />
      <div className="flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl">
        <p className="text-xl font-semibold">{item.title}</p>
        <div className="flex flex-row py-2">
          <Image
            alt={item.authorName}
            height={20}
            width={20}
            style={{ borderRadius: '50%' }}
            src={item.avatar}
          />
          <p className="text-small text-default-60 pl-2">Animakid</p>
        </div>
        <div className='flex w-full flex-row justify-between text-default-500 text-sm pt-2 pb-1'>
          <p>Price</p>
          <p>Highest Bid</p>
        </div>
        <div className='flex w-full flex-row justify-between text-md'>
          <p>{item.price}</p>
          <p>{item.highestBid}</p>
        </div>
      </div>
    </div>
  )
}
