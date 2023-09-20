import { createApi } from '@reduxjs/toolkit/query/react';
import instance from 'redux/auth/operations';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: async (args, api, extraOptions) => {
    try {
      const result = await instance(args, extraOptions);
      return { data: result.data };
    } catch (error) {
      return { error };
    }
  },
  tagTypes: ['Transaction'],
  endpoints: build => ({
    addTransaction: build.mutation({
      query: data => ({
        url: '/api/transactions/my',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Transaction'],
    }),
    getMyTransaction: build.query({
      query: () => ({
        url: '/api/transactions/my',
        method: 'GET',
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const { useAddTransactionMutation, useGetMyTransactionQuery } = transactionsApi;
