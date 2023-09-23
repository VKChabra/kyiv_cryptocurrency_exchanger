import axios from 'axios';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
export const chatHost = 'http://localhost:3002';

export const allUsersRoute = `/users/all`;
export const sendMessageRoute = `https://crypto-ag2e.onrender.com/api/chat/addmsg`;
export const recieveMessageRoute = `https://crypto-ag2e.onrender.com/api/chat/getmsg`;



export const getAllUsers = async () => {
  try {
    //   const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
    const response = await axios.get(`${allUsersRoute}?limit=40`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};


export const handleMsgReceived = async (userId,currentChatId) => {
    try {
        const response = await axios.post(recieveMessageRoute, {
            from: userId,
            to: currentChatId,
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}