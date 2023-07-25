import { TrendingSerie } from '@/app/interfaces'
import { getTrendingSeries } from '@/app/helpers'

import { SerieSlider } from '../Sliders'

interface Props {
  results: TrendingSerie[]
}

const TrendingSeries = async () => {
  const data: Props = await getTrendingSeries()

  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Top trending series
      </h1>
      <SerieSlider data={data} />
    </section>
  )
}

export default TrendingSeries
