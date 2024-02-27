import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
let appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;