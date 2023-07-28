'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { Cast } from '@/app/interfaces'
import { imageBlur } from '@/app/helpers'

import { SadFace } from '../Icons'

import 'swiper/css'
import 'swiper/css/navigation'

interface SliderProps {
  data: {
    cast: Cast[]
  }
}

const CharacterSlider = ({ data }: SliderProps) => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        grabCursor
        navigation
        modules={[Navigation]}
        className='!px-20'
      >
        {data.cast.map((char) => {
          return char.profile_path ? (
            <SwiperSlide
              key={char.id}
              className='group'
            >
              <Image
                alt={char.name}
                src={`https://image.tmdb.org/t/p/original/${char.profile_path}`}
                width={450}
                height={450}
                placeholder='blur'
                blurDataURL={imageBlur(51, 51, 51)}
                className='rounded-t-md object-cover object-center -z-10'
              />
              <div className='bg-[#333] bottom-0 left-0 p-5 rounded-b-md flex text-white z-50'>
                <div className='flex flex-col items-left'>
                  <p className='font-semibold text-base'>{char.name}</p>
                  <p className='font-light text-sm'>{char.character}</p>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            ''
          )
        })}
      </Swiper>
    </div>
  )
}

export default CharacterSlider
