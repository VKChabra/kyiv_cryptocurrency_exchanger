// import axios from 'axios';
// import { updateValue } from 'redux/auth/authSlice';
// import { store } from 'redux/store';

// const instance = axios.create({
//   baseURL: 'https://crypto-ag2e.onrender.com/',
//   //   baseURL: 'http://localhost:3001/',
// });
// export default instance;

// export function setToken(token) {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }
// export function unsetToken() {
//   axios.defaults.headers.common.Authorization = '';
// }

// instance.interceptors.response.use(
//   res => res,
//   async error => {
//     console.log(1);
//     if (error.response.status === 401) {
//       console.log(401);

//       const refreshToken = localStorage.getItem('refreshToken');

//       try {
//         const { data } = await axios.post('/users/refresh', { refreshToken });
//         console.log(data);
//         setToken(data.token);

//         store.dispatch(updateValue(data.token));

//         const newConfig = { ...error.config };
//         newConfig.headers['Authorization'] = `Bearer ${data.token}`;
//         return axios(newConfig);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
