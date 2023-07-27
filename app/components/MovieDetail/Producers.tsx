/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

'use client'

import { getCompanyDetails } from '@/app/helpers'
import { MovieDetail } from '@/app/interfaces'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
  data: MovieDetail
}

const Producers = ({ data }: Props) => {
  const [info, setInfo] = useState<{ id: number; url: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const urls = await Promise.all(
        data.production_companies.map(async (c) => {
          const details = await getCompanyDetails(c.id)
          const url = details?.homepage || ''
          return { id: c.id, url }
        })
      )
      setInfo(urls)
    }
    fetchData()
  }, [data.production_companies])

  return (
    <span className='flex gap-2'>
      <p className='font-semibold'>Produced by:</p>
      <ul className='flex flex-wrap gap-2 max-w-2xl'>
        {data.production_companies.length
          ? data.production_companies.map((c, i) => {
              const companyUrl = info.find((item) => item.id === c.id)?.url
              return (
                <Link
                  href={companyUrl || ''}
                  key={c.id}
                  className='hover:text-lf-aqua transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <li>
                    {c.name}
                    {i !== data.production_companies.length - 1 ? ',' : ''}
                  </li>
                </Link>
              )
            })
          : 'No data found.'}
      </ul>
    </span>
  )
}

export default Producers
