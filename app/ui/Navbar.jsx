import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ShopIcon from "./icons/ShopIcon";
import { spaceMono } from "./Fonts";
export default function App() {
  return (
    <Navbar shouldHideOnScroll maxWidth='full'>
      <NavbarBrand justify="start">
        <ShopIcon />
        <p className={`${spaceMono.className} text-lg text-inherit ml-2`}>NFT Marketplace</p>
      </NavbarBrand>
      <NavbarContent className="flex" data-justify='end'>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
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
    </Navbar>
  );
}
