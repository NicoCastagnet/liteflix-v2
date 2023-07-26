export const getCompanyDetails = async (id: string) => {
  const url = await fetch(`https://api.themoviedb.org/3/company/${id}`, {
    headers: {
      accept: 'application/json',
      Authorization: process.env.TMBD_API_KEY || ''
    },
    next: {
      revalidate: 10
    }
  })

  return url.json()
}

export default getCompanyDetails
