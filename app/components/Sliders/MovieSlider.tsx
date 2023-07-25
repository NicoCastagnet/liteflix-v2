'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import { Movie } from '@/app/interfaces'
import { imageBlur } from '@/app/helpers'

import { Check, Information, Play, Star, ThumbUp } from '../Icons'

import 'swiper/css'
import 'swiper/css/navigation'

interface SliderProps {
  data: {
    results: Movie[]
  }
}

const MovieSlider = ({ data }: SliderProps) => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        autoplay={{
          delay: 5000
        }}
        grabCursor
        navigation
        modules={[Autoplay, Navigation]}
        loop
        centeredSlides
      >
        {data.results.map((movie) => {
          const date = movie.release_date.split('-')
          const date2 = date.reverse().join('/')
          return (
            <SwiperSlide
              key={movie.id}
              className='group'
            >
              <Image
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                width={300}
                height={170}
                placeholder='blur'
                blurDataURL={imageBlur(51, 51, 51)}
                className='rounded-md object-cover object-center'
              />
              <div className='flex justify-between flex-col absolute h-full w-full top-0 left-0 bg-[#222]/80 text-white py-3 px-4 rounded-md z-50 opacity-0 group-hover:opacity-100 transition-all'>
                <h1 className='text-xl font-bold'>{movie.title}</h1>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-3 items-center'>
                    <Play className='w-10 h-10 fill-black border rounded-full p-1 bg-white hover:bg-white/90 transition-all cursor-pointer' />
                    <ThumbUp className='w-10 h-10 border-2 border-[#555] rounded-full p-[0.3rem] bg-[#333] hover:border-white cursor-pointer transition-all' />
                    <Check className='w-10 h-10 border-2 border-[#555] rounded-full p-[0.3rem] bg-[#333] hover:border-white cursor-pointer transition-all' />
                  </div>
                  <div>
                    <Link
                      href={`/movie/${movie.id}`}
                      rel='noreferrer noopener'
                      target='_blank'
                    >
                      <Information className='w-10 h-10 border-2 border-[#555] rounded-full p-[0.3rem] bg-[#333] hover:border-white cursor-pointer transition-all' />
                    </Link>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>{date2}</div>
                  <div className='flex items-center gap-3'>
                    <Star className='fill-lf-aqua' />
                    {String(movie.vote_average).slice(0, 3)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MovieSlider
