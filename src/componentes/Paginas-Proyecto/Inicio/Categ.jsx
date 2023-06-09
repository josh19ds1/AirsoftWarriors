import React from 'react';
import { useMediaQuery, useTheme, Container, Box, Typography, CardActionArea, CardMedia } from '@mui/material';
import { Dominio, ApiCategorias } from '../../Tools/var';
import { useEffect, useState } from 'react';
import fetchData from '../../Service/feetchApi';
import { Link } from 'react-router-dom';
import imagen from '../../../Imagenes/cascoP.jpg';
import imagen2 from '../../../Imagenes/ArmamentoC.jpg';
import imagen3 from '../../../Imagenes/TiradorC.jpg';



const apiUrl = `${Dominio}/${ApiCategorias}`;

const Categ = () => {
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

  return (
    <Box component={Link} to="/Catalogo"
      sx={{
        position: 'relative',
        display: 'block',
        height:isMobile?'55vh': '117vh',
        textDecoration: 'none'
      }}>

      <Container sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: isMobile ? '20vh' : '15vh',
        width: '100%',
        mt: 2, textDecoration: 'none'
      }}>

        <CardActionArea sx={{
          gridColumn: '1 / span 2',
          background: 'black',
          position: 'relative',
          height: isMobile ? '30vh' : '50vh',
          textDecoration: 'none'
        }}>
          <CardMedia
            component="img"
            image={imagen}
            alt="casco"
            sx={{
              width: isMobile ? '100%' : '100%',
              height: isMobile ? '35vh' : '100%',
              objectFit: 'cover',
              position: 'relative',
              textDecoration: 'none'

            }}
          />
          <Typography
            sx={{
              color: '#ffff',
              fontFamily: '"Rubik", sans-serif',
              position: 'relative',
              textAlign: 'center',
              bottom: 100,
              fontSize: '3rem',
              textDecoration: 'none'
            }}

          >{data[0].name}</Typography>
        </CardActionArea>

        <CardActionArea sx={{
          background: 'blue',
          height: isMobile ? '25vh' : '50vh'
        }}>
          <CardMedia
            component="img"
            image={imagen2}
            alt="casco"
            sx={{
              width: ' 100%',
              height: '100%',
              objectFit: 'cover',
              position: 'relative'
            }}
          />


          <Typography sx={{
            color: '#ffff',
            fontFamily: '"Rubik", sans-serif',
            position: 'relative',
            textAlign: 'center',
            bottom: 100,
            fontSize: '3rem'
          }}>{data[1].name}</Typography>
        </CardActionArea>

        <CardActionArea sx={{ background: 'green', height: isMobile ? '25vh' : '50vh' }}>
          <CardMedia
            component="img"
            image={imagen3}
            alt="casco"
            sx={{
              width: ' 100%',
              height: '100%',
              objectFit: 'cover',
              position: 'relative'
            }}
          />

          <Typography
            sx={{
              color: '#ffff',
              fontFamily: '"Rubik", sans-serif',
              position: 'relative',
              textAlign: 'center',
              bottom: 100,
              fontSize: '3rem'

            }}
          >{data[2].name}</Typography>
        </CardActionArea>
      </Container>
    </Box>
  );
};

export default Categ;