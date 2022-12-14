import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    Logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  Logout,
} = userSlice.actions;

export default userSlice.reducer;
