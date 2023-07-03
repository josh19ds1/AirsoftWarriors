import React from 'react'
import Carusel from "../../Tools/Carousel";
import { Container} from '@mui/system';
import { Box, Typography } from '@mui/material'
import Tags from './Tags';
import ProdAny from './ProdAny';
import Targeta from '../Evento/Targeta';
import Lugares from '../Evento/Lugares';
import { Dominio,ApiEvento } from '../../Tools/var';
import CarouselText from '../../Tools/CarouselDeTexto';


const url = `${Dominio}/${ApiEvento}`;


const Inicio = () => {


  return (
    <>

      {/* <Carusel apiUrl={url} /> */}

      <CarouselText/>


      <Container sx={{
        background: '#5E5E3D',
        width: '70%',
        height: 300,
        position: 'absolute',
        zIndex: 1,
        right: 0
      }}></Container>


      <Typography variant='h1' component='div' textalign='center'

        sx={{
          width: '60%',
          height: 'auto',
          position: 'relative',
          fontSize: 70,
          zIndex: 2,
          background: '#2F1E2F',
          color: '#ffff',
          top: 75,
          left: 50,
          fontFamily: '"Rubik", sans-serif',
        }} >
        CATALOGO DE PRODUCTO
      </Typography>



    </>



  )
}

export default Inicio