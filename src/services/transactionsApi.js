import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://crypto-ag2e.onrender.com/api',
    // baseUrl: 'http://localhost:3001/api',

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Transaction'],
  endpoints: build => ({
    addTransaction: build.mutation({
      query: data => ({
        url: `/transactions`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const { useAddTransactionMutation } = transactionsApi;
