import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import fetchData from '../Service/feetchApi';
import { Alert, Button, CardMedia, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Dominio, ApiProducto } from '../Tools/var';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../Store/carrito/carritoSlice';


const DescripProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(`${Dominio}/${ApiProducto}/${id}`);
      setProducto(responseData);
    };

    fetchDataFromApi();
  }, [id]);

  const handleAddCar=(id, name, price, image, quantity)=>{
    const producto ={ id, name, price, image, quantity };
    dispatch(addToCart(producto));

  }



  if (!producto) {
    return <Alert variant="filled" severity="info">
      Cargando los datos
    </Alert>
  }
  return (
    <Container sx={{
      background: '#161822',
      marginTop: 5,
      position: 'relative',
      width: isMobile ? '100%' : '100%',
      height: isMobile ? '100%' : '75vh',

    }}>


      {/* Aqui va la imagen del producto*/}
      <CardMedia component="img"
        image={producto.image_url.url}
        alt={producto.description}
        sx={{
          width: isMobile ? '100%' : '100vh',
          height: isMobile ? 'auto' : 'auto',
          position: 'relative',
          borderRadius: 3,
          background: '#ffff',
          top: 5

        }} />
      {/* Nombre del Producto */}
      <Typography
        component="h1"

        sx={{
          width:isMobile?'100%':'35%',
          height:isMobile?'100%':'35%',
          textAlign:isMobile? 'justify':'center',
          fontSize: isMobile ? '2.1rem' : '2.5rem',
          color: '#ffff',
          fontFamily: '"Rubik", sans-serif',
          mt: 2,
          position:isMobile?'none':'relative',
          left:isMobile?'auto':'62%',
          bottom:isMobile?'auto':'65vh',
        

        }}
      >
        {producto.name}</Typography>



      {/*Descripcion */}
      <Typography
        component="p"
        sx={{
          width:isMobile?'100%':'35%',
          height:isMobile?'100%':'auto',
          position:isMobile?'none':'relative',
          left:isMobile?'':'62%',
          bottom:isMobile?'':'65vh',
        
          textAlign: 'justify',
          color: '#ffff',
          fontSize: isMobile ? '1.2rem' : '',
          fontFamily: '"Rubik", sans-serif',
          opacity: 0.7,
          mt: 1

        }}
      > {producto.description}</Typography>


      <Typography component="h3"
        sx={{
          width:isMobile?'100%':'35%',
          height:isMobile?'100%':'13%',
          position:isMobile?'none':'relative',
          left:isMobile?'':'62%',
          bottom:isMobile?'':'65vh',
         
          color: 'blue',
          fontFamily: '"Rubik", sans-serif',
          fontSize: isMobile ? '2rem' : '2.5rem',
          mt: 2
        }}>
        {producto.price}$</Typography>

      <Typography gutterBottom variant="overline" component="sever" sx={{
         width:isMobile?'100%':'35%',
         height:isMobile?'100%':'75%',
         position:isMobile?'relative':'relative',
         left:isMobile?'48px':'74%',
         bottom:isMobile?'22px':'73vh',
         
        
        color: '#ffff',
        fontFamily: '"Rubik", sans-serif',
        fontSize: isMobile ? '1rem' : '.7rem',
        border: '2px solid green',
        borderRadius: '3px',
        padding: 1,
        

      }}>
        {producto.stock}  Disponible</Typography>




      <Button 
      variant='contained' 
      component={Link}
        to="/Catalogo"

        onClick={() => handleAddCar(producto.id, producto.name, producto.price, producto.image_url.url, 1)}
        style={{
          color: '#ffff',
          fontFamily: '"Rubik", sans-serif',
          textDecoration: 'none',
          position: 'relative',
          background: '#E3600D',
          left:isMobile? '135px':'119vh',
          bottom:isMobile? '24px':'60vh'
        }}>Agregar</Button>
    </Container>
  );
};

export default DescripProducto