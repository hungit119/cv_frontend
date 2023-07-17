import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../features/AuthenticateSlice.js";
import processReducer from "../features/ProcessSlice.js";
export const store = configureStore({
  reducer: {
    authenticateReducer,
    processReducer,
  },
});
