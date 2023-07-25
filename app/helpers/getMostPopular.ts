import { PopularMovie } from '../interfaces'

export const getMostPopular = async (): Promise<PopularMovie[]> => {
  const url = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMBD_API_KEY || ''
    },
    next: {
      revalidate: 10
    }
  })

  const data = await url.json()
  const firstTenResults: PopularMovie[] = data.results.slice(0, 10)

  return firstTenResults
}

export default getMostPopular
