import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require('dotenv').config();

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com/';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('users/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/register', credentials);
    setToken(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const logIn = createAsyncThunk('users/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    await axios.get('/users/logout');
    unsetToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const refresh = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
  const token = await thunkAPI.getState().auth.token;
  if (token === null) {
    return thunkAPI.rejectWithValue('No token');
  }
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
