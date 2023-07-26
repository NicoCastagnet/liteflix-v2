import { MovieDetails, MovieHeader, Related } from '@/app/components'
import { getMovieById } from '@/app/helpers'

const MovieData = async ({ params }: { params: { id: number } }) => {
  const data = await getMovieById(params.id)
  return (
    <>
      <MovieHeader data={data} />
      <MovieDetails data={data} />
      <Related
        id={params.id}
        del={4500}
        direction={false}
      />
    </>
  )
}

export default MovieData
