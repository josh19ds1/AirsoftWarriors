

import image1 from '../../../Imagenes/BBs.webp'
import image2 from '../../../Imagenes/Equipo.webp'
import image3 from '../../../Imagenes/arms.webp'
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'



const Tags = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Container>
                        <Box sx={{
                            background: '#5E5E3D',
                            position: 'absolute',
                            width: 350,
                            height: 500,
                            top: 1248,
                            left: 55,
                            zIndex: 14
                        }}>
                            <Typography
                             variant='h5' component='div'
                             sx={
                                     {       fontSize:35,
                                             textAlign:'center',
                                             color:'#ffff',
                                             fontFamily:'Rocket'
                                     }


                             }

                            
                            >BBs</Typography>

                        </Box>


                        <CardMedia
                            component="img"
                            image={image1}
                            sx={{
                                position: 'relative',
                                width: 350,
                                height: 500,
                                zIndex: 15
                            }}
                        />
                    </Container>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Container>
                        <Box sx={{
                            background: '#5E5E3D',
                            position: 'absolute',
                            width: 350,
                            height: 500,
                            top: 1248,
                            left: 500,
                            zIndex: 14
                        }}>
                            <Typography variant='h5' component='div'
                                sx={
                                        {       fontSize:35,
                                                textAlign:'center',
                                                color:'#ffff',
                                                fontFamily:'Rocket'
                                        }


                                }

                            >Ropa</Typography>

                        </Box>



                        <CardMedia
                            component="img"
                            image={image2}
                            sx={{
                                position: 'relative',
                                width: 350,
                                height: 500,
                                zIndex: 15
                            }}
                        />
                    </Container>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Container>
                        <Box sx={{
                            background: '#5E5E3D',
                            position: 'absolute',
                            width: 350,
                            height: 500,
                            top: 1248,
                            right: 76,
                            zIndex: 14
                        }}>
                            <Typography
                             variant='h5' component='div'
                             sx={
                                     {       fontSize:35,
                                             textAlign:'center',
                                             color:'#ffff',
                                             fontFamily:'Rocket'
                                     }


                             }

                            
                            >Arma</Typography>

                        </Box>
                        <CardMedia
                            component="img"
                            image={image3}
                            sx={{
                                position: 'relative',
                                width: 350,
                                height: 500,
                                zIndex: 15
                            }}
                        />
                    </Container>
                </Grid>
            </Grid>


        </>
    )
}

export default Tags