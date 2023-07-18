import React from 'react';
import ProdAny from './ProdAny';
import CarouselText from '../../Tools/CarouselDeTexto';
import Categ from './Categ';
import { CardMedia, Grid, useMediaQuery, useTheme } from '@mui/material';
import imagen1 from '../../../Imagenes/logoSinLet.webp'


const Inicio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <CarouselText />
      <Categ />

      <Grid container spacing={3} sx={{height:'auto',mt:5}}>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={3}>
          <ProdAny />
        </Grid>
      </Grid>

      <CardMedia
      component="img"
      image={imagen1}
      alt='ArisoftWarriorlogo'
        sx={{

          width:isMobile?200:'35vw',
          height:isMobile?'auto':'auto',
          position:'relative',
          mt:5,
          mb:10,
          left:isMobile?'25vw':'30vw',
          top:isMobile?10:'25px'
        }}
      />

        




    </>
  );
}

export default Inicio;
