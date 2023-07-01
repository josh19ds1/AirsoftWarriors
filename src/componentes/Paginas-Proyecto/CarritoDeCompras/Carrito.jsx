import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { Alert, AlertTitle, Box, Button, CardMedia, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { increaseQuantity, decreaseQuantity } from '../../../Store/carrito/carritoSlice';


const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
    // Habilitar el botón después de eliminar un producto
  };

  const handleIncreaseQuant = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuant = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(product => {
      totalPrice += product.newPrice;
    });
    return totalPrice;
  };

  return (
    <Container>

      {cart.length === 0 ? (
        <Alert severity="info" 
       >
          <AlertTitle>Informacion</AlertTitle>
          No cuenta con productos para mostrar — <strong>¡¡AGREGA PRODUCTOS PARA VISUALIZAR!!</strong>
        </Alert>
      ) : (
        <TableContainer component={Paper}>
          <Typography variant='h5' textAlign={'center'} >ARTICULOS EN EL CARRITO</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Producto</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Precio Final</TableCell>
                <TableCell align="right">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.id}
                      sx={{
                        width: 215,
                        height: 95,
                        margin: 0,
                        marginRight: 5
                      }}
                    />
                    <Typography align="left" sx={{
                      marginTop: 2,
                      position: 'relative',
                      bottom: '76px',
                      left: '236px',
                    }}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{product.price}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'center'
                    }}>
                      <Button sx={{ mr: 2 }} onClick={() => handleDecreaseQuant(product.id)}>
                        <RemoveIcon />
                      </Button>
                      <Typography sx={{ margin: 0 }}>{product.quantity}</Typography>
                      <Button sx={{ ml: 2 }} onClick={() => handleIncreaseQuant(product.id)}>
                        <AddIcon />
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography textAlign="center">{product.newPrice}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleRemoveFromCart(product.id)}>
                      <CloseIcon />
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <Typography variant="h6">Total:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" textAlign="right">
                    {calculateTotalPrice()}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Carrito;
