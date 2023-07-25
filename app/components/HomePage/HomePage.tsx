import getMostPopular from '@/app/helpers/getMostPopular'
import { HomeSlider } from './HomeSlider'

export const HomePage = async () => {
  const getPopularMovies = await getMostPopular()

  return <HomeSlider movies={getPopularMovies} />
}
