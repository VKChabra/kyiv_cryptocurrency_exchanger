import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from 'redux/store';
import { updateValue } from './authSlice';

// axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com/';
axios.defaults.baseURL = 'http://localhost:3001/';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

axios.interceptors.response.use(
  res => res,
  async error => {
    console.log(1);
    if (error.response.status === 401) {
      console.log(401);

      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const { data } = await axios.post('/users/refresh', { refreshToken });
        console.log(data);
        setToken(data.token);

        store.dispatch(updateValue(data.token));

        // localStorage.setItem('refreshToken', data?.refreshToken);

        // console.log(error.config);
        // return axios(error.config);

        const newConfig = { ...error.config };
        newConfig.headers['Authorization'] = `Bearer ${data.token}`;
        return axios(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// export const refreshTokenAndRetry = async config => {
//   const refreshToken = localStorage.getItem('refreshToken');
//   if (refreshToken) {
//     try {
//       const { data } = await axios.post('/users/refresh', { refreshToken });
//       setToken(data.token);
//       localStorage.setItem('refreshToken', data?.refreshToken);
//       // Повторите оригинальный запрос с обновленным токеном
//       const response = await axios(config);
//       return { token: data.token, response };
//     } catch (error) {
//       throw error;
//     }
//   } else {
//     throw new Error('No refresh token available');
//   }
// };

export const register = createAsyncThunk('users/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/register', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const verifyMail = createAsyncThunk('users/verify', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/verify', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const logIn = createAsyncThunk('users/logIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);

    localStorage.setItem('refreshToken', data?.refreshToken);
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

export const update = createAsyncThunk('users/update', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.patch('/users/updateData', credentials);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
