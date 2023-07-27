'use client'

import { getMovieCredits } from '@/app/helpers'
import { Crew, MovieDetail } from '@/app/interfaces'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
  data: MovieDetail
}

const Credits = ({ data }: Props) => {
  const [credits, setCredits] = useState<Crew[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieCredits(data.id)
      setCredits(res.crew)
    }
    fetchData()
  }, [data.id])

  const director = credits.find((item) => item.job === 'Director')
  const directorData = credits.filter((item) => item.name === director?.name)

  const writer = credits.find((item) => item.job === 'Characters')
  const writerData = credits.filter((item) => item.name === writer?.name)

  return (
    <span className='flex justify-between mt-7 text-start'>
      <div>
        <Link href={`/person/${director?.id}`}>
          <p className='font-semibold hover:text-lf-aqua transition-colors'>
            {director?.name}
          </p>
        </Link>
        <ul className='flex gap-2'>
          {directorData.map((n, i) => (
            <li
              className='text-base'
              key={n.id}
            >
              {n.job}
              {i !== directorData.length - 1 ? ', ' : ''}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href={`/person/${writer?.id}`}>
          <p className='font-semibold hover:text-lf-aqua transition-colors'>
            {writer?.name}
          </p>
        </Link>
        <ul className='flex gap-2'>
          {writerData.map((n, i) => (
            <li
              className='text-base'
              key={n.id}
            >
              {n.job}
              {i !== writerData.length - 1 ? ', ' : ''}
            </li>
          ))}
        </ul>
      </div>
    </span>
  )
}

export default Credits
