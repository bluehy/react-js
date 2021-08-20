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
   popular: () => api.get("movie/popular"),
   detail: (id) => api.get(`movie/${id}`, {
      params: {
         append_to_response: "videos"
      }
   }),
   search: term => api.get("search/movie", {
      params: {
         query: term
         // url 인코딩이 필요. 
      }
   })
}

export const tvApi = {
   topRated: () => api.get("tv/top_rated"),
   popular: () => api.get("tv/popular"),
   airingToday: () => api.get("tv/airing_today"),
   detail: (id) => api.get(`tv/${id}`, {
      params: {
         append_to_response: "videos"
      }
   }),
   search: term => api.get("search/tv", {
      params: {
         query: term
         // url 인코딩이 필요. 
      }
   })
}