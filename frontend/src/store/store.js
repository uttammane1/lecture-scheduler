import { configureStore } from '@reduxjs/toolkit';
import instructorReducer from './slices/instructorSlice';
import courseReducer from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    instructors: instructorReducer,
    courses: courseReducer,
  },
});
