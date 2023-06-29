import { createSlice } from '@reduxjs/toolkit';
//aqui tengo que agregar un arreglo vacio

const initialState = {
  products: [],
  counter: 0, // Agrega el campo del contador en el estado inicial
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name } = action.payload;
      const existingProduct = state.products.find(item => item.id === id);

      if (!existingProduct) {
        state.products.push({ id, name });
        state.counter = state.products.length; // Actualiza el contador
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.products.filter(item => item.id !== id);
      state.products = updatedCart;
      state.counter = state.products.length; // Actualiza el contador
    },
    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
