import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errMsg: "",
};

const ErrorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    throwError: (state, action) => {
      state.errMsg = action.payload;
    },
  },
});

export const { throwError } = ErrorSlice.actions;

export default ErrorSlice.reducer;
