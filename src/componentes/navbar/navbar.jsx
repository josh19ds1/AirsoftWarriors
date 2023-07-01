import { Link } from 'react-router-dom'
import React from 'react'
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
  Tooltip
  
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import StoreIcon from '@mui/icons-material/Store'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SubMenu from './SubMenuNavBar/SubMenu'
import EmpName from './SubMenuNavBar/EmpName'
import CarritoNav from './SubMenuNavBar/CarritoNav'
import { useSelector } from 'react-redux'

const settings = ['Perfil', 'Carrito', 'Cerrar Sesion']


function NavBar() {

  const [anchorElUser, setAnchorElUser] = React.useState(null)
 
  const userExist =  useSelector(state=>state.user.userExist);

 


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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
            {/* //Primer menu */}
            <SubMenu />
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
            <EmpName />
          </Box>



          {/* segundo menu donde mostrara el avatar en caso de no estar iniciado */}
          <Box sx={{ flexGrow: 0 }}>
            {/* se evalua se existe el usuario  */}
        
            {userExist ? (
            <>
               <CarritoNav/>
              
              <Tooltip title="Configuración">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <ArrowDropDownIcon />
                </IconButton>
              </Tooltip>
             
              </>
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
