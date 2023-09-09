import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//not actually mutating because use immer
//no return statement req for these functions

// Action creator are gen for each red func

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
