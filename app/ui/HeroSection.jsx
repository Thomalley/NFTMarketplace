import { Button, Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import RocketIcon from "./icons/RocketIcon";

export default function HeroSection() {
  return (
    <div className='flex w-full items-center p-4 justify-center'>
      <div className='p-20'>
        <Card className="max-w-[400px] bg-background shadow-none">
          <CardHeader className="flex gap-3 justify-center">
            <div className="flex flex-col justify-center items-start">
              <div className='flex flex-col'>
                <p className="text-2xl">Discover</p>
                <p className="text-xl">Digital Art &</p>
                <p className="text-xl">Collect NFTs</p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-small text-default-500">NFT marketplace UI created with Anima for</p>
                <p className="text-small text-default-500">Figma. Collect, buy and sell art from more</p>
                <p className="text-small text-default-500">than 20k NFT artists.</p>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className='p-1'>
              <Button color='secondary'>
                <RocketIcon />
                Get Started
              </Button>
            </div>
          </CardBody>
          <CardFooter>
            <div className='flex justify-between w-full'>
              <div>
                <p className='font-semibold'>
                  240k+
                </p>
                <p>
                  Total Sales
                </p>
              </div>
              <div>
                <p className='font-semibold'>
                  100k+
                </p>
                <p>
                  Auctions
                </p>
              </div>
              <div>
                <p className='font-semibold'>
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
      <div className='p-20'>
        <Card className="max-w-[400px] bg-background shadow-none">
          <CardBody>
            <Image
              alt="space-walking"
              height={350}
              width={300}
              radius="sm"
              src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GS4mJbg4ZEEhrZac37GJzLxax874C9uUKKnprsJ3ReQccx0yfnJ6pd3nHrKbEoiy5g9BNXBipNWd6ALlfXMSNjyLUbI-7p~qYB0MxFbiLVN5IMf4BsUsPFoZlTM~yVjkgwLcL~IoO9~UzKYrNPqjNaHQmvQjbz2pJ4MQdXB1KyQWPLCZKNd4Y1~6Fo87b5HkF-iY5W5jMDYPgaSHX0tuatlvK9tFf6tqYTZm7W-XfWIe7JQf~H9dxAdBrDoXuyAQyy23WuCIj0cFMxyviftOlxUb5BRpOhwm8v8jf35y9hqEgtRgciGbwsJHBtdeaQdYB3zKr37ImW0opCjc92EQWg__"
            />
          </CardBody>
          <CardFooter className='bg-lightGray'>
            <div className="flex flex-col">
              <p className="text-md">Space Walking</p>
              <div className="flex flex-row">
                <Image
                  alt='avatarImage'
                  height={20}
                  width={20}
                  radius='lg'
                  src='https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMwOlwUEaPc~F-O9j9V399U9MlhH9c~rwAibuE-aul2McLF56yhX29LXlLQb1buJWhxSBiFLmAaK578t3Mai5A2HePHSRNfmxDCukDu5g~NixPFfFGgBOA8f2BMC5dhelR6xj0Of-Ho2~Vx-0ODcl7f9fonrmqSU~uZxgSJ8iT3aQ9qDHYwJ6L0I5Rim7FJ6MjEjYI3P-qzJMwKTQq3eXcClkU269hchla9ErNFgcWz4budFfroV3cE9nXGlGAOtkxFvaXTcLlKK6dzPanjJ9DB61DmQZWGIteo-KdMR7PjcckEjZbZqtFdpAWJk-WUv0ZjBIiXsxqIJF4y6XdJEkQ__'
                />
                <p className="text-small text-default-500 pl-1">Animakid</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}