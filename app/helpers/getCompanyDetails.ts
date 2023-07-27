const getCompanyDetails = async (id: number) => {
  const url = await fetch(`https://api.themoviedb.org/3/company/${id}`, {
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_TMBD_API_KEY || ''
    }
  })

  return url.json()
}

export default getCompanyDetails
