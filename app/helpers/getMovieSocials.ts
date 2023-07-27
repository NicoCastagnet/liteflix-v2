const getMovieSocials = async (id: number) => {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/external_ids`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.NEXT_PUBLIC_TMBD_API_KEY || ''
      },
      next: {
        revalidate: 10
      }
    }
  )

  return url.json()
}

export default getMovieSocials
