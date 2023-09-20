import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://crypto-ag2e.onrender.com/api',
    baseUrl: 'http://localhost:3001/api',

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
        url: `/review?page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getApprovedReviews: build.query({
      query: page => ({
        url: `/review/approved?limit=6&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getUserReviews: build.query({
      query: userId => ({
        url: `/owner/${userId}`,
      }),
      providesTags: ['Reviews'],
    }),
    getReviewById: build.query({
      query: reviewid => ({
        url: `review/${reviewid}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getMyReview: build.query({
      query: () => ({
        url: '/review/my',
        method: 'GET',
      }),
    }),

    addReview: build.mutation({
      query: data => ({
        url: `review/my`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reviews'],
    }),

    deleteReview: build.mutation({
      query: reviewId => ({
        url: `review/${reviewId}`,
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
