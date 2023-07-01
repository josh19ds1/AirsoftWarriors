import React, { useState } from 'react';
import { Badge, Typography, IconButton, Menu, MenuItem, Tooltip, } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector} from 'react-redux';
import CarritoNavBar from '../../Paginas-Proyecto/CarritoDeCompras/CarritNavBar';

const CarritoNav = () => {
  const cartCounter = useSelector((state) => state.cart.counter);

  const cart = useSelector((state) => state.cart.products);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
            <CarritoNavBar/>
        )}
      </Menu>
    </>
  );
};

export default CarritoNav;
