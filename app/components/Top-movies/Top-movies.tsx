import React from 'react'
import getTopRated from '@/app/helpers/getTopRated'
import { Movie } from '@/app/interfaces'
import Image from 'next/image'

export const TopMovies = async () => {
  const data: Movie = await getTopRated()
  const getTop5 = data.results.slice(0, 5)
  return (
    <section className='flex flex-col justify-center items-center gap-8 mb-10'>
      <p className='text-white text-2xl font-bold'>
        Check out the 5 <span className='text-lf-aqua'>most voted</span> movies
        by the audience!
      </p>
      <div className='flex gap-8'>
        {getTop5.map((movie) => (
          <div
            key={movie.id}
            className='relative group'
          >
            <Image
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width={230}
              height={0}
              objectFit='cover'
              quality={100}
            />
            <div className='absolute opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#222] to-transparent w-full h-full top-0 left-0 text-white flex flex-col justify-end py-10 px-2 text-center gap-2 items-center  transition-all'>
              <p className='text-lg font-medium'>{movie.title}</p>
              <button className='border py-2 w-4/5 rounded-full hover:bg-white hover:text-black transition-all'>
                Check it now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
