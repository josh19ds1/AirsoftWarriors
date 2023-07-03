import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link } from 'react-router-dom'



const pages = ['Evento', 'Catalogo', 'Tutores', 'Ranking'];
pages.unshift("");

const SubMenu = () => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }




    return (<>

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
                    margin:0,
                    background: '#215bf0',
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                },
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{backgroundColor:'#0A1D4D', fontFamily: '"Rubik", sans-serif',}}>
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






    </>
    )
}

export default SubMenu


