import { createSlice } from "@reduxjs/toolkit";
import { reviewsApi } from "./reviewsApi";


const initialState = {
    pageNumber: 1,
};


const reviewsSlice = createSlice({
  name: "reviews",
    initialState,
    reducers: {
        changePageNumber: (state, action)=>{
            state.pageNumber = action.payload;   
      }
  }
 
});


export default reviewsSlice.reducer;
export const { changePageNumber } = reviewsSlice.actions;