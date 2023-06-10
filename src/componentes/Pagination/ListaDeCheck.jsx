import React, { useState, Suspense } from 'react';
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { Box } from "@mui/system";
import { fetchData } from '../Service/fetchData'



const apiData = fetchData('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/categories');

const ListaDeCheck = ({
  handleToggleOrden,
  handleToggleDinero,
  handleToggleTipo
}) => {
  const [orden, setOrden] = useState('Normal');
  const [dinero, setDinero] = useState('Normal');
  const [tipo, setTipo] = useState('Normal');

  const data = apiData.read();

  const handleChangeOrden = (event) => {
    setOrden(event.target.value);
    handleToggleOrden('Orden', event.target.value);
  };

  const handleChangeDinero = (event) => {
    setDinero(event.target.value);
    handleToggleDinero('Dinero', event.target.value);
  };

  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
    handleToggleTipo('Tipo', event.target.value);
  };

  return (
    <Box
      sx={{

        borderColor: "peru",
        p: 2,
        bgcolor: "#E67D06",
        color: "#fffff",
        width: 200
      }}
    >
      <FormControl sx={{
        alignItems: 'center'
      }}>
        <FormLabel id="Orden-label">Ordenar por nombre</FormLabel>
        <RadioGroup
          aria-labelledby="orden-label"
          value={orden}
          onChange={handleChangeOrden}
          name="orden-group"
        >
          <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="asc" control={<Radio />} label="A-Z" />
          <FormControlLabel value="desc" control={<Radio />} label="Z-A" />
        </RadioGroup>
        <Divider />
        <FormLabel id="Dinero-label">Ordenar por Dinero</FormLabel>
        <RadioGroup
          aria-labelledby="Dinero-label"
          value={dinero}
          onChange={handleChangeDinero}
          name="orden-group"
        >
          <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="asc" control={<Radio />} label="1-9999" />
          <FormControlLabel value="desc" control={<Radio />} label="9999-1" />
        </RadioGroup>
        <Divider />
        <FormLabel
        id="Tipo-label">Ordenar por Tipo</FormLabel>
        <Suspense fallback={<div>Loading....</div>}>

          <RadioGroup
            aria-labelledby="Tipo-label"
            value={tipo}
            onChange={handleChangeTipo}
            name="orden-group"
            
          >
            <FormControlLabel
              value="Normal" control={<Radio />} label="Normal" />
            {data?.map((category) => (
              <div key={category.id}>
            <FormControlLabel

                value={category.id} control={<Radio />} label={category.name} />
              </div>
            ))}
          </RadioGroup>
        </Suspense>
      </FormControl>
    </Box>
  );
};

export default ListaDeCheck;
