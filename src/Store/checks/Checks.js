import { createSlice } from '@reduxjs/toolkit';

const initialState ={ 
        orden: '',
        dinero: '',
        tipo: 'all',
    
}

const Check = createSlice({
  name: 'listaDeCheck',
  initialState,
  reducers: {
    setOrden: (state, action) => {
      state.orden = action.payload;
    },
    setDinero: (state, action) => {
      state.dinero = action.payload;
    },
    setTipo: (state, action) => {
      state.tipo = action.payload;
    },
  },
});

export const { setOrden, setDinero, setTipo } = Check.actions;
export default Check.reducer;
