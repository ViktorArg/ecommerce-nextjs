"use client";

import Link from 'next/link'
import Logo from '@utils/Logo';
import SvgIcon from '@utils/SvgIcon';
import { useState, useEffect } from 'react'

const Nav = () => {
  const [searchText, activeSearchText] = useState("");

  return (
    <nav className='nav'>
      <Link href="">
        <Logo height={120} width={200} />
      </Link>
      <div className='titles_grid' >
        <Link href="/index" passHref={true}>
          <p className='titles_text'>
            Home
          </p>
        </Link>
        <Link href="/products" passHref={true}>
          <p className='titles_text'>
            Products
          </p>
        </Link>
        {/* <Link href="/">
          <p className='titles_text'>
            FAQ
          </p>
        </Link>
        <Link href="/">
          <p className='titles_text'>
            About
          </p>
        </Link> */}
        <Link href="/contact" passHref={true}>
        {/* <Link href="/contact.html" onClick={() => handlerContact()}> */}
          <p className='titles_text'>
            Contact
          </p>
        </Link>
      </div>
      <div className='icons_grid'>
        <div className='static relative'>
          <input
            type='text'
            placeholder='Search for a product'
            value={searchText}
            required
            className='search_input peer'
          />
            <svg className="w-6 h-6 absolute top-2 end-2">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
        </div>
        <Link className='cursor-pointer' href="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 hover:text-primary-teal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17h-11v-14h-2"></path>
            <path d="M6 5l14 1l-1 7h-13"></path>
          </svg>
        </Link>
        <Link href="/account">
          <SvgIcon type='user-circle' />
        </Link>
      </div>
    </nav>
  )
}

export default Nav