import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import fetchData from '../Service/feetchApi';
import { Alert, Button, CardMedia, Container, Typography } from '@mui/material';





const DescripProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const colors = ['#EB965D', '#79EB5D', '#B5EB5D', '#5DEBA7'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(`https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products/${id}`);
      setProducto(responseData);
    };

    fetchDataFromApi();
  }, [id]);

  if (!producto) {
    return <Alert variant="filled" severity="info">
             Cargando los datos
           </Alert>
        }
  return (
    <Container sx={{

      background: randomColor,
      marginTop: 5,
      position: 'relative',
      borderRadius: 15
    }}>
      <Typography gutterBottom variant="h3" component="div" textAlign="center">{producto.name}</Typography>
      <CardMedia component="img"
        image={producto.image_url.url}
        alt={producto.description}
        sx={{
          width: 600,
          height: 470,
          position: 'relative',
          left: 15,
          borderRadius: 10

        }} />

      <Typography gutterBottom variant="h3" component="div"
        sx={{
          color: '#ffff',
          position: 'absolute',
          right: 147,
          top: 140

        }}>
        Precio:{producto.price}$</Typography>

      <Typography gutterBottom variant="h4" component="div" sx={{
        color: '#ffff',
        position: 'absolute',
        right: 232,
        top: 300

      }}>
        Cantidad:{producto.stock}</Typography>



      <Typography gutterBottom variant="p" component="span" textAlign="justifite" marginBottom={15}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa laborum eius magni eligendi provident quia. Magnam, consectetur quis cupiditate porro ex eveniet nesciunt odio voluptates
        iste neque, dolorem iusto accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa laborum eius magni eligendi provident quia. Magnam, consectetur quis cupiditate porro ex eveniet nesciunt odio voluptates
        iste neque, dolorem iusto accusantium?
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa laborum eius magni eligendi provident quia. Magnam, consectetur quis cupiditate porro ex eveniet nesciunt odio voluptates
        iste neque, dolorem iusto accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa laborum eius magni eligendi provident quia. Magnam, consectetur quis cupiditate porro ex eveniet nesciunt odio voluptates
        iste neque, dolorem iusto accusantium?  {producto.description}</Typography>
      <Button variant='contained' component={Link}
        to="/Catalogo"
        style={{
          color: '#F5F5F3',
          textDecoration: 'none',
          position: 'absolute',
          background: '#E3600D',
          right: 222,
          bottom: 263
        }}>Agregar</Button>
    </Container>
  );
};

export default DescripProducto