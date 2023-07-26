import { imageBlur } from '@/app/helpers'
import { MovieDetail, Socials } from '@/app/interfaces'
import Image from 'next/image'
import React from 'react'
import {
  Clock,
  Star,
  Hand,
  Chevron,
  LinkIcon,
  Twitter,
  Instagram
} from '../Icons'

import styles from './style.module.css'
import Link from 'next/link'
import getMovieSocials from '@/app/helpers/getMovieSocials'

interface Props {
  data: MovieDetail
}

const toHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return { hours, minutes }
}

const Header = async ({ data }: Props) => {
  const movieTime = toHoursAndMinutes(data.runtime)
  const socials: Socials = await getMovieSocials(data.id)

  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-t from-[#222] to-transparent opacity-100 backdrop-blur-md bg-white/10' />
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.title}
        fill
        placeholder='blur'
        blurDataURL={imageBlur(51, 51, 51)}
        className='-z-20 object-cover object-center absolute top-0'
      />
      <div className='flex items-center justify-center gap-10 relative h-screen w-full'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.title}
          height={400}
          width={300}
          placeholder='blur'
          blurDataURL={imageBlur(51, 51, 51)}
          className='object-cover object-center rounded-lg'
        />
        <div className='flex flex-col gap-5 text-white'>
          <div className='flex items-center gap-10'>
            <div className='flex flex-col'>
              <p className='text-3xl font-bold'>{data.title}</p>
              <span className='italic text-white/50'>{data.tagline}</span>
            </div>
            <span className='flex items-center gap-2 text-2xl text-neutral-900 bg-yellow-500 px-3 py-1 rounded-md font-semibold'>
              {String(data.vote_average).slice(0, 3)}
              <Star className='w-5 h-5' />
            </span>
          </div>
          <span className='flex items-center gap-2'>
            <Clock />
            <p>
              {movieTime.hours}h {movieTime.minutes} minutes.
            </p>
          </span>
          <div className='flex gap-5'>
            {data.genres &&
              data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className='bg-white/30 shadow-lg shadow-white/10 backdrop-blur-md px-4 py-1.5 rounded-md font-light'
                >
                  {genre.name}
                </span>
              ))}
          </div>
          <span className='flex flex-col gap-2 max-w-xl'>
            <p className='font-bold text-2xl'>Overview</p>
            <p>{data.overview}</p>
          </span>
          {data.adult ? (
            <span className='italic text-white/50 flex items-center gap-2'>
              <Hand className='w-7 h-7 fill-white/50' />
              Movie not recommended for audiences under 18 years old.
            </span>
          ) : null}
          <div className='w-full flex justify-between gap-4'>
            <Link
              href={data.homepage ? data.homepage : '#'}
              rel='noopener noreferrer'
              target='_blank'
              className='px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-md w-full flex justify-center items-center gap-1 border border-transparent hover:bg-transparent hover:border hover:border-white/50 transition-colors'
            >
              <LinkIcon className='w-5 h-5' />
              Official website
            </Link>
            <Link
              href={
                socials.twitter_id
                  ? `https://twitter.com/${socials.twitter_id}`
                  : '#'
              }
              rel='noopener noreferrer'
              target='_blank'
              className='px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-md w-full flex items-center justify-center gap-2 border border-transparent hover:bg-transparent hover:border hover:border-white/50 transition-colors'
            >
              <Twitter className='w-4 h-4' />
              Twitter
            </Link>
            <Link
              href={
                socials.instagram_id
                  ? `https://instagram.com/${socials.instagram_id}`
                  : '#'
              }
              rel='noopener noreferrer'
              target='_blank'
              className='px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-md w-full flex justify-center items-center gap-2 border border-transparent hover:bg-transparent hover:border hover:border-white/50 transition-colors'
            >
              <Instagram className='w-4 h-4' />
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <Chevron
        className={`${styles.btn} absolute flex items-center justify-center gap-5 w-full bottom-0 h-20 fill-white py-5`}
      />
    </section>
  )
}

export default Header
