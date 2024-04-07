import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie/movieSlice";
export const store = configureStore({ reducer: { movie: movieSlice } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
