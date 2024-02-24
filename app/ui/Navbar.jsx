import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ShopIcon from "./icons/ShopIcon";

export default function App() {
  return (
    <Navbar shouldHideOnScroll maxWidth='full'>
      <NavbarBrand justify="start">
        <ShopIcon />
        <p className="font-bold text-inherit ml-2">NFT Marketplace</p>
      </NavbarBrand>
      <NavbarContent className="flex" data-justify='end'>
        <NavbarItem>
          <Link color="foreground" href="#">
            Marketplace
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Rankings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Connect a wallet
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
