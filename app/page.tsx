import Divider from './components/Divider/Divider'
import HomePage from './components/HomePage/HomePage'
import TrendingMovies from './components/Trending/Trending'

export default async function Home() {
  return (
    <>
      <HomePage />
      <TrendingMovies />
      <Divider />
    </>
  )
}
