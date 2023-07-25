'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'

export function HomeSlider({ movies }) {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true
      }}
      navigation
      grabCursor
      loop
      modules={[Navigation, Autoplay]}
      className='mySwiper'
    >
      {movies.map((movie) => (
        <SwiperSlide
          key={movie.id}
          className='group'
        >
          <div className='relative h-screen'>
            <div className='absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-100' />
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              layout='fill'
              objectFit='cover'
              quality={70}
              className='-z-10 group-hover:scale-110 transition-all'
            />
            <div className='text-white flex flex-col justify-end h-screen absolute max-w-4xl p-20 gap-5'>
              <h1 className='font-bold text-6xl'>{movie.title}</h1>
              <p className='line-clamp-3'>{movie.overview}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
