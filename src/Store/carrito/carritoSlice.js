import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  counter: 0,
  priceTotal: 0, // Agregar el precio total inicial
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, quantity } = action.payload;
      const existingProduct = state.products.find(item => item.id === id);

      if (!existingProduct) {
        const newProduct = { id, name, price: price * quantity, newPrice: price * quantity, image, quantity };
        state.products.push(newProduct);
        state.counter = state.products.length;
        state.priceTotal += newProduct.newPrice; // Actualizar el precio total
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const updatedCart = state.products.filter(item => item.id !== id);
      const removedProduct = state.products.find(item => item.id === id);

      if (removedProduct) {
        state.products = updatedCart;
        state.counter = state.products.length;
        state.priceTotal -= removedProduct.newPrice; // Restar el precio del producto eliminado del precio total
      }
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(item => item.id === id);

      if (product) {
        product.quantity++;
        product.newPrice = product.price * product.quantity;
        state.priceTotal += product.price; // Actualizar el precio total al aumentar la cantidad
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(item => item.id === id);

      if (product && product.quantity > 1) {
        product.quantity--;
        product.newPrice = product.price * product.quantity;
        state.priceTotal -= product.price; // Actualizar el precio total al disminuir la cantidad
      }
    },
    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
