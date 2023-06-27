import React, { Suspense, useEffect, useState } from 'react';
import fetchData from '../Service/feetchApi';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../Store/carrito/carritoSlice';
import { increment } from '../../Store/carrito/CountProduct';
import {habilitar, deshabilitar } from '../../Store/carrito/ableButton';
import { Button } from '@mui/base';
import { Dominio, ApiProducto } from '../Tools/var';

const getApiData = (ordenValue, dineroValue, tipoValue) => {
  let apiData = '';
  apiData = `${Dominio}/${ApiProducto}?p=1&name=${ordenValue}&tags=${tipoValue}&price=${dineroValue}`;
  return apiData;
};

const Productos = ({ ordenValue, dineroValue, tipoValue }) => {
  const [data, setData] = useState(null);
  const colors = ['#EB965D', '#79EB5D', '#B5EB5D', '#5DEBA7'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  const dispatch = useDispatch();
  const isButtonDisabled = useSelector((state) => state.ButtonProd.isButtonDisabled);


  useEffect(() => {
    const apiData = getApiData(ordenValue, dineroValue, tipoValue);
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiData);
      setData(responseData);
    };

    fetchDataFromApi();
  }, [ordenValue, dineroValue, tipoValue]);

  const handleAddToCart = (id, name) => {
    if (!isButtonDisabled) {
      const producto = { id, name };
      dispatch(addToCart(producto));
      dispatch(increment());

    
    }
  };

  const handleOtherAction = () => {
    // Lógica para habilitar el botón nuevamente
    dispatch(habilitar());
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
                }}
              >
                <Link to={`/DescripcionProducto/${producto.id}`}>
                  <CardActionArea sx={{ background: randomColor }}>
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
                  sx={{
                    background: '#2F1E2F',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '34px',
                    position: 'relative',
                    bottom: '26px',
                    left: '183px',
                  }}
                  onClick={() => handleAddToCart(producto.id, producto.name)}
                  disabled={isButtonDisabled}
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
