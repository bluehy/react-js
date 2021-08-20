import axios from "axios";

const api = axios.create({
   baseURL: "https://api.themoviedb.org/3/", 
   params: {
      api_key:"dc1189c3075515b7603eb7c67fd68717",
      language:"en-US"
   }
})

// api.get("tv/popular");

export const moviesApi = {
   nowPlaying: () => api.get("movie/now_playing"),
   upcoming: () => api.get("movie/upcoming"),
   popular: () => api.get("movie/popular")
}

export const tvApi = {
   topRated: () => api.get("tv/top_rated"),
   popular: () => api.get("tv/popular"),
   airingToday: () => api.get("tv/airing_today")
}