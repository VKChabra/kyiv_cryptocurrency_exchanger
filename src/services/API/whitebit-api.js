import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://crypto-ag2e.onrender.com/api',
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCryptoData = async ({ perPage }) => {
  try {
    const response = await instance.get(`/ticker?page=1&perPage=${perPage}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
