import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../Data";
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
interface movieState {
  movies: Movie[];
  totalResults?: string;
  Response?: string;
}
const initialState: movieState = {
  movies: movies.Search,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
