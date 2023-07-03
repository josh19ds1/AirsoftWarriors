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
import Categ from './Categ';


const url = `${Dominio}/${ApiEvento}`;


const Inicio = () => {


  return (
    <>

      <CarouselText/>

        <Categ/>

    </>



  )
}

export default Inicio