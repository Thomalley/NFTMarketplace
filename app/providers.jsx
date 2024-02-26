'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'sonner'
export function Providers({ children }) {
  return (
    <NextUIProvider>
      <Toaster />
      {children}
    </NextUIProvider>
  )
};
