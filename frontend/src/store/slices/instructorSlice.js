import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "https://lecture-scheduler-8x8h.onrender.com/api/instructors";

export const fetchInstructors = createAsyncThunk(
  'instructors/fetchInstructors',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

const instructorSlice = createSlice({
  name: 'instructors',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInstructors.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchInstructors.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(fetchInstructors.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default instructorSlice.reducer;
