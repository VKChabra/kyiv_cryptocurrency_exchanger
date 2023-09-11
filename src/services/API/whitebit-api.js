import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://crypto-ag2e.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCryptoData = async () => {
  try {
    const response = await instance.get('/ticker?page=1&perPage=9');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
