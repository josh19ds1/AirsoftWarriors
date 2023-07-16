import React from 'react'
import { useState, useEffect } from 'react'
import "../../estilos/Perfil.css"
import { Dominio, ApiPerfil } from '../Tools/var'
import { Image } from '@mui/icons-material'
import { Alert } from '@mui/material'


const apiUrl = `${Dominio}/${ApiPerfil}`
const Perfil = () => {
  const [data, setData] = useState([]);

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
          console.log('data-url=' + responseData.url);
          window.location.href = responseData.url;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }
  );

  return (
    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">
            {/* Esto es para arreglar el diseño, luego se puede eliminar */}
            {data ? (
              <div>
                <Image src={data.image_url.url} alt={data.image_url.id} />
                <div className="square-text">
                  <h1>Nombre: {data.name}</h1>
                  <h1>Apellido: {data.lastname}</h1>
                  <h1>Email: {data.email}</h1>
                </div>
              </div>
            ) : (
              <Alert>No hay datos disponibles</Alert>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Perfil;