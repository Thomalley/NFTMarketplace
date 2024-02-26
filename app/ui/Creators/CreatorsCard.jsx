import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'

export default function CreatorCard({ item }) {
  return (
    <Card shadow="sm" key={item.id} className='bg-[#3B3B3B]'>
      <CardBody>
        <div className='flex flex-row'>
          <div className='absolute w-10 h-10 bg-[#2B2B2B] rounded-3xl left-2 top-2'>
            <p className='p-2'>{item.id}</p>
          </div>
          <Image
            shadow="sm"
            radius="lg"
            width={220}
            height={220}
            alt={item.title}
            style={{ jusfitySelf: 'center', borderRadius: '50%' }}
            src={item.img}
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col text-lg justify-between">
        <b>{item.title}</b>
        <div className='flex flex-row'>
          <p className="text-default-500 pr-2">Total Sales: </p>
          <p className="text-default-600">{item.totalSales}</p>
        </div>
      </CardFooter>
    </Card>
  )
};
