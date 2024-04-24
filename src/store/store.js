// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
