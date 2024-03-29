import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const pages = ['Eventos', 'Catalogo', 'Tutores', 'Ranking'];

const EmpName = () => {
  const handleCloseNavMenu = () => {
    // Handle the menu closure logic
  };

  return (
    <>
      {['Inicio', ...pages].map((page) => (
        <Button
          key={page}
          component={Link}
          to={page === 'Inicio' ? '/' : `/${page}`}
          onClick={handleCloseNavMenu}
          sx={{ my: 3, color: 'white', display: 'block', fontFamily: '"Rubik", sans-serif', }}
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default EmpName;
