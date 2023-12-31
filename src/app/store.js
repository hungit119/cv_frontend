import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "../features/AuthenticateSlice.js";
import processReducer from "../features/ProcessSlice.js";
import userReducer from "../features/UserSlice.js";
import cvReducer from "../features/CvSlice.js";
export const store = configureStore({
  reducer: {
    authenticateReducer,
    processReducer,
    userReducer,
    cvReducer,
  },
});
