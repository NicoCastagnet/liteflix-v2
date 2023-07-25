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
      <TrendingMovies
        del={3500}
        direction
      />
      <Divider />
      <TopMovies />
      <TrendingSeries />
      <Genres
        genre={80}
        title='Find out the best crime movies...'
        del={4500}
        direction
      />
      <Genres
        genre={35}
        title='Guaranteed fun!'
        del={4000}
        direction={false}
      />
      <Genres
        genre={27}
        title='Horror films'
        del={5000}
        direction
      />
    </>
  )
}

export default Home
