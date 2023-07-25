import Image from 'next/image'
import React from 'react'

const Divider = () => {
  return (
    <section className='flex items-center text-center justify-center gap-10 mb-10 py-10 bg-[#333]'>
      <Image
        src='/cinema1.webp'
        alt='cinema1'
        width={400}
        height={400}
        objectFit='cover'
        className='drop-shadow-2xl'
      />
      <p className='text-white text-3xl font-medium max-w-xs'>
        Great entertainment options for the whole family
      </p>
      <Image
        src='/cinema2.webp'
        alt='cinema2'
        width={400}
        height={400}
        objectFit='cover'
        className='drop-shadow-2xl'
      />
    </section>
  )
}

export default Divider
