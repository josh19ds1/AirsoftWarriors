import React from 'react'
import { useState, useEffect } from 'react'
import "../../estilos/Perfil.css"
import prueba from "../../Imagenes/portada.png"
import { Dominio, ApiPerfil } from '../Tools/var'

const Perfil = () => {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/profile');
        if (!response.ok) {
          throw new Error('No se pudo obtener el perfil');
        }
        const perfilData = await response.json();
        setPerfil([perfilData]);
      } catch (error) {
        console.log('Error al obtener el perfil:', error);
      }
    };

    fetchData();

    fetch(`${Dominio}/${ApiPerfil}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">
            {/**esto es par arreglar el diseño el img luego lo borro */}
            <img src={prueba} alt="" />
            {perfil?.map((profile) => (
              <div key={profile.name}>
                {profile.image && <img src={profile.image} alt="Foto de perfil" />}
              </div>
            ))}
            <div className="square-text">
              {perfil?.map((profile) => (
                <div key={profile.name}>
                  <h1>Nombre: {profile.name}</h1>
                  <h1>Apellido: {profile.lastname}</h1>
                  <h1>Email: {profile.email}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;