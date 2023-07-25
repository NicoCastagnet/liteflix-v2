import { Movie } from '../interfaces'

const getVideos = async (id: number): Promise<Movie[]> => {
  const url = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMBD_API_KEY || ''
    },
    next: {
      revalidate: 10
    }
  })

  const data = await url.json()
  const results: Movie[] = data.results

  return results
}

export default getVideos
