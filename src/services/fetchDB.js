import axios from 'axios';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';

export const getAllReviews = async params => {
  try {
    const response = await axios.get(`/api/review`, { params });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// admin access
export const updateReviewStatus = async reviewId => {
  try {
    const response = await axios.patch(`/api/review/${reviewId}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
