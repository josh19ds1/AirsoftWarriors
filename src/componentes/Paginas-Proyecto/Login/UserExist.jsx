import React, { useEffect, useState } from 'react';
import { Dominio, ApiUserExist } from '../../Tools/var';
import fetchData from '../../Service/feetchApi';

const apiUrl = `${Dominio}/${ApiUserExist}`;

const UserExist = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiUrl, { credentials: 'include' });
     
      setData(responseData);
    };

    fetchDataFromApi();
  }, []);

  console.log(data);

  if (data && typeof data.isSuccess === 'boolean') {

    console.log("variable que busco q cambie="+data.isSuccess)
    if (data.isSuccess===true) {
      return <h1>Existe</h1>;
    } else {
      return <h1>No existe</h1>;
    }
  } else {
    return null; // Otra opción es mostrar un mensaje de carga mientras se obtiene la respuesta
  }
};

export default UserExist;
