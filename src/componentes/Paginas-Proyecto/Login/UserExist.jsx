import React, { useEffect, useState } from 'react';
import { Dominio, ApiUserExist } from '../../Tools/var';

const apiUrl = `${Dominio}/${ApiUserExist}`;

const UserExist = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          redirect: 'follow',
        });
  
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
  
        const responseData = await response.json();
        setData(responseData);
  
        if (responseData.url) {
          console.log("data-url=" + responseData.url);
          window.location.href = responseData.url;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, []);

  console.log(data);

  if (data && typeof data.isSuccess === 'boolean') {
    console.log("variable que busco=" + data.isSuccess);
    if (data.isSuccess) {
      return <h1>Existe</h1>;
    } else {
      return <h1>No existe</h1>;
    }
  } else {
    return null; // Otra opción es mostrar un mensaje de carga mientras se obtiene la respuesta
  }
};

export default UserExist;
