import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import { spaceMonoRegular, spaceMono } from "../Fonts";
import SpaceWalking from "../../public/SpaceWalking.png"
import AvatarPlaceholder from "../../public/AvatarPlaceholder.png"

export default function HeroSection() {
  return (
    <div className='hidden w-full md:flex pt-16 items-center self-center justify-around'>
      <Card className="bg-background shadow-none">
        <CardHeader className="flex justify-center">
          <div className="flex flex-col justify-center items-start">
            <div className='flex flex-col'>
              <p className="text-7xl font-semibold">Discover</p>
              <p className="text-7xl font-semibold">Digital Art &</p>
              <p className="text-7xl font-semibold">Collect NFTs</p>
            </div>
            <div className="flex flex-col justify-center items-start text-default-600">
              <p className="text-xl">NFT marketplace UI created with Anima for</p>
              <p className="text-xl">Figma. Collect, buy and sell art from more</p>
              <p className="text-xl">than 20k NFT artists.</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className={`${spaceMonoRegular.className}`}>
            <Button color='secondary' size='lg'>
              <RocketIcon className="text-2xl" />
              Get Started
            </Button>
          </div>
        </CardBody>
        <CardFooter className="mt-4">
          <div className='flex justify-between w-full text-3xl mt-8'>
            <div>
              <p className={`${spaceMono.className} font-bold`}>
                240k+
              </p>
              <p>
                Total Sales
              </p>
            </div>
            <div>
              <p className={`${spaceMono.className} font-bold`}>
                100k+
              </p>
              <p>
                Auctions
              </p>
            </div>
            <div>
              <p className={`${spaceMono.className} font-bold`}>
                240k+
              </p>
              <p>
                Artists
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <div className='mx-10'>
        <Image
          alt="space-walking"
          width={510}
          height={401}
          priority={true}
          style={{ borderRadius: '8% 8% 0% 0%' }}
          src={SpaceWalking}
        />
        <div className="flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl absolute -mt-16 w-[510px]">
          <p className="text-2xl mb-2">Space Walking</p>
          <div className="flex flex-row">
            <Image
              alt='avatarImage'
              height={25}
              width={25}
              priority={true}
              style={{ borderRadius: '50%' }}
              src={AvatarPlaceholder}
            />
            <p className="text-md ml-3">Animakid</p>
          </div>
        </div>
      </div>
    </div>
  )
}