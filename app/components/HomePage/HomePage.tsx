import getMostPopular from '@/app/helpers/getMostPopular'
import { Popular } from '@/app/interfaces'
import { HomeSlider } from './HomeSlider'

export const HomePage = async () => {
  const getPopularMovies: Popular = await getMostPopular()
  const getLatestPopular = getPopularMovies.results.slice(0, 10)

  return <HomeSlider movies={getLatestPopular} />
}
