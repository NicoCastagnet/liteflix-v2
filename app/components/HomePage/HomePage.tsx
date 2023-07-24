import getMostPopular from '@/app/helpers/getMostPopular'
import { Popular } from '@/app/interfaces'
import { Slider } from './Swiper'

export default async function HomePage() {
  const getPopularMovies: Popular = await getMostPopular()
  const getLatestPopular = getPopularMovies.results.slice(0, 10)

  return <Slider movies={getLatestPopular} />
}
