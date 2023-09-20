import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance, { interceptor } from '../redux/auth/operations';

// const customBaseQuery = fetchBaseQuery({
//   baseUrl: instance.defaults.baseURL,
//   headers: instance.defaults.headers,
// });

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://crypto-ag2e.onrender.com/api',
    baseUrl: instance.defaults.baseURL,
    interceptors: {
      error: interceptor,
    },

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Reviews'],
  endpoints: build => ({
    getAllReviews: build.query({
      query: page => ({
        url: `/api/review?page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getApprovedReviews: build.query({
      query: page => ({
        url: `/api/review/approved?limit=6&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getUserReviews: build.query({
      query: userId => ({
        url: `/api/owner/${userId}`,
      }),
      providesTags: ['Reviews'],
    }),
    getReviewById: build.query({
      query: reviewid => ({
        url: `/api/review/${reviewid}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getMyReview: build.query({
      query: () => ({
        url: '/api/review/my',
        method: 'GET',
      }),
    }),

    addReview: build.mutation({
      query: data => ({
        url: `/api/review/my`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reviews'],
    }),

    deleteReview: build.mutation({
      query: reviewId => ({
        url: `/api/review/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useAddReviewMutation,
  useGetReviewByIdQuery,
  useDeleteReviewMutation,
  useGetApprovedReviewsQuery,
  useGetUserReviewsQuery,
  useGetMyReviewQuery,
} = reviewsApi;
