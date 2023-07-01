import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './carrito/carritoSlice';
import UserExist from './userLogin/userExist';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:UserExist,
  },
});
