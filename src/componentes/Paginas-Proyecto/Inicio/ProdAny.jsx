import { Button, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import fetchData from '../../Service/feetchApi';
import { Link } from 'react-router-dom';



const apiUrl = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products'

const ProdAny = () => {
    const [data, setData] = useState(null);

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
                background: '#ffff',
                width: 1201,
                height: 600,
                borderRadius: 5,
                position: 'relative',
                right: 50
            }}>


                <Typography variant="h3" component='div' color="text.secondary" sx={{
                    m: (0, 2, 0, 2), whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'start',


                }}>
                    {Product.name}
                </Typography>

                <CardMedia
                    component="img"

                    image={Product.image_url.url}
                    alt={Product.description}

                    sx={{
                        width: 500,
                        height: 400,
                        position: 'relative',
                        left: 1,
                        borderRadius: 5

                    }}
                />

                <Typography variant="h4" component='p' color="text.secondary"
                    sx={{
                        position: 'absolute',
                        right: 290,
                        top: 95



                    }}


                >Descripción</Typography>

                <Typography variant="h6" component='p' color="text.secondary" sx={{
                    m: (0, 2, 0, 2), whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    position: 'absolute',
                    fontSize: 17,
                    left: 600,
                    top: 150,
                    textAlign: 'center'


                }}>
                    {Product.description}
                </Typography>

                <Typography variant="h2" component='p' color="text.secondary" sx={{
                    m: (0, 2, 0, 2), whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    position: 'absolute',
                    right: 280,
                    bottom: 250



                }}>
                    {Product.price}$
                </Typography>

                <Link to="/catalogo">
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            width: 150,
                            height: 50,
                            right: 270,
                            bottom: 100,
                            background: '#2F1E2F',
                        }}
                    >
                        VER MAS
                    </Button>
                </Link>

                {/* Agrega aquí cualquier otra información que desees mostrar */}
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
