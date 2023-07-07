import { useMediaQuery, useTheme, Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Toolbar, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fetchData from '../Service/feetchApi';
import { Dominio, ApiCategorias } from '../Tools/var';
import { useDispatch, useSelector } from 'react-redux';
import { setOrden, setDinero, setTipo } from '../../Store/checks/Checks'


const apiData = `${Dominio}/${ApiCategorias} `;

const OrdenaMiento = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { orden, dinero, tipo } = useSelector((state) => state.listaDeCheck);

  useEffect(() => {
    setOrden('');
    setDinero('');
    setTipo('all'); // Establecer el valor inicial para el tipo (en este caso, "all")

    const fetchDataFromApi = async () => {

      try {
        const responseData = await fetchData(apiData);
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);


  const handleChangeOrden = (event) => {
    const value = event.target.value;
    dispatch(setOrden(value));
  };

  const handleChangeDinero = (event) => {
    const value = event.target.value;
    dispatch(setDinero(value));
  };

  const handleChangeTipo = (event) => {
    const value = event.target.value;
    dispatch(setTipo(value));
  };



  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <AppBar position="static" sx={{ background: '#0A1D4D', m: 0, p: 1 }}>
          <Toolbar sx={{ p: 0, display: 'flex',justifyContent:'space-around', alignItems: 'baseline' }}>
            <Accordion sx={{ m: 0, background: '#2057E7' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ alignItems: 'center' }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                  }}
                >
                  Ordenar Por Nombre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="orden-label"
                  value={orden}
                  onChange={handleChangeOrden}
                  name="orden-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="Normal" />
                  <FormControlLabel value="1" control={<Radio />} label="A-Z" />
                  <FormControlLabel value="0" control={<Radio />} label="Z-A" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ m: 0, background: '#2057E7', }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ alignItems: 'center' }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                  }}
                >
                  Ordenar Por Precio
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="Dinero-label"
                  value={dinero}
                  onChange={handleChangeDinero}
                  name="orden-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="Normal"  sx={{ color: '#ffff',fontFamily: '"Rubik", sans-serif',}}/>
                  <FormControlLabel value="1" control={<Radio />} label="1-9999" />
                  <FormControlLabel value="0" control={<Radio />} label="9999-1" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ m: 0, background: '#2057E7' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ alignItems: 'center', m: 0, }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                  }}
                >
                  Ordenar Por Tipo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup
                  aria-labelledby="Tipo-label"
                  value={tipo}
                  onChange={handleChangeTipo}
                  name="orden-group"
                >
                  <FormControlLabel value="all" control={<Radio />} label="Normal" />
                  {data?.map((category) => (
                    <FormControlLabel
                      key={category.id}
                      value={category.id}
                      control={<Radio />}
                      label={category.name}
                    />
                  ))}
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default OrdenaMiento;