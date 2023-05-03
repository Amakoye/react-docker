import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import postsReducer from "./slices/posts/postsSlice";

const reducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export { store };
