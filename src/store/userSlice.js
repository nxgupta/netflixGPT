import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      userId: null,
      preferedLanguage: "en",
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.user.userId = action.payload;
    },
    removeUser: (state, action) => {
      state.user = {
        userId: null,
        preferedLanguage: "en",
      };
    },
    updatePreference: (state, action) => {
      state.user.preferedLanguage = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, updatePreference } = userSlice.actions;
