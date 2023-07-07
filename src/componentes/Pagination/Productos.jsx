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
import { Button, useMediaQuery, useTheme, } from '@mui/material'
import { Dominio, ApiProducto } from '../Tools/var';


const getApiData = (orden, dinero, tipo) => {
  let apiData = '';
  apiData = `${Dominio}/${ApiProducto}?p=1&name=${orden}&tags=${tipo}&price=${dinero}`;

  return apiData;
};

const Productos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [data, setData] = useState(null);
 
 
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

  const handleAddToCart = (id, name, price, image, quantity) => {
    const producto = { id, name, price, image, quantity };
    dispatch(addToCart(producto));

  };





  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        <Suspense fallback={<div>Loading....</div>}>
          {data?.map((producto) => (
            <Grid item xs={4} sm={3} md={3} lg={3} key={producto.id} >
              <Card
                sx={{
                  width: isMobile ? '13vh' : '43vh',
                  height: isMobile ? 'auto' : 'auto',
                  ml: 0,
                  borderRadius: 2,
                  background: '#B4C7F7',
                  textDecoration: 'none'
                }}
              >
                <Link to={`/DescripcionProducto/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardActionArea sx={{ textDecoration: 'none', background: '#ffff', height: isMobile ? '14vh' : '30vh' }}>

                    <CardMedia
                      component="img"
                      image={producto.image_url.url}
                      alt={producto.description}
                      sx={{

                        width: isMobile ? '12vh' : '100%',
                        height: isMobile ? '8vh' : '100%',
                        position: 'relative',
                        left: isMobile ? '0.5vh' : 0.5,
                    
                      }}
                    />

                  </CardActionArea>
                </Link>
                <CardContent sx={{ p: 0, m: 0, width: isMobile ? '100%' : '100%' }}>


                  <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    textAlign="center"
                    sx={{
                      height: isMobile ? '3vh' : '10vh',
                      overflow: 'hidden',
                      color: 'black',
                      justifyContent: 'initial',
                      fontFamily: '"Rubik", sans-serif',
                      fontSize: isMobile ? '1.5rem' : '1.5rem',
                    

                    }}
                  >
                    {producto.name}
                  </Typography>

                </CardContent>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6"
                    sx={{
                      width: isMobile ? '100%' : '100%',
                      fontSize: isMobile ? '1.5rem' : 20,
                      fontFamily: '"Rubik", sans-serif',
                  

                    }}>
                    Categoria:
                  </Typography>
                  <Typography component="p"
                    sx={{
                      width: isMobile ? '100%' : '',
                      fontSize: isMobile ? '2rem' : 20,
                      fontFamily: '"Rubik", sans-serif',
                      ml:isMobile? 7:16,
                      textAlign: 'match-parent',
                      color: '#010101'
                    }}
                  >{producto.id_category}</Typography>

                  <Typography variant="h6"
                    sx={{
                      fontSize: isMobile ? '1.5rem' : 20,
                      fontFamily: '"Rubik", sans-serif',
                    }}>
                    Precio:
                  </Typography>
                  <Typography component="p"
                    sx={{
                      fontSize: isMobile ? '2rem' : '1.5rem',
                      color: '#010101',
                      textAlign:'initial',
                      ml:isMobile?'1vh':'2vh',
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  >{producto.price}$ 
                  <Typography component="span"
                  sx={{
                    fontSize:isMobile?'1rem':'',
                    fontFamily: '"Rubik", sans-serif',
                    ml:1,
                    color:'black',
                    opacity:.5
                  }}
                  >
                      NO ITBMS
                  </Typography>
                 
                  
                  </Typography>


                </CardContent>



                <Button
                  variant='primary'
                  onClick={() => handleAddToCart(producto.id, producto.name, producto.price, producto.image_url.url, 1)}
                  sx={{
                    width: isMobile ? '9vh' : '50',
                    height: isMobile ? 'auto' : '50',
                    position: 'relative',
                    left: isMobile ? '2vh' : '28vh',
                    bottom:isMobile?'':'5vh',
                    background: '#2057E7',
                    mb:1,
               

                  }}
                >
                  <AddShoppingCartIcon
                    sx={{
                      color: '#ffff',
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
