import { createSlice } from "@reduxjs/toolkit";
let movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: [],
  },
  reducers: {
    addNowPalyingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPalyingMovies, addTrailerVideo } = movieSlice.actions;
