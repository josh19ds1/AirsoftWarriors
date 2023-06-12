import React from 'react'
import Carusel from "../../Tools/Carousel";
import { Container} from '@mui/system';
import { Box, Typography } from '@mui/material'
import Tags from './Tags';
import ProdAny from './ProdAny';
import Targeta from '../../Evento/Targeta';
import Lugares from '../../Evento/Lugares';


const url = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/events'


const Inicio = () => {


  return (
    <>

      <Carusel apiUrl={url} />

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
          width: '79%',
          height: 'auto',
          position: 'relative',
          fontSize: 80,
          zIndex: 2,
          background: '#2F1E2F',
          color: '#ffff',
          top: 75,
          left: 50

        }} >
        CATALOGO DE PRODUCTO
      </Typography>




      <Box mt={40} ml={10}>
      
          <Tags/>

      </Box>
      
      <Box mt={40} ml={10}   >
      
        <ProdAny />
      </Box>
      
      <Box mt={40} ml={10}   >
      
       <Targeta/>
      </Box>
      <Box mt={40} ml={10}   >
      
       <Lugares/>
      </Box>



    </>



  )
}

export default Inicio