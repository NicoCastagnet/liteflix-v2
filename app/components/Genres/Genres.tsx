import { getMovieByGenre } from '@/app/helpers'

import { MovieSlider } from '../Sliders'

const Genres = async ({
  genre,
  title,
  del,
  direction
}: {
  genre: number
  title: string
  del: number
  direction: boolean
}) => {
  const data = await getMovieByGenre(genre)
  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>{title}</h1>
      <MovieSlider
        data={data}
        del={del}
        direction={direction}
      />
    </section>
  )
}

export default Genres
