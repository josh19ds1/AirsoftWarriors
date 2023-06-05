import React, { useState, Suspense } from 'react'
import { fetchData } from '../Service/fetchData';
import { DataProducto } from '../../vars/Index'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle, Button, ButtonBase, CardActionArea, CardActions, Grid } from '@mui/material';



const apiData = fetchData('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products');

const Productos = ({
    ordenValue,
    dineroValue,
    tipoValue }) => {
    const [originalData, setOriginalData] = useState([]);
    const [Pagina, setPagina] = useState(1);
    console.log('estoy en producto')
    console.log(ordenValue);
    console.log(dineroValue);
    console.log(tipoValue);

  


    let data = null;
    try {
        data = apiData.read();
     
        // Lógica para mostrar los datos
        data.sort((a, b) => {
            switch (ordenValue) {
              case 'asc':
                // Orden ascendente por nombre
                return a.name.localeCompare(b.name);
              case 'desc':
                // Orden descendente por nombre
                return b.name.localeCompare(a.name);
              default:
                // Orden por precio
                if (dineroValue === 'asc') {
                  // Orden ascendente por precio
                  return a.price - b.price;
                } else {
                  // Orden descendente por precio
                  return b.price - a.price;
                }
            }
          });
        
        

    } catch (error) {

        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                No se estan cargando los datos — <strong>DILE A CHATGPT</strong>
            </Alert>);
    }

    return (
        <>


            <Grid container spacing={3} justifyContent="center">
                <Suspense fallback={<div>Loading....</div>}>
                    {data?.map((producto) => (


                        <Grid item xs={12} sm={6} md={4} key={producto.id}>

                            <Card sx={{ maxWidth: 450, ml: 2 }}>
                                <CardActionArea>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {producto.name}
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="144"
                                        image={producto.image_url.url}
                                        alt={producto.description}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
                                        {producto.description}
                                    </Typography>
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {producto.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" >
                                        Agregar
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Suspense>
            </Grid>


        </>

    )

};

export default Productos;



