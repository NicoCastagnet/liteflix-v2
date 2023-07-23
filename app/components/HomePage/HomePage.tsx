import getMostPopular from '@/app/helpers/getMostPopular';
import Image from 'next/image';

export default async function HomePage() {
  const getPopularMovies: Popular = await getMostPopular();
  const getRandomMovie =
    getPopularMovies.results[
      Math.floor(Math.random() * getPopularMovies.results.length)
    ];

  return (
    <div className='relative h-screen'>
      <div className='absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-100' />
      <Image
        src={`https://image.tmdb.org/t/p/original/${getRandomMovie.backdrop_path}`}
        alt={getRandomMovie.title}
        layout='fill'
        objectFit='cover'
        className='-z-10'
      />
      <div className='text-white flex flex-col justify-end h-screen absolute max-w-4xl p-16 gap-5'>
        <h1 className='font-bold text-6xl'>{getRandomMovie.title}</h1>
        <p className='line-clamp-3'>{getRandomMovie.overview}</p>
      </div>
    </div>
  );
}
