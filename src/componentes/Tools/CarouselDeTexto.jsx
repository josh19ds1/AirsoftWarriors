import { useMediaQuery, Box, CardMedia, Container,  useTheme, Typography, CardActionArea } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Dominio, ApiProducto } from './var';
import fetchData from '../Service/feetchApi';
import '../../estilos/swpr.css';
import { Link } from 'react-router-dom';

const apiUrl = `${Dominio}/${ApiProducto}`;

SwiperCore.use([Pagination, Navigation]);
const testo=['SIEMPRE BUSCA LO MEJOR','LOS MEJORES ARTICULOS','LAS MEJORES OFERTAS'];
const CarouselText = () => {
  const [data, setData] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiUrl);
      setData(responseData);
    };

    fetchDataFromApi();
  }, []);

  if (!data || data.length === 0) {
    return null;
  }

  // Obtener una lista aleatoria de 3 productos
  const randomProducts = data.sort(() => 0.5 - Math.random()).slice(4, 7);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {randomProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <Container sx={{textDecoration:'none'}}>

          <Link to="/Catalogo"  style={{ textDecoration: 'none', color: 'inherit' }} >
            <CardActionArea sx={{textDecoration:'none'}}>

            <Box sx={{ width: '100%', height: isMobile ? 250 : 400,textDecoration:'none' }}>
              <CardMedia
                component="img"
                image={product.image_url.url}
                alt={product.description}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  textDecoration:'none'
                }}
              />
            </Box>
            <Typography variant="h3" 
            sx={{ 
              backgroundColor: 'rgba(10, 29, 77, 1)',
              color:'#ffff',
              fontFamily: '"Rubik", sans-serif',
              borderRadius: '15px 15px 0 0px',
              textDecoration:'none'
              }}>{testo[index]}</Typography> {/* Acceder al texto correspondiente */}
            </CardActionArea>
          </Link>

          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselText;
