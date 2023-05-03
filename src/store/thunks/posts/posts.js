import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://dummyjson.com",
});

export const getPosts = createAsyncThunk("Posts/getPosts", async () => {
  try {
    const { data } = await api.get("/posts?limit=3&skip=3");
    return data;
  } catch (error) {}
});
