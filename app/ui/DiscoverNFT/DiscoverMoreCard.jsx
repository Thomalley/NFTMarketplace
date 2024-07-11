import Image from 'next/image'
import { workSans, spaceMonoRegular } from "../Fonts";

export default function DiscoverMoreCard({ item, color }) {
  return (
    <div className={`${spaceMonoRegular.className} md:mx-16 w-[330px] h-[469px]`}>
      <Image
        alt={item.title}
        width={330}
        height={295}
        priority={true}
        style={{ borderRadius: '8% 8% 0% 0%' }}
        src={item.img}
        className="object-cover"
      />
      <div className={`flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl max-w-[330px] bg-${color}`}>
        <p className={`${workSans.className} text-xl font-semibold`}>{item.title}</p>
        <div className="flex flex-row items-center py-2">
          <Image
            alt={item.authorName}
            height={20}
            width={20}
            style={{ borderRadius: '50%' }}
            src={item.avatar}
          />
          <h4 className="text-small text-default-60 pl-2">{item.authorName}</h4>
        </div>
        <div className='flex w-full flex-row justify-between text-default-500 text-sm pt-2 pb-1'>
          <h4>Price</h4>
          <h4>Highest Bid</h4>
        </div>
        <div className='flex w-full flex-row justify-between text-md'>
          <h4>{item.price}</h4>
          <h4>{item.highestBid}</h4>
        </div>
      </div>
    </div>
  )
}
