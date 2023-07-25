import { Divider } from './components/Divider/Divider'
import { HomePage } from './components/HomePage/HomePage'
import { Top5 } from './components/Top5/Top5'
import { TrendingMovies } from './components/Trending-movies/Trending'
import { TrendingSeries } from './components/Trending-series/Trending'

const Home = () => {
  return (
    <>
      <HomePage />
      <TrendingMovies />
      <Divider />
      <Top5 />
      <TrendingSeries />
    </>
  )
}

export default Home
