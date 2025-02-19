import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "https://lecture-scheduler-8x8h.onrender.com/api/courses";

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(fetchCourses.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default courseSlice.reducer;
