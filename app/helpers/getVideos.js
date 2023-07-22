const getVideos = async (id) => {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.TMBD_API_KEY,
      },
      next: {
        revalidate: 10,
      },
    }
  );

  return url.json();
};

export default getVideos;
