'use client'
import React from 'react';
import { Input, Button, Divider } from "@nextui-org/react";
import ShopIcon from "./icons/ShopIcon";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import Link from 'next/link'
export default function MainFooter() {
  return (
    <div className="h-full bg-[#3B3B3B] pb-6 flex flex-col justify-between">

      <Divider className='bg-background h-1 w-full' />

      <div className="flex justify-evenly p-4 flex-col md:flex-row">
        <div className='w-full md:w-1/5 pb-10 md:pb-0'>
          <div className="flex flex-row gap-2 pb-4">
            <ShopIcon />
            <p className="text-3xl font-semi">NFT Marketplace</p>
          </div>
          <p className="text-lg text-default-500 md:w-2/3 pb-4">NFT marketplace UI created with Anima for Figma</p>
          <p className="text-lg text-default-500 mb-2">Join our community</p>
          <div className="flex flex-row gap-3">
            <Link href="https://discord.com/invite/eQxkYTNxSp">
              <RxDiscordLogo color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
              <FiYoutube color='#858584' size={'2em'} />
            </Link>
            <Link href="https://twitter.com/animaapp?lang=en">
              <FiTwitter color='#858584' size={'2em'} />
            </Link>
            <Link href="https://www.instagram.com/animaapp/?hl=en">
              <FaInstagram color='#858584' size={'2em'} />
            </Link>
          </div>
        </div>
        <div className='w-full md:w-1/12 pb-10 md:pb-0'>
          <p className="text-3xl font-semi pb-4">Explore</p>
          <Link href="/marketplace">
            <p className="text-lg text-default-500 pb-4">Marketplace</p>
          </Link>
          <p className="text-lg text-default-500 pb-4">Rankings</p>
          <p className="text-lg text-default-500">Connect a wallet</p>
        </div>
        <div className='w-full md:w-1/4'>
          <p className="text-3xl font-semi pb-4">
            Join Our Weekly Digest
          </p>
          <p className="text-lg text-default-500 md:w-2/3 pb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row min-w-80 h-12">
            <Input
              size="md"
              radius="lg"
              label="Enter your email here"
              className="light"
              classNames={{ inputWrapper: "hover: gb-white" }}
            />
            <div className="md:flex md:justify-end mt-4 md:mt-0">
              <Button
                className="md:absolute w-full md:w-36"
                size="lg"
                radius="lg"
                color='secondary'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-20 md:mt-0'>
        <div className="flex justify-center">
          <Divider className="h-[2px] w-11/12 md:w-5/6"/>
        </div>
        <div className="flex justify-start self-center w-11/12 md:w-5/6">
          <p className="text-sm text-default-500 mt-3">Ⓒ NFT Market. Use this template freely</p>
        </div>
      </div>

    </div >
  )
};
