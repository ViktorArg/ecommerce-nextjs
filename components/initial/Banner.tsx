"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Banner = () => {
  const [searchText, setSearchText] = useState("");


  return (
    <section className='sectionGrid flex flex-nowrap items-center'>
      <div className='banner_left' >
        <img
          src="./banderin-con-fondo.webp"
          width={500}
          height={20}
          alt='logo'
          className='object-contain'
        />
        <p className="desc">
          A Birthday’s coming!
        </p>
        <h1 className='head_text'>
          Lovely Birthday Invitations and Party Supplies
        </h1>
        <p className="desc">
          Free Backside with your purchase for Printable Invitations!
        </p>
        <button
          type='button'
          className='btn_primary'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          SHOP NOW
        </button>
      </div>
      <div className='banner_rigth' >
        <img
          src="./Portada-3-tarjetas-con-fondo.webp"
          width={1000}
          height={1000}
          alt='logo'
          className='object-contain fill-blue'
        />
      </div>
    </section>
  )
}

export default Banner