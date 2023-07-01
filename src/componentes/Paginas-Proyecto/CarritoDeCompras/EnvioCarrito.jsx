import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { Dominio, ApiCreateOrder } from '../../Tools/var';
import { useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EnvioCarrito = () => {
  const [open, setOpen] = useState(false);
  const carrito = useSelector((state) => state.cart.products); // Obtén todo el carrito desde el estado de Redux

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);

    try {
      const order = carrito.map((producto) => ({
        id: producto.id,
        quantity: producto.quantity
      }));

      const response = await fetch(`${Dominio}/${ApiCreateOrder}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ order }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      // Redirigir a la URL proporcionada en responseData
      if (responseData && responseData.url) {
        window.location.href = responseData.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button align="right" onClick={handleClickOpen}>
        Pagar
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"DESEA EFECTUAR SU COMPRA"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Podrá cancelar su compra si tiene algún cambio
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EnvioCarrito;
