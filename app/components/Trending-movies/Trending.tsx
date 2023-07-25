import getTrendingMovies from '../../helpers/getTrendingMovies'
import { Slider } from './Slider'

export const TrendingMovies = async () => {
  const data = await getTrendingMovies()
  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Top trending movies
      </h1>
      <Slider data={data} />
    </section>
  )
}
