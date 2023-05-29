import React from 'react'
import logo from '../../Imagenes/logoSinLet.png'
import NavBar from '../navbar/navbar'
import '../../estilos/navbar.css'

function PG_Head() {
    return (
        <header className='Cabeza'>

                <img src={logo} alt="Logo De airsoftwarriors" />
                <h1>AIRSOFT WARRIORS</h1>
               
               
        </header>
       

    )
}

export default PG_Head