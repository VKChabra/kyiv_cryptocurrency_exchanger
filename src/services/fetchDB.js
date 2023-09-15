import axios from 'axios';

axios.defaults.baseURL = 'https://crypto-ag2e.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';

// reviews
export const getAllReviews = async params => {
  try {
    const response = await axios.get(`/api/review`, { params });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

// admin access
export const updateReviewStatus = async (reviewId, status) => {
  try {
    const response = await axios.patch(`/api/review/${reviewId}`, { status });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

// transactions
export const getAllTransactions = async params => {
  try {
    const response = await axios.get(`/api/transactions`, { params });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

export const updateTransactionStatus = async (id, status) => {
  try {
    const response = await axios.patch(`/api/transactions/${id}`, { status });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};
