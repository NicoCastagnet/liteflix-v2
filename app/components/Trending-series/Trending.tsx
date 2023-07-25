import getTrendingSeries from '../../helpers/getTrendingSeries'
import { TrendingSerie } from '@/app/interfaces'
import { Slider } from './Slider'

export const TrendingSeries = async () => {
  const data: TrendingSerie = await getTrendingSeries()

  return (
    <section className='my-10'>
      <h1 className='text-white text-2xl font-bold px-20 pb-5'>
        Top trending series
      </h1>
      <Slider data={data} />
    </section>
  )
}
