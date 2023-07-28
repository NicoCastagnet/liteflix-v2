/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

import Image from 'next/image'

import { imageBlur } from '@/app/helpers'
import { MovieDetail } from '@/app/interfaces'
import { Play } from '../Icons'

import Producers from './Producers'

interface Props {
  data: MovieDetail
}

const MovieDetails = ({ data }: Props) => {
  const date = data.release_date.split('-')
  const date2 = date.reverse().join('/')

  return (
    <section className='flex flex-col justify-center text-center py-10 px-20 text-white'>
      <h1 className='text-2xl font-bold pb-5'>{data.title} | Movie Details</h1>
      <div className='flex justify-center items-center gap-10'>
        <div className='flex items-center justify-center relative cursor-pointer group overflow-hidden rounded-lg'>
          <Play className='absolute w-20 h-20 border rounded-full p-2 z-10 bg-[#222]/60 group-hover:fill-lf-aqua' />
          <div className='absolute inset-0 bg-[#222]/40 rounded-lg' />
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt={data.title}
            width={450}
            height={150}
            placeholder='blur'
            blurDataURL={imageBlur(51, 51, 51)}
            className='-z-10 object-cover object-center rounded-lg group-hover:scale-110 transition-all'
          />
        </div>
        <div className='flex flex-col text-lg'>
          <div className='flex gap-2'>
            <p className='font-semibold'>Release date:</p>
            <p>
              {date2}{' '}
              <span className='italic text-white/50'>({data.status})</span>
            </p>
          </div>
          <span className='flex gap-2'>
            <p className='font-semibold'>Total budget:</p>
            <p>
              {data.budget !== 0
                ? `$${data.budget.toLocaleString()}`
                : 'No data found.'}
            </p>
          </span>
          <span className='flex gap-2'>
            <p className='font-semibold'>Final earnings:</p>
            <p>
              {data.budget !== 0
                ? `$${data.revenue.toLocaleString()}`
                : 'No data found.'}
            </p>
          </span>
          <span className='flex gap-2'>
            <p className='font-semibold'>Produced in:</p>
            <ul className='flex gap-2'>
              {data.production_countries.length
                ? data.production_countries.map((c, i) => (
                    <li key={c.name}>
                      {c.name}
                      {i !== data.production_countries.length - 1 ? ',' : ''}
                    </li>
                  ))
                : 'No data found.'}
            </ul>
          </span>
          <Producers data={data} />
          {/* <Credits data={data} /> */}
        </div>
      </div>
    </section>
  )
}

export default MovieDetails
