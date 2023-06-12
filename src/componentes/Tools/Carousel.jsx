import { CardMedia, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fetchData from '../Service/feetchApi';

const Carusel = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData(apiUrl);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, [apiUrl]);

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} >
          <Paper >

            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop

            >
              {data?.map((evento) => (
                <div key={evento.id}>
                  <CardMedia component="img"
                   src={evento.place.image_url.url}
                   sx={{height:400
                   
                   
                   
                   }} />
                </div>
              ))}
            </Carousel>






          </Paper>
        </Grid>
      </Grid>

    </>
  );
};

export default Carusel;
