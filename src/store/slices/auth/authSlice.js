import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: "John Doe",
  },
  reducers: {},
});

export default authSlice.reducer;
