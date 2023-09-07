import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://whitebit.com/api/v4/public',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCryptoData = async () => {
  try {
    const response = await instance.get('/markets');

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
