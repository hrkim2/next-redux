import { createSlice } from "@reduxjs/toolkit";

const initialState = { sum: 1 }; // 초기 상태 정의
//createSlice = createAction + createReducer
const sumSlice = createSlice({
  name: "sum",
  initialState,
  reducers: {
    increment: (state) => {
      state.sum += state.sum;
    },
    decrement: (state) => {
      if (state.sum > 1) {
        state.sum -= state.sum / 2;
      }
    },
  },
});

export const { increment, decrement } = sumSlice.actions;
export default sumSlice.reducer;
