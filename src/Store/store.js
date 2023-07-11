import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './carrito/carritoSlice';
import UserExist from './userLogin/userExist';
import Checks from './checks/Checks';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:UserExist,
    listaDeCheck: Checks,
  },
});
