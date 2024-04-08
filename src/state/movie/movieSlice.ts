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
  Search: Movie[];
  totalResults?: Number;
  Response?: string;
}

const initialState: MovieState = {
  Search: [],
  totalResults: 0,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<MovieState>) => {
        state.Search = action.payload.Search;
        state.totalResults = action.payload.totalResults;
      }
    );
  },
});

const yourkey = "8b162e7b";
const baseURL = `http://www.omdbapi.com/?apikey=${yourkey}&`;
export const getData = createAsyncThunk(
  "movie/getData",
  async ({
    movie = "pokemon",
    pageNumber = 1,
  }: {
    movie?: string;
    pageNumber?: number;
  }) => {
    const response = await axios.get(`${baseURL}s=${movie}&page=${pageNumber}`);
    return response.data;
  }
);

export default movieSlice.reducer;
