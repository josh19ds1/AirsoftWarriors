import React from 'react'
import Carusel from "../Tools/Carousel";
import  Button from '@mui/material/Button';

const url = 'https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/events'


const Inicio = () => {
  

  return (
    <>

        <Carusel apiUrl={url}  />
         
    </>    



  )
}

export default Inicio