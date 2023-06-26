import { createSlice } from '@reduxjs/toolkit';
//aqui tengo que agregar un arreglo vacio
const initialState = {
  products: [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name } = action.payload;
     
      const existingProduct = state.products.find(item => item.id === id,
        console.log("existe"),
        );
      
      if (!existingProduct) {
        state.products.push({ id, name }); 
        // Agrega el producto al carrito si no existe
      }
    },
    
    removeFromCart: (state, action) => {
      const {id} = action.payload;
      const updatedCart = state.products.filter(item => item.id !== id);
      state.products = updatedCart;
      console.log("pase")
      console.log(JSON.stringify(updatedCart, null, 2));
    
    },


    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart,resetCart} = cartSlice.actions;

export default cartSlice.reducer;
