import React from 'react'
import PaginaPrincipal from '../PaginaPrincipal'
import { useState } from 'react';
import  Button from '@mui/material/Button';


const Inicio = () => {
    const [showSlideShow, setShowSlideShow] = useState(true);

  return (
    <>
        <h1>Pagina Principal</h1>


    <Button className="ox" >Mi primer boton</Button> 
    </>    



  )
}

export default Inicio