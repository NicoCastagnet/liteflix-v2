import { Divider } from './components/Divider/Divider'
import { HomePage } from './components/HomePage/HomePage'
import { TopMovies } from './components/Top-movies/Top-movies'
import { TrendingMovies } from './components/Trending-movies/Trending'
import { TrendingSeries } from './components/Trending-series/Trending'

const Home = () => {
  return (
    <>
      <HomePage />
      <TrendingMovies />
      <Divider />
      <TopMovies />
      <TrendingSeries />
    </>
  )
}

export default Home
