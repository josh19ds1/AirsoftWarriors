import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isButtonDisabled: false,
};

const ableButton = createSlice({
  name: "ButtonProd",
  initialState,
  reducers: {
    habilitar: (state) => {
      state.isButtonDisabled = false;
    },
  
    deshabilitar: (state) => {
      state.isButtonDisabled = true;
    },
  },
});

export const { habilitar, deshabilitar } = ableButton.actions;

export default ableButton.reducer;
