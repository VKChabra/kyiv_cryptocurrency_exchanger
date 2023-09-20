import { createApi } from '@reduxjs/toolkit/query/react';
import instance from 'redux/auth/operations';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: async (args, api, extraOptions) => {
    try {
      const result = await instance(args, extraOptions);
      return { data: result.data };
    } catch (error) {
      return { error };
    }
  },
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
        url: `/apireview/${reviewid}`,
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
