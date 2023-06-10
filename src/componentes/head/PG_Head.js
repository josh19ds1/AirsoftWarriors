import React from 'react'
import logo from '../../Imagenes/logoSinLet.webp'
import NavBar from '../navbar/navbar'
import '../../estilos/navbar.css'
import { CardMedia } from '@mui/material'

function PG_Head() {
    return (
        <header className='Cabeza'>

                <CardMedia component="img" image={logo} alt="Airsoft warriors" sx={ {display: { xs:'block', md: 'block',lg:'block'} ,alignItems:'center'}} />
                <h1>AIRSOFT WARRIORS</h1>
               
               
        </header>
       

    )
}

export default PG_Head