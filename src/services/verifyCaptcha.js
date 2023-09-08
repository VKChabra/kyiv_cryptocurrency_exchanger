import axios from 'axios';
import { notifyError } from 'helpers/notifications';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';

export const verifyCaptcha = async token => {
  const body = {
    secret: process.env.REACT_APP_RECAPTCHA_SERVER_KEY,
    response: token,
  };
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.data;
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
    notifyError(error);
  }
};
