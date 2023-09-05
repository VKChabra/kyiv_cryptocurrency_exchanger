import { createSlice } from '@reduxjs/toolkit';

const calculatorFormDataSlice = createSlice({
  name: 'calculatorFormData',
  initialState: {
    calculatorFormData: null,
  },
  reducers: {
    storeCalculatorFormData: (state, action) => {
      state.calculatorFormData = action.payload;
    },
  },
});

export const { storeCalculatorFormData } = calculatorFormDataSlice.actions;
export const storeCalcFormReducer = calculatorFormDataSlice.reducer;
