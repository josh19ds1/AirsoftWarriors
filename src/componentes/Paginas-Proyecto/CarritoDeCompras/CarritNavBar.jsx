import { Button, CardMedia, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CarritNavBar = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // Borrar producto
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <>
      {cart.map((product) => (
        <MenuItem key={product.id}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'black',fontFamily: '"Rubik", sans-serif'}}>Producto</TableCell>
                  <TableCell sx={{ color: 'black',fontFamily: '"Rubik", sans-serif'}}>Precio</TableCell>
                  <TableCell sx={{ color: 'black',fontFamily: '"Rubik", sans-serif'}}>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
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
                  <TableCell align='right'>
                    <Typography sx={{ color: 'black',fontFamily: '"Rubik", sans-serif'}}>{product.price}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Button onClick={() => handleRemoveFromCart(product.id)}>
                      <CloseIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </MenuItem>
      ))}
      <MenuItem>
        <Button component={Link} to="/carrito">
          Ver todos
        </Button>
      </MenuItem>
    </>
  );
}

export default CarritNavBar;
