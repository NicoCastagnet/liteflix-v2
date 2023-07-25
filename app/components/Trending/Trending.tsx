import getTrendingData from '../../helpers/getTrendingData'
import { Trending } from '@/app/interfaces'
import { Slider } from './Swiper'

export default async function TrendingMovies() {
  const data: Trending = await getTrendingData()
  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-8 pb-5'>
        Top trending movies
      </h1>
      <Slider movies={data} />
    </section>
  )
}
