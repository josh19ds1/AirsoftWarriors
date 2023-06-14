import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../estilos/Registro.css'



const CompRegistrar = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success);
        console.log(success.isSuccess);
        console.log(success.message);
      })
      .catch((error) => console.log(error));
    setIsAccountCreated(true);
  };



  return (
    <div class='contenedor'>
      <div class="registro-structure">
        <h1 class="registro-title">Registro</h1>
        {isAccountCreated ? (
          <p className='success-message'>¡Cuenta creada exitosamente!</p>
        ) : (
          <form id="register-form" onSubmit={handleRegisterFormSubmit}>
            <label htmlFor="name" class="input-name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Introduce tu nombre" required></input>
            <label htmlFor="image" class="input-photo">Imagen de pérfil (Opcional)</label>
            <input type="file" id="image" name="image"></input>
            <label htmlFor="age" class="input-edad">Edad</label>
            <input type="text" id="age" name="age" placeholder="Introduce tu edad" required></input>
            <label htmlFor="email" class="input-email">Email</label>
            <input type="email" placeholder="Introduce tu correo" id="email" name='email' required></input>
            <label htmlFor="password" class="input-pasw">Contraseña</label>
            <input type="password" placeholder="Introduce tu contraseña" id="password" name='password' required></input>
            <label htmlFor="cpassword" class="input-pasw">Confirmar Contraseña</label>
            <input type="password" placeholder="Confirmar contraseña" id="cpassword" name='cpassword' required></input><br></br><br></br>
            <hr class="line"></hr>
            <input class="btn-send" type="submit" id='submit' value="Registrar"></input>
          </form>
        )}
        <h4 class="p-register">Ya tienes cuenta?
          <Link to="/Login" className="a-register" > Logearse</Link> </h4>
      </div>
    

</div>
  );
}

export default CompRegistrar