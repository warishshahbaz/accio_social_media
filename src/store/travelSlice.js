import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialVal = {
  data: [],
  loading: false,
  error: false,
};

const fetchAllData = createAsyncThunk("fetchData/data", async () => {
  try {
    const response = await fetch("");
    let res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
});

const fetchData = createSlice({
  name: "data",
  reducers: {},
  extraReducers: {},
});
