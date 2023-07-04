import {useMediaQuery, useTheme,Button, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import fetchData from '../../Service/feetchApi';
import { Link } from 'react-router-dom';
import { Dominio, ApiProducto } from '../../Tools/var';


const apiUrl = `${Dominio}/${ApiProducto}`

const ProdAny = () => {
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

    // Verificar si hay datos antes de mostrar un elemento aleatorio
    const renderRandomProduct = () => {
        if (!data || data.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * data.length);
        const Product = data[randomIndex];

        // Renderizar el elemento aleatorio
        return (
            <Container sx={{
                overflow: 'hidden',
                background: '#252939',
                width: '100%',
                height: isMobile ? '45vh ': '70vh',
                borderRadius: 5,
                position: 'relative',
                left: 5
            }}>


                <Typography variant="h3" component='div' color="text.secondary" sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    height:isMobile? '10vh':'16vh',
                }}>
                    {Product.name}
                </Typography>

                <CardMedia
                    component="img"

                    image={Product.image_url.url}
                    alt={Product.description}

                    sx={{
                        width: isMobile?'34vh':'50vh',
                        height: isMobile?'20vh':'30vh',
                        position: 'relative',
                        left:isMobile?'2vh':'20vh',
                    borderRadius: 5

                    }}
                />



                <Typography variant="h6" component='p' color="text.secondary" sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    textAlign: 'justify',
                    height:isMobile?'5vh':'8vh',
                    fontSize: '1rem',
                    mt: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                 
                }}>
            
                    {Product.description}
                </Typography>

                <Typography variant="h2" component='p' color="text.secondary" sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    textAlign: 'justify',
                    fontSize: '2.5rem',
                    position:'absolute',
                    bottom:isMobile?'5':20,
                  

                }}>
                    Costo: 
                    {Product.price}$
                </Typography>

                <Link to="/catalogo">
                    <Button
                        sx={{
                            position: 'absolute',
                            width:isMobile? '35vh':'30vh',
                            right: isMobile?'4vh':100,
                            bottom: 20,
                            backgroundColor: '#215bf0',
                            color: '#fff',
                            fontFamily: '"Rubik", sans-serif',
                            fontSize:'1rem'
                        }}
                    >
                        VER MAS
                    </Button>
                </Link>



            </Container>
        );
    };

    return (
        <Container>
            {renderRandomProduct()}
        </Container>
    );
}

export default ProdAny;
