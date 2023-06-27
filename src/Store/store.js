import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './carrito/carritoSlice';
import countReducer from './carrito/CountProduct';
import btnProd from './carrito/ableButton';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartCount: countReducer,
    ButtonProd:btnProd,
  },
});
