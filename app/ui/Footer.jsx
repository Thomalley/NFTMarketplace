'use client'
import React, { useState } from 'react';
import { Input, Button, Divider } from "@nextui-org/react";
import { MdStorefront as ShopIcon } from "react-icons/md";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { RxDiscordLogo as DiscordIcon } from "react-icons/rx";
import { FiYoutube as YoutubeIcon, FiTwitter as TwitterIcon } from "react-icons/fi";
import { SlEnvolope as EmailIcon } from "react-icons/sl";
import Link from 'next/link'
import { spaceMono } from './Fonts';
import { toast } from 'sonner';

export default function MainFooter() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const handleDisabledSection = () => {
    return toast.warning('Sorry, this section is not available yet :(',
      {
        duration: 4000,
        style: {
          background: '#27272A',
          fontSize: '16px',
          color: '#FDBA74',
          borderColor: 'transparent'
        }
      }
    )
  };

  return (
    <div className="h-full bg-[#3B3B3B] pb-6 flex flex-col justify-between">

      <Divider className='bg-background h-1 w-full' />

      <div className="flex justify-evenly p-4 flex-col md:flex-row">
        <div className='w-full md:w-1/5 pb-10 md:pb-0'>
          <div className="flex flex-row gap-1 pb-4">
            <ShopIcon color='#A259FF' className='text-3xl self-center' />
            <p className={`text-xl 2xl:text-2xl ml-2 ${spaceMono.className}`}>NFT Marketplace</p>
          </div>
          <p className="text-lg text-default-500 md:w-2/3 pb-4">NFT marketplace UI created with Anima for Figma</p>
          <p className="text-lg text-default-500 mb-3">Join our community</p>
          <div className="flex flex-row gap-3">
            <Link href="https://discord.com/invite/eQxkYTNxSp">
              <DiscordIcon color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
              <YoutubeIcon color='#858584' size={'2em'} />
            </Link>
            <Link href="https://twitter.com/animaapp?lang=en">
              <TwitterIcon color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.instagram.com/animaapp/?hl=en">
              <InstagramIcon color='#858584' size={'2em'} />
            </Link>
          </div>
        </div>
        <div className='w-full md:w-1/12 pb-10 md:pb-0'>
          <p className={`text-xl 2xl:text-2xl pb-4 ${spaceMono.className}`}>Explore</p>
          <Link href="/marketplace" className='h-fit'>
            <p className="text-lg text-default-500 mb-4">Marketplace</p>
          </Link>
          <div
            onClick={() => handleDisabledSection()}
            className='cursor-pointer'
          >
            <p className="text-lg text-default-500 mb-4">Rankings</p>
          </div>
          <div
            onClick={() => handleDisabledSection()}
            className='cursor-pointer'
          >
            <p className="text-lg text-default-500">Connect a wallet</p>
          </div>
        </div>
        <div className='w-full md:w-1/4'>
          <p className={`text-xl 2xl:text-2xl pb-4 ${spaceMono.className}`}>
            Join Our Weekly Digest
          </p>
          <p className="text-lg text-default-500 md:w-2/3 pb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row min-w-80 h-12">
            <Input
              size="md"
              radius="lg"
              value={subscribeEmail}
              label="Enter your email here"
              className="light"
              onValueChange={setSubscribeEmail}
              classNames={{ inputWrapper: "hover: gb-white" }}
            />
            <div className="md:flex md:justify-end mt-4 md:mt-0">
              <Button
                className="md:absolute w-full md:w-36 text-lg font-medium"
                size="lg"
                radius="lg"
                color='secondary'
                onClick={() => {
                  setSubscribeEmail('');
                  toast.success('You have successfully subscribed!');
                }}
                startContent={
                  <EmailIcon className="text-xl" />
                }
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-20 md:mt-0'>
        <div className="flex justify-center">
          <Divider className="h-[2px] w-11/12 md:w-5/6" />
        </div>
        <div className="flex justify-start self-center w-11/12 md:w-5/6">
          <p className="text-sm text-default-500 mt-3">Ⓒ NFT Market. Use this template freely</p>
        </div>
      </div>

    </div>
  )
};
