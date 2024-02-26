import { Card, CardBody } from "@nextui-org/react";
import Image from 'next/image'
import { spaceMonoRegular, spaceMono } from "../Fonts";

export default function CreatorsCardMobile({ item }) {
  return (
    <Card shadow="sm" key={item.id} className='flex bg-[#3B3B3B] items-center h-28 my-2'>
      <CardBody className='flex flex-row justify-center items-center'>
        <div className='flex flex-col mr-7'>
          <div className='absolute w-10 h-10 bg-[#2B2B2B] rounded-3xl left-2 top-2'>
            <p className='flex justify-center mt-2 text-default-500'>{item.id}</p>
          </div>
          <Image
            shadow="sm"
            radius="lg"
            width={80}
            height={80}
            alt={item.title}
            style={{ jusfitySelf: 'center', borderRadius: '50%' }}
            src={item.img}
          />
        </div>
        <div className='flex flex-col text-2xl'>
          <p className='font-semibold'>{item.title}</p>
          <div className='flex flex-row items-center'>
            <p className="text-sm md:text-lg text-default-500 mr-2">Total Sales: </p>
            <p className={`text-base md:text-xl text-default-600 ${spaceMonoRegular.className}`}>{item.totalSales}</p>
          </div>
        </div>
      </CardBody >
    </Card >
  )
}
