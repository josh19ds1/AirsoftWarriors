import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../../estilos/navbar.css'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  Menu,
  Tooltip,
  Badge
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import StoreIcon from '@mui/icons-material/Store'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { obtenerValorTrue } from './ExistKK'
import { useSelector} from 'react-redux';


const pages = ['Evento', 'Catalogo', 'Tutores', 'Ranking']
const settings = ['Perfil', 'Carrito', 'Cerrar Sesion']
pages.unshift("")

function NavBar({ userExists }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)


  const count = useSelector(state => state.cartCount.contador);


  const [valor, setValor] = useState(null);

  // Llamada a la función y actualización del estado con el valor devuelto
  useState(() => {
    const resultado = obtenerValorTrue();
    setValor(resultado);
  }, []);

  console.log('el valor de la funcion: ' + valor);





  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  if (userExists === true) {
    console.log('existe en el navBar')
    console.log('usuario existe en navBar: ' + userExists)
  } else if (userExists === false) {
    console.log('no existe en el navBar')
  }

  return (
    //contenedor del navBar
    <AppBar position="static" sx={{ backgroundColor: '#12644c' }}>
      <Container maxWidth="xl">
        {/* Primer menu */}
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 2,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'initial',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                justifyContent: 'center',
                color: 'inherit',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: '#ffff',
              }}
              PaperProps={{
                sx: {
                  padding: 0,
                  background: '#12644c',
                  color: '#ffff',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography sx={{ width: 75, textAlign: 'center' }}>
                      {page || 'Inicio'}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Primer menu del mobile*/}

          {/* aqui se mostrara el nombre del negocio*/}
          <StoreIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: 'block', md: 'none' },
              flexGrow: 2,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Airsoft warrior
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: 'white', display: 'block' }}
              >
                {page || 'Inicio'}
              </Button>
            ))}
          </Box>
          {/* segundo menu donde mostrara el avatar en caso de no estar iniciado */}
          <Box sx={{ flexGrow: 0 }}>
            {/* se evalua se existe el usuario  */}
            <Tooltip title="">
              <Link to="/carrito" style={{ textDecoration: 'none' }}>
                <IconButton sx={{ marginRight: 2 }}>
                  <Badge badgeContent={count} color="error">
                    <ShoppingCartCheckoutIcon sx={{ fontSize: '2.5rem' }} />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>


            {valor ? (

              <Tooltip title="Configuración">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <ArrowDropDownIcon />
                </IconButton>
              </Tooltip>
              //si no manda un boton de iniciar secion
            ) : (
              <Button component={Link} to="/login" sx={{ color: 'white' }}>
                Iniciar sesión
              </Button>
            )}

            {/* Aqui se desplegara las navegaciones del usuario conectado */}
            <Menu

              PaperProps={{
                sx: {
                  padding: 0,
                  background: '#12644c',
                  color: '#ffff',
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ justifyContent: 'center', width: 95 }}

                >
                  <Link
                    to={`/${setting}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography sx={{ width: 75, textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
