import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// PAKAI REDUX TOOLKIT
export const counterSliceReducer = createSlice({
  name: "counter",
  initialState,
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

console.log(counterSliceReducer);

export const { increment, decrement, incrementByAmount } =
  counterSliceReducer.actions;

export default counterSliceReducer.reducer;
