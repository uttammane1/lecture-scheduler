import { configureStore } from "@reduxjs/toolkit";
import lectureReducer from "./lectureSlice";

export const store = configureStore({
  reducer: {
    lectures: lectureReducer,
  },
});
