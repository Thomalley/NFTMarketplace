'use client'
import React from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { spaceMonoRegular, spaceMono } from 'app/ui/Fonts';
import { FaPlus as PlusIcon } from "react-icons/fa";
import { cartStore } from 'app/store/cart';
import DiscoverMoreCard from 'app/ui/DiscoverNFT/DiscoverMoreCard';

export default function Cart() {
  const router = useRouter()
  const products = cartStore((s) => s.cart.products);
  const removeProduct = cartStore((s) => s.removeProduct)
  const removeAllProducts = cartStore((s) => s.removeAllProducts);

  const handleDeleteProduct = (i) => {
    removeProduct(i)
    toast.success('NFT successfully removed from cart')
  }

  const handleCancel = () => {
    removeAllProducts();
    router.push('/marketplace');
  };

  const handleBuy = () => {
    removeAllProducts();
    toast.success(`Congrats! You just bought yout ${products.length > 1 ? 'NTFs' : 'NFT'}!`)
    setTimeout(() => router.push('/marketplace'), 2000);
  };
  return (
    <div className=' bg-[#3B3B3B] md:min-h-[640px]'>
      <Toaster richColors />
      <div className={`flex flex-col md:flex-row ${products.length === 0 ? 'justify-center' : 'justify-between'} pb-2 px-12 w-full bg-background h-36 md:h-20 md:mt-12`}>
        <div className='md:hidden flex flex-row'>
          <p className='pr-4 font-semibold text-lg'>
            {!products.length ? 'Your cart is empty 😖' : 'Welcome to your cart 🛒'}
          </p>
        </div>
        {products.length ? (
          <Tooltip color="warning" content='Remove all NFT from cart' size="sm">
            <Button
              color='warning'
              onClick={handleCancel}
              className={`${spaceMono.className} md:mt-8`}
            >
              Cancel
            </Button>
          </Tooltip>
        ) : null}
        <div className='hidden md:flex flex-row self-center'>
          <p className='pr-4 font-semibold text-lg w-fit'>
            {!products.length ? 'Your cart is empty 😖' : 'Welcome to your cart 🛒'}
          </p>
        </div>
        {products.length ? (
          <Button
            color='secondary'
            className={`${spaceMono.className} md:mt-8`}
            onClick={handleBuy}
          >
            Buy
          </Button>
        ) : null}
      </div>
      <div className={products.length ? 'grid grid-cols-1 md:grid-cols-3' : ''}>
        {products.length ? products.map((p) => {
          return (
            <div className='flex flex-row mb-6 pt-12 justify-center' key={p.id}>
              <Tooltip color="secondary" content='Remove NFT from cart' size="sm">
                <Button
                  onClick={() => handleDeleteProduct(p)}
                  radius='lg'
                  isIconOnly
                  className="absolute mt-4 mr-60 md:w-10 md:h-10 2xl:mr-80 text-2xl text-[#A259FF] bg-transparent"
                >
                  <PlusIcon className='rotate-45' />
                </Button>
              </Tooltip>
              <div>
                <DiscoverMoreCard
                  item={p}
                  color='background'
                />
              </div>
            </div>
          )
        })
          :
          <div className='flex flex-row m-auto justify-center pt-12'>
            <Link href='/marketplace'>
              <div className={`text-3xl ${spaceMonoRegular.className} underline text-secondary px-8 py-4 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#A259FF,0_0_15px_#A259FF,0_0_30px_#A259FF]`}>
                <p>Shop Now!</p>
              </div>
            </Link>
          </div>
        }
      </div>
    </div >
  )
};