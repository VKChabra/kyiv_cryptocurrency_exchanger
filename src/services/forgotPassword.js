import axios from 'axios';

// axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001';

// import * as axios from '../shared/api/auth';

export const sendForgotPassword = async email => {
  try {
    // const response = await axios.post('/users/passwordReset', email, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    let response = {
      data: {},
      status: 200,
    };
    return response;
  } catch (error) {
    console.log('An error occurred:', error);
  }
};

export const resetPassword = async credentials => {
  try {
    const response = await axios.post('/users/verifyPassword', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.log('An error occurred:', error);
  }
};
