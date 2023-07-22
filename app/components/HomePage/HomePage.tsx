import getVideos from '@/app/helpers/getVideos';

const HomePage = async () => {
  const data = await getVideos('8456');

  const getTrailer = () => {
    const url = data.videos.results.find(
      (vid: { type: string }) => vid.type === 'Trailer'
    );
    return url.key;
  };

  return (
    <div className='relative h-0 overflow-hidden pb-[56.25%]'>
      <div className='w-full h-screen absolute bg-gradient-to-t from-[#242424] to-[#242424]/40 bg-transparent opacity-100' />
      <iframe
        src={`https://www.youtube.com/embed/${getTrailer()}?autoplay=1&loop=1&mute=1&controls=0`}
        title={data.title}
        className='absolute top-0 left-0 w-full h-full border-none -z-10'
      />
      <div className='text-white flex flex-col justify-end h-screen absolute max-w-4xl p-16 gap-5'>
        <h1 className='font-bold text-6xl'>{data.title}</h1>
        <p className='line-clamp-3'>{data.overview}</p>
      </div>
    </div>
  );
};

export default HomePage;
