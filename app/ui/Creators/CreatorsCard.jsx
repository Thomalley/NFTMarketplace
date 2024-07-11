import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'
import { spaceMonoRegular } from "../Fonts";

export default function CreatorCard({ item }) {
  return (
    <Card shadow="sm" key={item.id} className='bg-[#3B3B3B] 2xl:w-[240px] h-[238px]'>
      <CardBody>
        <div className='flex flex-row w-full overflow-hidden'>
          <div className='w-10 h-10 bg-[#2B2B2B] rounded-3xl'>
            <p className='flex justify-center mt-2'>{item.id}</p>
          </div>
          <div className="ml-2 mt-6">
            <Image
              shadow="sm"
              radius="lg"
              width={120}
              height={120}
              alt={item.title}
              style={{ jusfitySelf: 'center', borderRadius: '50%' }}
              src={item.img}
            />
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col text-lg justify-between">
        <b>{item.title}</b>
        <div className='flex flex-row'>
          <p className="text-default-500 pr-2">Total Sales: </p>
          <p className={`${spaceMonoRegular.className} text-default-600`}>{item.totalSales}</p>
        </div>
      </CardFooter>
    </Card>
  )
};
