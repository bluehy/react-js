import axios from "axios";

const api = axios.create({
   baseURL: "https://api.themoviedb.org/3/", 
   params: {
      api_key:"dc1189c3075515b7603eb7c67fd68717",
      language:"en-US"
   }
})

// api.get("tv/popular");

export default api;