import axios from 'axios';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
export const chatHost = 'http://localhost:3002';

export const allUsersRoute = `/users/all`;
export const sendMessageRoute = `${chatHost}/api/chat/addmsg`;
export const recieveMessageRoute = `${chatHost}/api/chat/getmsg`;

export const getCurrentUserMessages = async () => {
  try {
    const response = await axios.get(`${chatHost}/api/chat/mychat`);
    
    return response.items;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

export const getAllUsers = async () => {
  try {
    //   const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
    const response = await axios.get(`${allUsersRoute}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
