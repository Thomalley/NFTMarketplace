'use client'
import DiscoverMoreCard from "../DiscoverNFT/DiscoverMoreCard";
import { Button, Divider, Tooltip } from '@nextui-org/react';
import { FaPlus as PlusIcon } from "react-icons/fa";
import { FaMinus as MinusIcon } from "react-icons/fa";
import { cartStore } from 'app/store/cart';
import { Toaster, toast } from 'sonner'
import MarketFungusImage from "../../public/MarketFungusImage.png";
import HappyRobotImage from "../../public/HappyRobotImage.png";
import HappyRobotImage2 from "../../public/HappyRobotImage2.png";
import MarketBearImage from "../../public/MarketBearImage.png";
import MarketDogImage from "../../public/MarketDogImage.png";
import MarketRobotImage from "../../public/MarketRobotImage.png";
import TopCreatorAvatar1 from "../../public/TopCreatorAvatar1.png";
import TopCreatorAvatar2 from "../../public/TopCreatorAvatar2.png";
import TopCreatorAvatar3 from "../../public/TopCreatorAvatar3.png";

export default function MarkerplaceSection() {
  const addProduct = cartStore((s) => s.addProduct)
  const removeProduct = cartStore((s) => s.removeProduct)
  const productsIds = cartStore((s) => s.cart.productsIds);

  const firstRowItems = [
    {
      id: 1,
      title: 'Magic Mushroom 0325',
      authorName: 'Shroomie',
      img: MarketFungusImage,
      avatar: TopCreatorAvatar1,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 2,
      title: 'Happy Robot 032',
      authorName: 'BeKind2Robots',
      img: HappyRobotImage,
      avatar: TopCreatorAvatar2,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 3,
      title: 'Happy Robot 024',
      authorName: 'BeKind2Robots',
      img: HappyRobotImage2,
      avatar: TopCreatorAvatar3,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    }
  ];
  const secondRowItems = [
    {
      id: 4,
      title: 'Designer Bear',
      authorName: 'Mr Fox',
      img: MarketBearImage,
      avatar: TopCreatorAvatar1,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 5,
      title: 'Colorful Dog 0356',
      authorName: 'Keepitreal',
      img: MarketDogImage,
      avatar: TopCreatorAvatar2,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    },
    {
      id: 6,
      title: 'Dancing Robot 0312',
      authorName: 'Robotica',
      img: MarketRobotImage,
      avatar: TopCreatorAvatar3,
      price: '1.63 ETH',
      highestBid: '0.33 wETH',
    }
  ];

  const handleAddProduct = (i) => {
    addProduct(i);
    toast.success('NFT successfully added to cart')
  }

  const handleDeleteProduct = (i) => {
    removeProduct(i)
    toast.success('NFT successfully removed from cart')
  }

  return (
    <div className='flex flex-col items-start justify-around bg-[#3B3B3B]'>
      <Toaster richColors theme='dark' />
      <div className='flex flex-row justify-around w-full bg-background h-20'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-row mb-4'>
            <p className='pr-4 font-semibold text-lg'>NFTs</p>
            <div className='hidden md:flex bg-[#858584] rounded-xl px-2'>302</div>
          </div>
          <Divider className='h-1 w-3/4 md:w-2/3 -mb-8 bg-[#858584]' />
        </div>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-row'>
            <p className='pr-4 font-semibold text-lg text-default-500'>Collections</p>
            <div className='hidden md:flex bg-[#3B3B3B] rounded-xl px-2'>67</div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col pt-12 m-auto'>
        <div className='columns-1 md:columns-3 m-auto'>
          {firstRowItems.map((i) => {
            return (
              <div className='mb-16' key={i.id}>
                <Tooltip color="secondary" content={`${productsIds.includes(i.id) ? 'Remove NFT from cart' : 'Add NFT to cart'}`} size="sm">
                  <Button
                    onClick={() => productsIds.includes(i.id) ? handleDeleteProduct(i) : handleAddProduct(i)}
                    radius='lg'
                    isIconOnly
                    className="absolute h-10 md:ml-16 mt-2 2xl:ml-20 text-2xl text-[#A259FF] bg-transparent"
                  >
                    {productsIds.includes(i.id) ? <MinusIcon /> : <PlusIcon />}
                  </Button>
                </Tooltip>
                <div>
                  <DiscoverMoreCard
                    item={i}
                    color='background'
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className='columns-1 md:columns-3 m-auto'>
          {secondRowItems.map((i) => {
            return (
              <div className='mb-16' key={i.id}>
                <Tooltip color="secondary" content={`${productsIds.includes(i.id) ? 'Remove NFT from cart' : 'Add NFT to cart'}`} size="sm">
                  <Button
                    onClick={() => productsIds.includes(i.id) ? handleDeleteProduct(i) : handleAddProduct(i)}
                    radius='lg'
                    isIconOnly
                    className="absolute h-10 md:ml-16 mt-2 2xl:ml-20 text-2xl text-[#A259FF] bg-transparent"
                  >
                    {productsIds.includes(i.id) ? <MinusIcon /> : <PlusIcon />}
                  </Button>
                </Tooltip>
                <DiscoverMoreCard
                  item={i}
                  color='background'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}