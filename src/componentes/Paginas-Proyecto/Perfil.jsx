import React from 'react'
import { useState} from 'react'
import "../../estilos/Perfil.css"
import "../../Imagenes/portada.png"


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
    fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/profile', {
      method: 'POST',
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
        <div className="square-text">
          <h1>Isabella Gonzales</h1>

          <h3>29 años</h3>

          <h3>Genero: Femenino</h3>
          <h3>Nacionalidad: Panameña</h3>
          <h3>Direccion: Calle Principla 123</h3>
          <h3>Ciudad de Panama, Panama</h3>

          <h3>Telefono: +507 7182-9364</h3>

          <h3>emma.jones@example.com</h3>
        </div>
      </div>


      <h1 className="title-teams">los tigres del sur</h1>
      <div className="teams-perfil">
        <div className="logo-teams">
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
        <div className="teams-members">
          <h1 className="title-member">Miembros</h1>
        </div>
      </div>
    </div>
  )
}

export default Perfil