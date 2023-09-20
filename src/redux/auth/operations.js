import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from 'redux/store';
import { updateValue } from './authSlice';

const instance = axios.create({
  // baseURL: 'https://crypto-ag2e.onrender.com/',
  baseURL: 'http://localhost:3001/',
});
export default instance;

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function unsetToken() {
  instance.defaults.headers.common.Authorization = '';
}

instance.interceptors.response.use(
  res => res,
  async error => {
    console.log(1);
    if (error.response.status === 401) {
      console.log(401);

      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await instance.post('/users/refresh', { refreshToken });
        console.log(data);
        setToken(data.token);

        store.dispatch(updateValue(data.token));

        const newConfig = { ...error.config };
        newConfig.headers['Authorization'] = `Bearer ${data.token}`;
        return instance(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export const register = createAsyncThunk('users/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/register', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const verifyMail = createAsyncThunk('users/verify', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/verify', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const logIn = createAsyncThunk('users/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/login', credentials);
    setToken(data.token);

    localStorage.setItem('refreshToken', data?.refreshToken);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const logOut = createAsyncThunk('users/logOut', async (_, thunkAPI) => {
  try {
    await instance.get('/users/logout');
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
    const { data } = await instance.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const update = createAsyncThunk('users/update', async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.patch('/users/updateData', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
