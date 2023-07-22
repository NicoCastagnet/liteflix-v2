import React from 'react';
import Bell from '../Icons/Bell';
import List from '../Icons/List';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <section className='w-full flex justify-between py-5 text-white fill-white max-sm:items-center max-sm:justify-between max-sm:px-5 bg-[#333] px-10'>
      <div className='flex items-center text-center gap-20'>
        <Link href={'/'}>
          <h1 className='uppercase text-lf-aqua font-semibold text-4xl max-sm:hidden'>
            Lite<span className='font-light'>flix</span>
          </h1>
        </Link>
        <form>
          <input
            type='text'
            placeholder='Search movie...'
            className='py-2 px-2 rounded-md bg-[#444] text-[#888] placeholder:text-[#888] outline-none'
          />
        </form>
      </div>
      <h1 className='uppercase text-lf-aqua font-semibold text-3xl max-sm:flex hidden'>
        Lite<span className='font-normal'>flix</span>
      </h1>
      <div className='flex gap-10 items-center justify-center'>
        <List className='w-7 h-7 cursor-pointer max-sm:hidden' />
        <div className='cursor-pointer max-sm:hidden'>
          <Bell className='w-6 h-6' />
          <span className='h-2 w-2 bg-lf-aqua rounded-full inline-flex absolute top-[1.7rem] right-[7.9rem]' />
          <span className='animate-ping h-3 w-3 bg-lf-aqua rounded-full inline-flex absolute top-[1.593rem] right-[7.75rem]' />
        </div>
        <div className='w-8 h-8 rounded-full cursor-pointer bg-lf-aqua' />
      </div>
    </section>
  );
};
