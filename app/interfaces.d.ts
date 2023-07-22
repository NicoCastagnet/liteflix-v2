interface Trending {
  results: {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
  }[];
}

interface Popular {
  results: {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
  }[];
}
