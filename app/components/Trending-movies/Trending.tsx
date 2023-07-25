import getTrendingMovies from '../../helpers/getTrendingMovies'
import { TrendingMovie } from '@/app/interfaces'
import { Slider } from './Slider'

export const TrendingMovies = async () => {
  const data: TrendingMovie = await getTrendingMovies()
  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Top trending movies
      </h1>
      <Slider data={data} />
    </section>
  )
}
