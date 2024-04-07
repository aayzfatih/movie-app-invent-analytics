import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieState {
  movies: Movie[];
  totalResults?: Number;
  Response?: string;
}

const initialState: MovieState = {
  movies: [],
  totalResults: 0,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload;
      })
      .addCase(
        searchMovie.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.movies = action.payload;
        }
      );
  },
});

const yourkey = "8b162e7b";
const baseURL = `http://www.omdbapi.com/?apikey=${yourkey}&`;
export const getData = createAsyncThunk("movie/getData", async () => {
  const response = await axios.get(`${baseURL}s=pokemon`);
  return response.data.Search;
});
export const searchMovie = createAsyncThunk(
  "movie/searchMovie",
  async (movie: string) => {
    const response = await axios.get(`${baseURL}s=${movie}`);
    return response.data.Search;
  }
);
export default movieSlice.reducer;
