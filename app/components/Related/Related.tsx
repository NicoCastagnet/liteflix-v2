import { MovieSlider } from '../Sliders'
import { getSimilarMovies } from '@/app/helpers'

interface Props {
  id: number
  del: number
  direction: boolean
}

const Related = async ({ del, direction, id }: Props) => {
  const data = await getSimilarMovies(id)

  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        They might interest you
      </h1>
      <MovieSlider
        data={data}
        del={del}
        direction={direction}
      />
    </section>
  )
}

export default Related
