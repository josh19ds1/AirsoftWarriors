import React from 'react'
import { useState } from 'react'
import "../../estilos/Perfil.css"
import "../../Imagenes/portada.png"

import { Dominio, ApiPerfil } from '../Tools/var'
import UserExist from './Login/UserExist'


const Perfil = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = (e) => {
    setImageLoaded(true);
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('La imagen se ha cargado');
    fetch(`${Dominio}/${ApiPerfil}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      redirect: 'follow',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch((error) => console.log(error));
  };


  return (

    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">

            {imageLoaded ? (
              <img src="../../" alt="Imagen" />
            ) : (
              <p>Cargando imagen...</p>
            )}
            <img
              src="../../Imagenes/portada.png"
              alt="Imagen"
              onLoad={handleImageLoad}
              style={{ display: 'none' }}
            />

          </div>
          <div class="square-text">
            <h1>Isabella Gonzales</h1>
            <h3>29 años</h3>
            <h3>emma.jones@example.com</h3>
          </div>
        </div>
        <h1 class="title-teams">los tigres del sur</h1>
        <div class="teams-perfil">
          <div class="logo-teams">
            {imageLoaded ? (
              <img src="../../" alt="Imagen" />
            ) : (
              <p>Cargando logo...</p>
            )}
            <img
              src="../../Imagenes/portada.png"
              alt="Imagen"
              onLoad={handleImageLoad}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Perfil

/*import React, { Suspense, useEffect, useState } from 'react';
import fetchData from '../Service/feetchApi';
import { Dominio, ApiPerfil } from '../Tools/var';
import { useDispatch } from 'react-redux'

const getApiData = (nameValue, ageValue, emailValue, imageValue) => {
  let apiData = '';
  apiData = `${Dominio}/${ApiPerfil}&name=${nameValue}&age=${ageValue}&email=${emailValue}&image=${imageValue}`;
  return apiData;
};

const Perfil = ({ nameValue, ageValue, emailValue, imageValue }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiData = getApiData(nameValue, ageValue, emailValue, imageValue);
    const fetchDataFromApi = async () => {
      const responseData = await fetchData(apiData);
      setData(responseData);
    };

    fetchDataFromApi();
  }, [nameValue, ageValue, emailValue, imageValue]);

  return (
    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">
          
          <div className="square-text">
            <h1>Nombre: {nameValue}</h1>
            <h3>Edad: {ageValue} años</h3>
            <h3>Email: {emailValue}</h3>
            <h3>Foto: {imageValue}</h3>
          </div>
        </div>
      
          </div>
        </div>
      </div>
  
  )
}
estoy trabajando aqui con esto
export default Perfil*/
/*import { useState, useEffect } from 'react';
const Perfil = () => {

  const [perfil, setPerfil] = useState([])

  useEffect(() => {
    fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/profile')
      .then((response) => {
        return response.json()
      })
      .then((perfil) => {
        setPerfil(perfil)
      })
  }, [])

  return (
    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">

            <div className="square-text">
              {perfil?.map(profile => {
                return (
                  <div key={profile.name}>
                <h1>Nombre: {profile.name}</h1>
                <h1>Apellido: {profile.lastname}</h1>
                <h1>Email: {profile.email}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil*/
/*import { useState, useEffect } from 'react';
const Perfil = () => {
  const [perfil, setPerfil] = useState([]);
  useEffect(() => {
    fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/profile')
      .then((response) => {
        return response.json();
      })
      .then((perfil) => {
        setPerfil([perfil]);
      });
  }, []);
  return (
    <div>
      <div className="perfil-body">
        <div className="square-perfil">
          <div className="square-photo">
            <div className="square-text">
              {perfil?.map((profile) => {
                return (
                  <div key={profile.name}>
                    <h1>Nombre: {profile.name}</h1>
                    <h1>Apellido: {profile.lastname}</h1>
                    <h1>Email: {profile.email}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;*/