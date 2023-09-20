import axios from 'axios';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';

export const getCurrentUserMessages = async () => {
  try {
    const response = await axios.get(`/api/chat/mychat`);

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};
