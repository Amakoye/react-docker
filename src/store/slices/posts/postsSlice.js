import { createSlice } from "@reduxjs/toolkit";
import { getPost, getPosts } from "../../thunks/posts/posts";

/**
 * post has
 * id:number
 * title:string
 * body:string
 * userId:number
 * tags:string[]
 *
 * type Post = {
 * id:number
 * }
 *
 *
 */

const initialState = {
  posts: [], // post[]
  post: undefined, // Post | undefined
  loading: false,
  total: 0,
  skip: 0,
  limit: 0,
};

const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    updateCount: () => {
      console.log("State logged");
    },
  },
  extraReducers: (builder) => {
    //builder.addCase
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload?.posts;
      state.total = action.payload?.total;
      state.skip = action.payload?.skip;
      state.limit = action.payload?.limit;
    });
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload?.post;
    });
  },
});
export const { updateCount } = postsSlice.actions;

export default postsSlice.reducer;
