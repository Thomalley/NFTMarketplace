import React from "react";
import "./globals.css";
import MainNavbar from "./ui/Navbar";
import MainFooter from "./ui/Footer";
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <MainNavbar />
          {children}
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
