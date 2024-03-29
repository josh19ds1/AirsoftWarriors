import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { Alert, AlertTitle, Box, Button, CardMedia, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { increaseQuantity, decreaseQuantity } from '../../../Store/carrito/carritoSlice';
import EnvioCarrito from './EnvioCarrito';


const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);
  const theme =useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          <Table sx={{ Width:isMobile?'9vh': 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Producto</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center" sx={{p:'2px',m:0}}>Precio Final</TableCell>
                <TableCell align="center" sx={{p:0,m:0}}>Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 ,} }}>
                  <TableCell align="center" sx={{p:isMobile?1:''}}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.id}
                      sx={{
                        width:isMobile?'55px': 215,
                        height:isMobile?'35px':95,
                        margin: 0,
                        marginRight:0,

                      }}
                    />
                    <Typography align="left¿" sx={{
                      marginTop: 2,
                      textAlign:isMobile?'center':'left',
                      color: 'black',fontFamily: '"Rubik", sans-serif',
                      fontSize:isMobile?'0.5rem':''
                    }}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center"
                     sx={{p:isMobile?1:''}}
                  >
                    <Typography
                    sx={{ marginTop: 1,
                      textAlign:'center',
                      color: 'black',fontFamily: '"Rubik", sans-serif',
                      fontSize:isMobile?'0.8rem':'',
                    
                    
                    }}
                    
                    >{product.price}</Typography>
                  </TableCell>
                  <TableCell align="center"  sx={{p:isMobile?1:''}}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'center'
                    }}>
                      <Button sx={{ 
                        
                        minWidth:isMobile?'5px':'', 
                      mr:isMobile?'0' :2,
                     
                     

                    }} onClick={() => handleDecreaseQuant(product.id)}>
                        <RemoveIcon />
                      </Button>
                      <Typography sx={{ 
                        marginTop:isMobile? 1:'' ,
                      textAlign:'center',
                      color: 'black',
                      fontFamily: '"Rubik", sans-serif',
                      fontSize:'0.8rem'
                      
                      }}>{product.quantity}</Typography>
                      <Button sx={{ ml:isMobile?'0': 2 , 
                        minWidth:isMobile?'5px':'', 
                      mr:isMobile?'0' :2, }} onClick={() => handleIncreaseQuant(product.id)}>
                        <AddIcon />
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell  sx={{p:isMobile?1:''}}>
                    <Typography textAlign="left" 
                    sx={{
                    

                      textAlign:'center',
                      color: 'black',
                      fontFamily: '"Rubik", sans-serif',
                      fontSize:isMobile?'0.8rem':'auto',
                      }}>{product.newPrice}</Typography>
                  </TableCell>
                  <TableCell align="left"  sx={{p:isMobile?1:'',minWidth:isMobile?'14px':''}}>
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
              <TableRow>

              <TableCell colSpan={3} align="right">
                  <Typography variant="h6">Pagar ya </Typography>
                </TableCell>
                
                <TableCell align='right'>
                  <EnvioCarrito/>
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
