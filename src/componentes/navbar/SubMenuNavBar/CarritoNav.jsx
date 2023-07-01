import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Typography, IconButton, Menu, MenuItem, Tooltip, Button, TableRow, TableContainer, TableHead, TableCell, Paper, TableBody, CardMedia } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';


const CarritoNav = () => {
  const cartCounter = useSelector((state) => state.cart.counter);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  //borrar producto
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <>
      <Tooltip title="CARRITO">
        <IconButton sx={{ marginRight: 2 }} onClick={handleIconClick}>
          <Badge badgeContent={cartCounter} color="error">
            <ShoppingCartCheckoutIcon sx={{ fontSize: '2.5rem' }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {cart.length === 0 ? (
          <MenuItem onClick={handleCloseMenu}>
            <Typography>vacio</Typography>
          </MenuItem>
        ) : (
          <>
            {cart.map((product) => (
              <MenuItem key={product.id} onClick={handleCloseMenu}>
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
        )}
      </Menu>
    </>
  );
};

export default CarritoNav;
