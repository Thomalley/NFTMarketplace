import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import { spaceMonoRegular, spaceMono } from "../Fonts";
import SpaceWalking from "../../public/SpaceWalking.png"
import AvatarPlaceholder from "../../public/AvatarPlaceholder.png"

export default function HeroSection() {
  return (
    <div className='flex flex-col items-center sm:hidden'>
      <div className=''>
        <Card className="max-w-[600px] bg-background shadow-none">
          <CardHeader className="flex justify-center mt-6 px-16">
            <div className="flex flex-col justify-center">
              <div className='flex flex-col gap-1'>
                <p className="text-2xl md:text-3xl font-semibold">Discover Digital Art &</p>
                <p className="text-2xl md:text-3xl font-semibold">Collect NFTs</p>
                <br />
              </div>
              <div className="flex flex-col justify-center -mt-2 text-default-600">
                <p className="text-xl">NFT marketplace UI created with Anima</p>
                <p className="text-xl">for Figma. Collect, buy and sell art from</p>
                <p className="text-xl">more than 20k NFT artists.</p>
              </div>
            </div>
          </CardHeader>
          <div className='mx-auto mt-6 w-[332px]'>
            <Image
              alt="space-walking"
              height={450}
              width={350}
              priority={true}
              style={{ borderRadius: '8% 8% 0% 0%' }}
              src={SpaceWalking}
            />
            <div className="flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl absolute -mt-12 gap-3 w-[332px]">
              <p className="text-2xl 2xl:text-md font-medium">Space Walking</p>
              <div className="flex flex-row">
                <Image
                  alt='avatarImage'
                  height={30}
                  width={30}
                  style={{ borderRadius: '50%' }}
                  src={AvatarPlaceholder}
                />
                <p className="text-lg ml-2 2xl:text-small pl-1">Animakid</p>
              </div>
            </div>
          </div>
          <CardBody>
            <div className={`${spaceMonoRegular.className} flex justify-center mt-16 2xl:my-7`}>
              <Button color='secondary' size='lg' className="w-full mx-7 h-16" radius="lg">
                <RocketIcon className="text-2xl" />
                Get Started
              </Button>
            </div>
          </CardBody>
          <CardFooter>
            <div className='flex justify-around w-full text-xl'>
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
      </div>
    </div>
  )
}