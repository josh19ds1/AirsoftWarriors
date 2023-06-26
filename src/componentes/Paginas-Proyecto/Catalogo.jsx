import React, { useState } from 'react'
import ListaDeCheck from '../Pagination/ListaDeCheck'
import Productos from '../Pagination/Productos'
import { Button, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import {resetCart} from '../../Store/carrito/carritoSlice';


const Catalogo = () => {

  const [ordenValue, setOrdenValue] = useState('');
  const [dineroValue, setDineroValue] = useState('');
  const [tipoValue, setTipoValue] = useState('');

  const handleToggleOrden = (group, value) => {
    setOrdenValue(value);
  };

  const handleToggleDinero = (group, value) => {
    setDineroValue(value);
  };

  const handleToggleTipo = (group, value) => {
    setTipoValue(value);
  };
  

const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetCart());
  };


  return (

    <div style={{
      display:'flex',
    
      }}>
    <ListaDeCheck 
          handleToggleOrden={handleToggleOrden}
          handleToggleDinero={handleToggleDinero}
          handleToggleTipo={handleToggleTipo}
        />

      <Container  sx={{
        position:'relative',
        top:0,
        marginTop: 5
    }}>

      
        <Productos
          ordenValue={ordenValue}
          dineroValue={dineroValue}
          tipoValue={tipoValue}

        />

      <Button onClick={handleReset}>reset</Button>

      </Container>





    </div>









  )
}


export default Catalogo