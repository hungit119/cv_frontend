import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
};

const AuthenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload;
    },
  },
});

export const { setIsAuthenticate } = AuthenticateSlice.actions;

export default AuthenticateSlice.reducer;
