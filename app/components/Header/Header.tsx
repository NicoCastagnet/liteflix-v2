import { getMostPopular } from '@/app/helpers'

import { MainSlider } from '../Sliders'

const Header = async () => {
  const getPopularMovies = await getMostPopular()

  return <MainSlider movies={getPopularMovies} />
}

export default Header
