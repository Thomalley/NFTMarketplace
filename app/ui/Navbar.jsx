'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Badge } from "@nextui-org/react";
import Link from 'next/link'
import { MdStorefront as ShopIcon } from "react-icons/md";
import { PiUserLight as UserIcon } from "react-icons/pi";
import { spaceMono } from "./Fonts";
import { usePathname } from "next/navigation";
import { IoIosCart } from "react-icons/io";
import { cartStore } from 'app/store/cart';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const cart = cartStore((state) => state.cart);

  return (
    <Navbar shouldHideOnScroll maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand justify="start">
          <ShopIcon color='#A259FF' className='text-3xl self-center' />
          <p className={`${spaceMono.className} antialiased text-lg text-inherit ml-2`}>NFT Marketplace</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        />
      </NavbarContent>
      {pathname === '/marketplace' || pathname === '/marketplace/cart' ? (
        <>
          <NavbarContent className="hidden md:flex gap-4" data-justify='end'>
            <NavbarItem>
              <Link color="foreground" href="/" className="text-xl font-medium">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem className="mt-2">
              <Link color="foreground" href="/marketplace/cart" className="text-lg">
                <Badge content={cart.products.length} color="secondary">
                  <IoIosCart color="#FFFFFF" className="text-4xl" />
                </Badge>
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Marketplace
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Rankings
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Connect a wallet
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button as={Link} color="secondary" href="#" className="text-lg w-full">
                Sign Up
              </Button>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      ) : (
        <>
          <NavbarContent className="hidden md:flex gap-4" data-justify='end'>
            <NavbarItem isActive>
              <Link color="foreground" href="/marketplace" className="text-lg">
                Marketplace
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-lg">
                Rankings
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-lg">
                Connect a wallet
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="secondary" href="#" className="text-lg">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Marketplace
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Rankings
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" href="/marketplace" className="text-lg w-full" size="lg">
                Connect a wallet
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button as={Link} color="secondary" href="#" className="text-lg w-full">
                Sign Up
              </Button>
            </NavbarMenuItem>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
