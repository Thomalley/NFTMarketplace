import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';
import { PiRocketLaunch as RocketIcon } from "react-icons/pi";
import { spaceMonoRegular, spaceMono } from "../Fonts";

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
          <div className='mx-10 mt-6 max-w-[332px]'>
            <Image
              alt="space-walking"
              height={450}
              width={400}
              priority={true}
              style={{ borderRadius: '8% 8% 0% 0%' }}
              src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GS4mJbg4ZEEhrZac37GJzLxax874C9uUKKnprsJ3ReQccx0yfnJ6pd3nHrKbEoiy5g9BNXBipNWd6ALlfXMSNjyLUbI-7p~qYB0MxFbiLVN5IMf4BsUsPFoZlTM~yVjkgwLcL~IoO9~UzKYrNPqjNaHQmvQjbz2pJ4MQdXB1KyQWPLCZKNd4Y1~6Fo87b5HkF-iY5W5jMDYPgaSHX0tuatlvK9tFf6tqYTZm7W-XfWIe7JQf~H9dxAdBrDoXuyAQyy23WuCIj0cFMxyviftOlxUb5BRpOhwm8v8jf35y9hqEgtRgciGbwsJHBtdeaQdYB3zKr37ImW0opCjc92EQWg__"
            />
            <div className="flex flex-col bg-[#3B3B3B] p-4 rounded-b-3xl absolute -mt-12 w-[332px] gap-3">
              <p className="text-2xl 2xl:text-md font-medium">Space Walking</p>
              <div className="flex flex-row">
                <Image
                  alt='avatarImage'
                  height={30}
                  width={30}
                  style={{ borderRadius: '50%' }}
                  src='https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMwOlwUEaPc~F-O9j9V399U9MlhH9c~rwAibuE-aul2McLF56yhX29LXlLQb1buJWhxSBiFLmAaK578t3Mai5A2HePHSRNfmxDCukDu5g~NixPFfFGgBOA8f2BMC5dhelR6xj0Of-Ho2~Vx-0ODcl7f9fonrmqSU~uZxgSJ8iT3aQ9qDHYwJ6L0I5Rim7FJ6MjEjYI3P-qzJMwKTQq3eXcClkU269hchla9ErNFgcWz4budFfroV3cE9nXGlGAOtkxFvaXTcLlKK6dzPanjJ9DB61DmQZWGIteo-KdMR7PjcckEjZbZqtFdpAWJk-WUv0ZjBIiXsxqIJF4y6XdJEkQ__'
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