export interface Trending {
  results: {
    id: number
    poster_path: string
    title: string
    overview: string
  }[]
}

export interface Popular {
  results: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }[]
}

export interface Movie {
  results: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
}
