import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const fetchLectures = createAsyncThunk("lectures/fetchLectures", async () => {
  const response = await axios.get(`${API_BASE}/admin/get-lectures`);
  return response.data;
});

const lectureSlice = createSlice({
  name: "lectures",
  initialState: { lectures: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLectures.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLectures.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      })
      .addCase(fetchLectures.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default lectureSlice.reducer;
