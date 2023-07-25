export const getMostPopular = async () => {
  const url = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMBD_API_KEY
    },
    next: {
      revalidate: 10
    }
  })

  const data = await url.json()
  const firstTenResults = data.results.slice(0, 10)

  return firstTenResults
}

export default getMostPopular
