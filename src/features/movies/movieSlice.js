import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);

export const fetchAsyncShow = createAsyncThunk(
  "shows/fetchAsyncShow",
  async () => {
    const seriesText = "friends";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  movieOrshows:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Movies pending!");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Movies fetched successfully");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("Movies Rejected");
      })
      .addCase(fetchAsyncShow.pending, (state) => {
        console.log("Shows pending!");
      })
      .addCase(fetchAsyncShow.fulfilled, (state, { payload }) => {
        console.log("Shows fetched successfully");
        state.shows = payload;
      })
      .addCase(fetchAsyncShow.rejected, (state) => {
        console.log("Shows Rejected");
      })
      .addCase(fetchAsyncMovieOrShowDetail.pending, (state) => {
        console.log("Shows pending!");
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Shows fetched successfully");
        state.movieOrshows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.rejected, (state) => {
        console.log("Shows Rejected");
      });
  },
});

export const { addMovies, addShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllmoveOrshows = (state) => state.movies.movieOrshows;
;

export default movieSlice.reducer;
