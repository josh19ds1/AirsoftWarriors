import React, { useState } from 'react'
import Paginacion from '../Pagination/Productos'
import ListaDeCheck from '../Pagination/ListaDeCheck'
import Productos from '../Pagination/Productos'
import { Container } from '@mui/material'


const Catalogo = () => {

  const [ordenValue, setOrdenValue] = useState('Normal');
  const [dineroValue, setDineroValue] = useState('Normal');
  const [tipoValue, setTipoValue] = useState('Normal');

  const handleToggleOrden = (group, value) => {
    setOrdenValue(value);
  };

  const handleToggleDinero = (group, value) => {
    setDineroValue(value);
  };

  const handleToggleTipo = (group, value) => {
    setTipoValue(value);
  };



  return (

    <div>

      <Container >

        <ListaDeCheck
          handleToggleOrden={handleToggleOrden}
          handleToggleDinero={handleToggleDinero}
          handleToggleTipo={handleToggleTipo}
        />
        <Productos
          ordenValue={ordenValue}
          dineroValue={dineroValue}
          tipoValue={tipoValue}

        />


      </Container>





    </div>









  )
}


export default Catalogo