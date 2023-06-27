import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contador: 0,
};

const carritoCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    increment: (state) => {
      state.contador += 1;
    },
    decrement: (state) => {
      state.contador -= 1;
    },
    reset: (state) => {
      state.contador = 0;
    },
  },
});

export const { increment, decrement, reset } = carritoCountSlice.actions;

export default carritoCountSlice.reducer;
