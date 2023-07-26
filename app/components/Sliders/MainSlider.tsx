'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard } from 'swiper/modules'

import { imageBlur } from '@/app/helpers'

import { PopularMovie } from '@/app/interfaces'

import 'swiper/css'
import 'swiper/css/navigation'

interface SliderProps {
  movies: PopularMovie[]
}

const MainSlider = ({ movies }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false
      }}
      navigation
      grabCursor
      loop
      modules={[Navigation, Autoplay, Keyboard]}
      className='mySwiper'
    >
      {movies.map((movie) => (
        <SwiperSlide
          key={movie.id}
          className='group'
        >
          <div className='relative h-screen'>
            <div className='absolute inset-0 bg-gradient-to-t from-[#222] to-transparent opacity-100' />
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              fill
              placeholder='blur'
              blurDataURL={imageBlur(51, 51, 51)}
              className='-z-10 group-hover:scale-110 transition-all object-cover object-center'
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

export default MainSlider
