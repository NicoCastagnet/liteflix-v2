import { getMovieCredits } from '@/app/helpers'
import { CharacterSlider } from '../Sliders'

interface Props {
  id: number
}

const MovieChars = async ({ id }: Props) => {
  const data = await getMovieCredits(id)

  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Movie characters
      </h1>
      <CharacterSlider data={data} />
    </section>
  )
}

export default MovieChars
