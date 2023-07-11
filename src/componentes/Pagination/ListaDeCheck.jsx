import React, { useState, useEffect, Suspense } from 'react';

import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { Box } from "@mui/system";
import  fetchData  from '../Service/feetchApi';
import { Dominio,ApiCategorias } from '../Tools/var';
import { useDispatch, useSelector} from 'react-redux';
import {setOrden,setDinero,setTipo} from '../../Store/checks/Checks'


const apiData = `${Dominio}/${ApiCategorias} `;

const ListaDeCheck = () => {
  const [data,setData] = useState(null);
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
          <FormControlLabel value="" control={<Radio />} label="Normal" />
          <FormControlLabel value="1" control={<Radio />} label="A-Z" />
          <FormControlLabel value="0" control={<Radio />} label="Z-A" />
        </RadioGroup>
        <Divider />
        <FormLabel id="Dinero-label">Ordenar por Dinero</FormLabel>
        <RadioGroup
          aria-labelledby="Dinero-label"
          value={dinero}
          onChange={handleChangeDinero}
          name="orden-group"
        >
          <FormControlLabel value="" control={<Radio />} label="Normal" />
          <FormControlLabel value="1" control={<Radio />} label="1-9999" />
          <FormControlLabel value="0" control={<Radio />} label="9999-1" />
        </RadioGroup>
        <Divider />
        <FormLabel id="Tipo-label">Ordenar por Tipo</FormLabel>
        <Suspense fallback={<div>Loading....</div>}>
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
        </Suspense>
      </FormControl>
    </Box>
  );
};

export default ListaDeCheck;
