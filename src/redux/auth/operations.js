import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/api/auth';

export const register = createAsyncThunk('users/register', async (credentials, thunkAPI) => {
  try {
    const data = await api.register(credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const logIn = createAsyncThunk('users/logIn', async (credentials, thunkAPI) => {
  try {
    const data = await api.login(credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    await api.logout();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const verifyMail = createAsyncThunk('users/verify', async (credentials, thunkAPI) => {
  try {
    const data = await api.verifyMail(credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const refresh = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
  const { token } = await thunkAPI.getState().auth;
  if (token === null) {
    return thunkAPI.rejectWithValue('No token');
  }
  try {
    const data = await api.getCurrent(token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const update = createAsyncThunk('users/update', async (credentials, thunkAPI) => {
  try {
    const data = await api.update(credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
