import { Button, CardMedia, MenuItem, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CarritNavBar = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

    //borrar producto

    const handleRemoveFromCart = (productId) => {
      dispatch(removeFromCart({ id: productId }));
    };

    
  
  return (
    <>
    {cart.map((product) => (
      <MenuItem key={product.id} >
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell component="th" scope="row">
              <CardMedia
                component="img"
                image={product.image}
                alt={product.id}
                sx={{
                  width: 195,
                  height: 75,
                }}
              />
              <Typography>{product.name}</Typography>
            </TableCell>
            <TableCell align='right'><Typography>{product.price}</Typography></TableCell>   
            <TableCell align='right'>
              <Button
                onClick={() => handleRemoveFromCart(product.id)}
              >
                <CloseIcon />
              </Button>
            </TableCell>
          </TableBody>
        </TableContainer>
      </MenuItem>
    ))}
    <MenuItem>
      <Button
        component={Link}
        to="/carrito"
      >
        Ver todos
      </Button>
    </MenuItem>
    </>
  )
}

export default CarritNavBar