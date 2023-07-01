import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './carrito/carritoSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
   
  },
});
