import {
  Divider,
  Genres,
  Header,
  TopMovies,
  TrendingMovies,
  TrendingSeries
} from './components'

const Home = () => {
  return (
    <>
      <Header />
      <TrendingMovies />
      <Divider />
      <TopMovies />
      <TrendingSeries />
      <Genres
        genre={80}
        title='Find out the best crime movies...'
      />
      <Genres
        genre={35}
        title='Guaranteed fun!'
      />
      <Genres
        genre={27}
        title='Horror films'
      />
    </>
  )
}

export default Home
