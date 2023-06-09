import React, { Suspense, useEffect, useState } from 'react'

import fetchData from '../Service/feetchApi';
import { DataProducto } from '../../vars/Index'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle, Button, CardActionArea, CardActions, Grid } from '@mui/material';





const getApiData = (ordenValue, dineroValue, tipoValue) => {
    let apiData = '';

    switch (ordenValue) {
        case 'asc':
            // Orden ascendente por nombre
            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&name=1';
            break;
        case 'desc':
            // Orden descendente por nombre
            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&name=0';
            break;
        default:
            // Orden por precio
            switch (dineroValue) {
                case 'asc':
                    apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&price=1';
                    break;
                case 'desc':
                    apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&price=0';
                    break;
                default:
                    switch (tipoValue) {
                        case '1':
                            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&tags=1';
                            break;
                        case '2':
                            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&tags=2';
                            break;
                        case '3':
                            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&tags=3';
                            break;
                        case '4':
                                apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products?p=1&tags=4';
                                break;    
                        default:
                            apiData = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products';
                    }
            }
    }

    return apiData;
};




const Productos = ({
    ordenValue,
    dineroValue,
    tipoValue }) => {

    const apiData = getApiData(ordenValue, dineroValue, tipoValue);
       
    const [data, setData] = useState(null);

    useEffect(() => {
        const apiData = getApiData(ordenValue, dineroValue, tipoValue);
      
        const fetchDataFromApi = async () => {
          const responseData = await fetchData(apiData);
          setData(responseData);
        };
        console.log('pasando ')
        fetchDataFromApi();
      }, [ordenValue, dineroValue, tipoValue]);
      
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
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {producto.id_category}
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