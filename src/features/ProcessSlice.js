import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const ProcessSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = ProcessSlice.actions;

export default ProcessSlice.reducer;
