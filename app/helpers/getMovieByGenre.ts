export const getMovieByGenre = async (genre: number) => {
  const url = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMBD_API_KEY || ''
      },
      next: {
        revalidate: 10
      }
    }
  )

  return url.json()
}

export default getMovieByGenre
