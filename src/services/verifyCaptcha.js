// import axios from 'axios';
// // axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';

import instance from 'redux/auth/operations';
import { notifyError } from 'helpers/notifications';

export const verifyCaptcha = async token => {
  const body = {
    response: token,
  };

  try {
    const response = await instance.post('/captcha', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error:', error);
    notifyError(error);
  }
};
