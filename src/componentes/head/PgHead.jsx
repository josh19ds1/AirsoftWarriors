import React from 'react'
import logo from '../../Imagenes/logoSinLet.webp'

import { CardMedia } from '@mui/material'

function PgHead() {
    return (
        <header className='Cabeza'>

                <CardMedia component="img" image={logo} alt="Airsoft warriors" sx={ {display: { xs:'block', md: 'block',lg:'block'} ,alignItems:'center'}} />
                <h1>AIRSOFT WARRIORS</h1>
               
               
        </header>
       

    )
}

export default PgHead