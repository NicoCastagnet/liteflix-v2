import Image from 'next/image'
import Link from 'next/link'
import getTrendingData from '../../helpers/getTrendingData'
import { Trending } from '@/app/interfaces'

export default async function TrendingMovies () {
  const data: Trending = await getTrendingData()
  return (
    <div className='bg-[#222] py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl'>
            Top Trending Movies
          </h2>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
          {data.results.map((movie) => (
            <div
              key={movie.id}
              className='flex flex-col overflow-hidden rounded-md bg-[#333]'
            >
              <Link
                className='group relative block h-56 overflow-hidden bg-gray-100 md:h-[30rem]'
                href={`/movie/${movie.id}`}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt='image movie banner'
                  width={500}
                  height={500}
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />
              </Link>
              <div className='flex flex-1 flex-col p-4 sm:p-6'>
                <h2 className='mb-2 text-lg font-semibold text-white'>
                  <Link
                    href={`/movie/${movie.id}`}
                    className='transition duration-100 hover:text-lf-aqua active:text-lf-aqua/50'
                  >
                    {movie.title}
                  </Link>
                </h2>

                <p className='text-gray-300 line-clamp-3'>{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
