import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAvatar: (state, action) => {
      state.user.avatar = action.payload;
    },
  },
});

export const { setUser, setAvatar } = UserSlice.actions;

export default UserSlice.reducer;
