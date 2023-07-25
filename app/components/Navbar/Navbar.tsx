import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import Bell from '../Icons/Bell'
import Search from '../Icons/Search'

import rgbDataURL from '@/app/helpers/imageBlur'

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-20 py-5 bg-gradient-to-b from-[#181818] to-transparent fixed w-full z-50'>
      <div className='flex justify-center items-center gap-16'>
        <div>
          <Link href='/'>
            <h1 className='uppercase text-lf-aqua font-semibold text-2xl'>
              Lite<span className='font-light'>flix</span>
            </h1>
          </Link>
        </div>
        <ul className='flex gap-5 text-zinc-200 font-semibold text-base'>
          <li className='cursor-pointer hover:text-zinc-400 transition-all'>
            Home
          </li>
          <li className='cursor-pointer hover:text-zinc-400 transition-all'>
            Series
          </li>
          <li className='cursor-pointer hover:text-zinc-400 transition-all'>
            Movies
          </li>
          <li className='cursor-pointer hover:text-zinc-400 transition-all'>
            Latest
          </li>
          <li className='cursor-pointer hover:text-zinc-400 transition-all'>
            Trending
          </li>
        </ul>
      </div>
      <div className='flex items-center fill-white text-white gap-10'>
        <Search className='w-5 h-5 cursor-pointer' />
        <Bell className='w-5 h-5 cursor-pointer' />
        <Image
          src='/man.webp'
          alt='man'
          width={30}
          height={30}
          placeholder='blur'
          blurDataURL={rgbDataURL(51, 51, 51)}
          className='cursor-pointer object-cover object-center'
        />
      </div>
    </nav>
  )
}
