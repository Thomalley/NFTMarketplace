'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import ShopIcon from "./icons/ShopIcon";
import { spaceMono } from "./Fonts";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar shouldHideOnScroll maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand justify="start">
          <ShopIcon />
          <p className={`${spaceMono.className} text-lg text-inherit ml-2`}>NFT Marketplace</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>

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

    </Navbar>
  );
}
