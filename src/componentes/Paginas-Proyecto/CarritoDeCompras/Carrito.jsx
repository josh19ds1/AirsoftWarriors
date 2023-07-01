import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { Box, Button, CardMedia, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
    // Habilitar el botón después de eliminar un producto
  };

  return (
    <Container>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Producto</TableCell>
                <TableCell align='center'>Precio</TableCell>
                <TableCell align='center'>Cantidad</TableCell>
                <TableCell align='center'>Precio Final</TableCell>
                <TableCell align='right'>Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align='right' >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.id}
                      sx={{
                        width: 215,
                        height: 95,
                        margin: 0,
                        marginRight:5
                      }}
                    />
                    <Typography align='left' sx={{
                      marginTop: 2,
                      position: 'relative',
                      bottom: '76px',
                      left: '236px',


                    }}>{product.name}</Typography>
                  </TableCell>
                  <TableCell align='center'><Typography>{product.price}</Typography></TableCell>
                 
                  {/* agregar botones de mas y menos */}
                  <TableCell align='center'>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignContent:'center',
                        justifyContent:'center'
                    }}>

                    <Button>
                      <RemoveIcon />
                    </Button>
                    <Typography textAlign={'center'}>1</Typography>
                    <Button >
                      <AddIcon />
                    </Button>


                    </Box>


                  </TableCell>
                  <TableCell align='center'><Typography>{product.price}</Typography></TableCell>
                  <TableCell align='right'>
                    <Button onClick={() => handleRemoveFromCart(product.id)}>
                      <CloseIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      )}
    </Container>
  );
};

export default Carrito;
