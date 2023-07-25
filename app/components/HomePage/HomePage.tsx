import getMostPopular from '@/app/helpers/getMostPopular'
import { PopularMovie } from '@/app/interfaces'
import { HomeSlider } from './HomeSlider'

export const HomePage = async () => {
  const getPopularMovies: PopularMovie = await getMostPopular()
  const getLatestPopular = getPopularMovies.results.slice(0, 10)

  return <HomeSlider movies={getLatestPopular} />
}
