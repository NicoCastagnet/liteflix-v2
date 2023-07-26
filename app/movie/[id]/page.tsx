import { DetailHeader } from '@/app/components'
import { getMovieById } from '@/app/helpers'
import React from 'react'

const MovieData = async ({ params }: { params: { id: number } }) => {
  const data = await getMovieById(params.id)
  return (
    <>
      <DetailHeader data={data} />
    </>
  )
}

export default MovieData
