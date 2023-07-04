import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

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
import '../../estilos/font.css';
import { Dominio,ApiPerfil } from '../Tools/var'
import fetchData from '../Service/feetchApi'


const apiUrl=`${Dominio}/${ApiPerfil}`



const settings = ['Perfil', 'Carrito', 'Cerrar Sesion']


function NavBar() {
 
const [anchorElUser, setAnchorElUser] = React.useState(null)
 const [data,setData] = useState({});

const userExist =  useSelector(state=>state.user.userExist);
 useEffect(() => {
  if (userExist) {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiUrl);
      setData(responseData);
    };
  
    fetchDataFromApi();
  }
}, [userExist]);


//const userExist = true;
  console.log(userExist);
  console.log(data)

 

 


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    //contenedor del navBar
    <AppBar position="static" sx={{ backgroundColor: '#215bf0' }}>
     
      <Container maxWidth="xl">
        {/* Primer menu */}
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 2,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'initial',
              fontFamily: '"Rubik", sans-serif',
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
              fontFamily: '"Rubik", sans-serif',
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
                {/* Verificar si hay datos de usuario disponibles */}
                {data && data.name && (
                  <Tooltip title={data.name}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar 
                        alt={data.name} 
                        src={data.image_url.url}
                      />
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </>
            ) : (
              <Button component={Link} to="/login" sx={{ color: 'white', fontFamily: '"Rubik", sans-serif', }}>
                Iniciar sesión
              </Button>
            )}

            {/* Aqui se desplegara las navegaciones del usuario conectado */}
            <Menu

              PaperProps={{
                sx: {
                  padding: 0,
                  background: '#215bf0',
                  color: '#ffff',
                  fontFamily: '"Rubik", sans-serif',
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
