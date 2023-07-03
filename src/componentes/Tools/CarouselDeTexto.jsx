import { useMediaQuery, Box, CardMedia, Container, Grid, Paper, useTheme, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Dominio, ApiProducto } from './var';
import fetchData from '../Service/feetchApi';
import '../../estilos/swpr.css';

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
  const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 3);

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
          <Container>
            <Box sx={{ width: '100%', height: isMobile ? 250 : 400 }}>
              <CardMedia
                component="img"
                image={product.image_url.url}
                alt={product.description}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography variant="h3" 
            sx={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color:'#ffff',
              fontFamily: '"Rubik", sans-serif',}}>{testo[index]}</Typography> {/* Acceder al texto correspondiente */}
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselText;
