"use client";

import '@styles/globals.css'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import AppContextProvider from '@context/AppContextProvider'
import Banner from "@components/library/elements/Banner"
import NavBar from '@components/NavBar';
import ShoppingBag from '@components/ShoppingBag';
import Footer from '@components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Giftcard',
  description: 'Invitations giftcards store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [openBag, setOpenBag] = useState(false);
  const [userName, setUserName] = useState<string>("");
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='app'>
          <AppContextProvider>
            <Banner />
            <NavBar setOpenBag={setOpenBag} />
            <ShoppingBag open={openBag} setOpen={setOpenBag} />
            { children }
            <Footer />
          </AppContextProvider>
        </main>
      </body>
    </html>
  )
}
