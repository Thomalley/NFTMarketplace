'use client'
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MdStorefront as ShopIcon } from "react-icons/md";
import { PiUserLight as UserIcon } from "react-icons/pi";
import { IoChevronBack as BackIcon } from "react-icons/io5";
import { IoIosCart as CartIcon } from "react-icons/io";
import { cartStore } from 'app/store/cart';
import { spaceMono } from "./Fonts";
import { toast } from 'sonner'

export default function App() {
  const router = useRouter()
  const pathname = usePathname();
  const cart = cartStore((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Navbar
      shouldHideOnScroll
      className='mt-1'
      maxWidth='full'
      onMenuOpenChange={() => setIsMenuOpen((prev) => !prev)}
    >
      <NavbarContent>
        <NavbarBrand justify="start">
          <Link color="foreground" href="/" className="flex flex-row">
            <ShopIcon color='#A259FF' className='text-3xl self-center' />
            <p className={`${spaceMono.className} antialiased text-lg text-inherit ml-2`}>NFT Marketplace</p>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" data-justify='end'>
        {pathname.includes('marketplace') && (
          <NavbarItem
            className='cursor-pointer text-lg'
            onClick={() => router.back()}
          >
            <Link color="foreground" href="/" className="flex flex-row">
              <BackIcon className='mt-[5px] mr-1' />
              Back
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Link color="foreground" href="/marketplace" className="text-lg">
            Marketplace
          </Link>
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer text-lg"
          onClick={() => handleDisabledSection()}
        >
          Rankings
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer text-lg"
          onClick={() => handleDisabledSection()}
        >
          Connect a wallet
        </NavbarItem>
        <NavbarItem
        >
          <Button
            color="secondary"
            className="text-lg"
            onClick={() => handleDisabledSection()}
          >
            <UserIcon />
            Sign Up
          </Button>
        </NavbarItem>
        {pathname.includes('marketplace') && (
          <NavbarItem>
            <Link color="foreground" href="/marketplace/cart" className="text-lg mt-2">
              <Badge content={cart.products.length} color="secondary">
                <CartIcon color="#FFFFFF" className="text-4xl" />
              </Badge>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {pathname.includes('/marketplace') && (
          <NavbarMenuItem>
            <Link
              color="foreground"
              href="/marketplace/cart"
              className="text-lg"
            >
              <Badge content={cart.products.length} color="secondary">
                <CartIcon color="#FFFFFF" className="text-4xl" />
              </Badge>
            </Link>
          </NavbarMenuItem>
        )}
        <NavbarMenuItem>
          {pathname.includes('marketplace') ? (
            <Link
              color="foreground"
              href="/"
              className="text-lg w-full"
              size="lg"
            >
              Home
            </Link>
          ) : (
            <Link
              color="foreground"
              href="/marketplace"
              className="text-lg w-full"
              size="lg"
            >
              Marketplace
            </Link>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem
          className="cursor-pointer"
          onClick={() => handleDisabledSection()}
        >
          Rankings
        </NavbarMenuItem>
        <NavbarMenuItem
          className="cursor-pointer"
          onClick={() => handleDisabledSection()}
        >
          Connect a wallet
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            color="secondary"
            className="text-lg w-full"
            onClick={() => handleDisabledSection()}
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
