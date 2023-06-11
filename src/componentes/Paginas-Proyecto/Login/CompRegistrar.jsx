import React from 'react'
import { Link } from 'react-router-dom'
import '../../../estilos/Registro.css'



const CompRegistrar = () => {
    //Esta parte la copie del login y le acople para el registro, nose si sea igual
    const handleRegistrarFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      console.log(data);
      //Esta parte la copie del login y le acople para el registro, nose si sea igual
      fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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

    <div className='contenedor'>

      <div class="registro-structure">
        <h1 class="registro-title">Registro</h1>
        <form onSubmit={handleRegistrarFormSubmit} action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register">
          <h3 class="input-name">Nombre</h3>
          <input type="text" id="name" name="name" placeholder="Introduce tu nombre" required></input>
          <h3 class="input-photo">Imagen de pérfil (Opcional)</h3>
          <input type="file" id="image" name="image"></input>
          <h3 class="input-edad">Edad</h3>
          <input type="text" id="age" name="age" placeholder="Introduce tu edad" required></input>
          <h3 class="input-email">Email</h3>
          <input type="email" placeholder="Introduce tu correo" id="registrar-email" required></input>
          <h3 class="input-pasw">Contraseña</h3>
          <input type="password" placeholder="Introduce tu contraseña" id="registrar-password" required></input>
          <h3 class="input-pasw">Confirmar Contraseña</h3>
          <input type="password" placeholder="Confirmar contraseña" id="confirm-password" required></input><br></br><br></br>
          <hr class="line"></hr>
          <input class="btn-send" type="submit" value="Registrar"></input>
        </form>
        <h4 class="p-register">Ya tienes cuenta?
          <Link to="/Login" className="a-register" > Logearse</Link> </h4>
      </div>




    </div>
  )
}

export default CompRegistrar