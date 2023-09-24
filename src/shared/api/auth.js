import axios from 'axios';
import { addError, updateToken } from 'redux/auth/authSlice';
import { store } from 'redux/store';

const instance = axios.create({
  baseURL: 'https://crypto-ag2e.onrender.com/',
  //   baseURL: 'http://localhost:3001/',
  timeout: 10000,
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
    const refreshToken = localStorage.getItem('refreshToken');

    if (error.response.status === 401 && refreshToken) {
      try {
        const { data } = await instance.post('/users/refresh', { refreshToken });
        setToken(data.token);
        localStorage.setItem('refreshToken', data.refreshToken);

        store.dispatch(updateToken(data.token));

        const newConfig = { ...error.config };
        newConfig.headers['Authorization'] = `Bearer ${data.token}`;
        return instance(newConfig);
      } catch (error) {
        localStorage.removeItem('refreshToken');

        const errorData = {
          isLoggedIn: false,
          message: error.message,
          status: error.response.status,
        };
        store.dispatch(addError(errorData));

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export const register = async credentials => {
  const { data } = await instance.post('/users/register', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  setToken(data.token);
  localStorage.setItem('refreshToken', data?.refreshToken);
  return data;
};

export const logout = async () => {
  unsetToken();
  localStorage.removeItem('refreshToken');

  const data = await instance.get('/users/logout');
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    unsetToken();
    throw error;
  }
};

export const verifyMail = async credentials => {
  const { data } = await instance.post('/users/verify', credentials);
  return data;
};

export const update = async credentials => {
  const { data } = await instance.patch('/users/updateData', credentials);
  return data;
};
