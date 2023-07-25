import { TrendingMovie } from '@/app/interfaces'
import { getTrendingMovies } from '@/app/helpers'

import { MovieSlider } from '../Sliders'

interface Props {
  results: TrendingMovie[]
}

const TrendingMovies = async ({
  del,
  direction
}: {
  del: number
  direction: boolean
}) => {
  const data: Props = await getTrendingMovies()
  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Top trending movies
      </h1>
      <MovieSlider
        data={data}
        del={del}
        direction={direction}
      />
    </section>
  )
}

export default TrendingMovies
