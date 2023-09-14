import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register, update } from './operations';

const handleUserEnter = (state, { payload }) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, handleUserEnter)
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(register.fulfilled, handleUserEnter)
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, mail: null };
        state.error = null;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(update.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(update.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
