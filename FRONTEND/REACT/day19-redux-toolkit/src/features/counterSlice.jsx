import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //this is the name of slice
  initialState: {
    //this is a state for holding  data
    count: 0,
  },
  reducers: {
    // this is action for updating state
    increment: (state,action) => {
      console.log(action);
      
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

console.log("slice->", counterSlice);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
