import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/movieSlice';
import showReducer from './movies/movieSlice'
export const store = configureStore({
reducer:{
    movies:movieReducer,
    shows:showReducer
}
})