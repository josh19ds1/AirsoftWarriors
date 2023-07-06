import React, { Suspense, useEffect, useState } from 'react';
import fetchData from '../Service/feetchApi';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/carrito/carritoSlice';
import {Button} from '@mui/material'
import { Dominio, ApiProducto } from '../Tools/var';


const getApiData = (orden, dinero, tipo) => {
  let apiData = '';
  apiData = `${Dominio}/${ApiProducto}?p=1&name=${orden}&tags=${tipo}&price=${dinero}`;
 
  return apiData;
};

const Productos = () => {
  const [data, setData] = useState(null);
  const colors = ['#EB965D', '#79EB5D', '#B5EB5D', '#5DEBA7'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { orden, dinero, tipo } = useSelector((state) => state.listaDeCheck);


  const dispatch = useDispatch();
 
  

  useEffect(() => {
    const apiData = getApiData(orden, dinero, tipo);
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiData);
      setData(responseData);
    };

    fetchDataFromApi();
  }, [orden, dinero, tipo]);
 
  const handleAddToCart = (id, name,price,image,quantity) => {
      const producto = { id, name ,price,image,quantity};
      dispatch(addToCart(producto));
      
  };


  


  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Suspense fallback={<div>Loading....</div>}>
          {data?.map((producto) => (
            <Grid item xs={12} sm={6} md={3} key={producto.id}>
              <Card
                sx={{
                  maxWidth: 260,
                  ml: 1,
                  borderRadius: 5,
                  background: '#',
                  textDecoration: 'none'
                }}
              >
                <Link to={`/DescripcionProducto/${producto.id}` } style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardActionArea sx={{ background: randomColor ,textDecoration: 'none'}}>
                    <Typography
                      gutterBottom
                      variant="h1"
                      component="div"
                      textAlign="center"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                        color: '#0F0A0F',
                        fontSize: 35,
                      }}
                    >
                      {producto.name}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={producto.image_url.url}
                      alt={producto.description}
                      sx={{
                        width: 181,
                        height: 130,
                        position: 'relative',
                        left: 34,
                      }}
                    />
                    <Typography
                      variant="body2"
                      component="p"
                      color="text.secondary"
                      sx={{
                        m: (0, 2, 0, 2),
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        
                        textDecoration: 'none',
                      }}
                    >
                      {producto.description}
                    </Typography>
                  </CardActionArea>
                </Link>
                <CardContent>
                  <Typography variant="h6" component="h5" sx={{ fontSize: 20 }}>
                    Precio:
                  </Typography>
                  <Typography component="p">{producto.price}</Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" component="h5" sx={{ fontSize: 20 }}>
                    Categoria:
                  </Typography>
                  <Typography component="p">{producto.id_category}</Typography>
                </CardContent>
                <Button
                  variant='primary'
                  onClick={() => handleAddToCart(producto.id, producto.name,producto.price,producto.image_url.url,1)}
                  sx={{
                      width:50,
                      height:50,
                      position:'relative',
                      bottom:80,
                      left:150,
                      borderRadius:'50%',
                      background:'#5DEBA7'


                  }}  
                >
                  <AddShoppingCartIcon
                    sx={{
                      color: 'black',
                    }}
                  />
                </Button>
              </Card>
            </Grid>
          ))}
        </Suspense>
      </Grid>
    </>
  );
};

export default Productos;
