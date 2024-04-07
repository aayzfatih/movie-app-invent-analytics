import axios from "axios";

const yourkey = "8b162e7b";
const UnsecureAxios = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${yourkey}&`,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export { UnsecureAxios };
