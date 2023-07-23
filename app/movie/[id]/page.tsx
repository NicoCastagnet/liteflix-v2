import React from 'react'

const MovieData = ({ params }: { params: { id: string } }) => {
  return <div>page {params.id}</div>
}

export default MovieData
