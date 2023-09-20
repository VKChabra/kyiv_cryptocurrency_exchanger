import axios from 'axios';
import { notifyError } from 'helpers/notifications';

// axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001';

export const verifyCaptcha = async token => {
  const body = {
    response: token,
  };

  try {
    const response = await axios.post('/captcha', body, {
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
