import React from 'react';
import ProdAny from './ProdAny';
import CarouselText from '../../Tools/CarouselDeTexto';
import Categ from './Categ';
import { Grid } from '@mui/material';

const Inicio = () => {
  return (
    <>
      <CarouselText />
      <Categ />

      <Grid container spacing={3} sx={{height:'auto',mt:5}}>
        <Grid item xs={6} sm={6} md={12} lg={6}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={6}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={6}>
          <ProdAny />
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={6}>
          <ProdAny />
        </Grid>
      </Grid>








    </>
  );
}

export default Inicio;
