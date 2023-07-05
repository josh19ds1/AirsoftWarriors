import React from 'react'
import ListaDeCheck from '../Pagination/ListaDeCheck'
import Productos from '../Pagination/Productos'
import { Container } from '@mui/material'


const Catalogo = () => {

  





  return (

    <div style={{
      display:'flex',
    
      }}>
    <ListaDeCheck    />

      <Container  sx={{
        position:'relative',
        top:0,
        marginTop: 5
    }}>

      
        <Productos
       
        />

   

      </Container>





    </div>









  )
}


export default Catalogo