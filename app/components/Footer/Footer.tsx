import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='p-4 bg-[#333] sm:p-6 w-full'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <Link href='/'>
            <h1 className='uppercase text-lf-aqua font-semibold text-4xl mb-2'>
              Lite<span className='font-light'>flix</span>
            </h1>
          </Link>
          <p className='max-w-sm text-gray-300'>
            Introducing &quot;LiteFlix,&quot; the ultimate movie companion app
            that offers a seamless and concise way to access all the vital
            information about your favorite films.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
              Resources
            </h2>
            <ul className='text-gray-300'>
              <li className='mb-4'>
                <Link
                  href='#'
                  className='hover:underline'
                >
                  About
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='hover:underline'
                  href='#'
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className='hover:underline'
                  href='#'
                >
                  Lorem
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
              Social
            </h2>
            <ul className='text-gray-300'>
              <li className='mb-4'>
                <Link
                  href='https://linkedin.com/in/nicolas-castagnet/'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='hover:underline'
                >
                  LinkedIn
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  href='https://github.com/NicoCastagnet/'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='hover:underline'
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href='https://nicocastagnet.com.ar/'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='hover:underline'
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm sm:text-center text-gray-300'>
          © 2023{' '}
          <Link
            className='hover:underline'
            href='/'
          >
            LITEFLIX™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
