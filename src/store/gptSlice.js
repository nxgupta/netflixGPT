import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptQuery: "",
    showGptSearch: false,
    gptMovieResult: [],
    suggestedMovies: [],
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    saveGptQuery: (state, action) => {
      state.gptQuery = action.payload;
    },
    saveGptResult: (state, action) => {
      state.gptMovieResult = action.payload;
    },
    saveSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
  },
});

export default gptSlice.reducer;
export const {
  toggleGptSearch,
  saveGptResult,
  saveSuggestedMovies,
  saveGptQuery,
} = gptSlice.actions;
