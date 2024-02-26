import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import { spaceMonoRegular, spaceMono } from "../Fonts";

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
        <CardFooter className="mt-10">
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
          height={401}
          width={510}
          style={{ borderRadius: '8% 8% 0% 0%' }}
          src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GS4mJbg4ZEEhrZac37GJzLxax874C9uUKKnprsJ3ReQccx0yfnJ6pd3nHrKbEoiy5g9BNXBipNWd6ALlfXMSNjyLUbI-7p~qYB0MxFbiLVN5IMf4BsUsPFoZlTM~yVjkgwLcL~IoO9~UzKYrNPqjNaHQmvQjbz2pJ4MQdXB1KyQWPLCZKNd4Y1~6Fo87b5HkF-iY5W5jMDYPgaSHX0tuatlvK9tFf6tqYTZm7W-XfWIe7JQf~H9dxAdBrDoXuyAQyy23WuCIj0cFMxyviftOlxUb5BRpOhwm8v8jf35y9hqEgtRgciGbwsJHBtdeaQdYB3zKr37ImW0opCjc92EQWg__"
        />
        <div className="flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl absolute -mt-16 w-[510px]">
          <p className="text-2xl mb-2">Space Walking</p>
          <div className="flex flex-row">
            <Image
              alt='avatarImage'
              height={25}
              width={25}
              style={{ borderRadius: '50%' }}
              src='https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMwOlwUEaPc~F-O9j9V399U9MlhH9c~rwAibuE-aul2McLF56yhX29LXlLQb1buJWhxSBiFLmAaK578t3Mai5A2HePHSRNfmxDCukDu5g~NixPFfFGgBOA8f2BMC5dhelR6xj0Of-Ho2~Vx-0ODcl7f9fonrmqSU~uZxgSJ8iT3aQ9qDHYwJ6L0I5Rim7FJ6MjEjYI3P-qzJMwKTQq3eXcClkU269hchla9ErNFgcWz4budFfroV3cE9nXGlGAOtkxFvaXTcLlKK6dzPanjJ9DB61DmQZWGIteo-KdMR7PjcckEjZbZqtFdpAWJk-WUv0ZjBIiXsxqIJF4y6XdJEkQ__'
            />
            <p className="text-md ml-3">Animakid</p>
          </div>
        </div>
      </div>
    </div>
  )
}