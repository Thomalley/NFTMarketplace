'use client'
import React from 'react';
import { cartStore } from 'app/store/cart';
import DiscoverMoreCard from 'app/ui/DiscoverNFT/DiscoverMoreCard';
import { Toaster, toast } from 'sonner'
import { Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link'
import { spaceMonoRegular } from 'app/ui/Fonts';

export default function Cart() {
  const products = cartStore((state) => state.cart.products);
  const removeProduct = cartStore((s) => s.removeProduct)

  const handleDeleteProduct = (i) => {
    removeProduct(i)
    toast.success('NFT successfully removed from cart')
  }

  return (
    <div className=' bg-[#3B3B3B] md:h-[640px]'>
      <Toaster richColors />
      <div className='flex flex-row justify-around w-full bg-background h-20'>
        <div className='flex flex-row mb-4'>
          <p className='pr-4 font-semibold text-lg'>
            {!products.length ? 'Your cart is empty 😖' : 'Welcome to your cart 🛒'}
          </p>
        </div>
      </div>
      {products.length ? products.map((p) => {
        return (
          <div className='flex flex-row m-auto mb-6 pt-12' key={p.id}>
            <Tooltip color="secondary" content='Remove NFT from cart' size="sm">
              <Button
                onClick={() => handleDeleteProduct(p)}
                className="absolute w-10 h-10 ml-16 text-4xl text-[#A259FF] bg-transparent"
              >
                x
              </Button>
            </Tooltip>
            <DiscoverMoreCard
              item={p}
              color='background'
            />
          </div>
        )
      })
        :
        <div className='flex flex-row m-auto justify-center pt-12'>
          <div className={`text-3xl ${spaceMonoRegular.className} underline text-secondary sshadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#A259FF,0_0_15px_#A259FF,0_0_30px_#A259FF]`}>
            <Link href='/marketplace'>
              <p>Shop Now!</p>
            </Link>
          </div>
        </div>
      }
    </div >
  )
};
