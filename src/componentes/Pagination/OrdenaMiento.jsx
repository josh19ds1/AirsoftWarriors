import { useMediaQuery, useTheme, Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OrdenaMiento = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <AppBar position="static" sx={{ background: '#0A1D4D', m:0 }}>
          <Toolbar sx={{ m: 0, display: 'flex' ,flexDirection:'row'}}>
            <Accordion sx={{ background: '#2057E7',margin:0,padding:0}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ alignItems: 'center' }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    color: '#ffff',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    fontFamily: '"Rubik", sans-serif',
                  }}
                >
                  Ordenar Por Nombre
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: '#0A1D4D' }}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{m: 0, background: '#2057E7', }}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{m: 0, background: '#2057E7' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ alignItems: 'center',m: 0, }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    color: '#ffff',
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: isMobile ?'1rem' : '1.2rem',
                  }}
                >
                  Ordenar Por Tipo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default OrdenaMiento;