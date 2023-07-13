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
    <div className='contenedor'>
      <div className="registro-structure">
        <h1 className="registro-title">Registro</h1>
        {isAccountCreated ? (
          <p className='success-message'>¡Cuenta creada exitosamente!</p>
        ) : (
          <form id="register-form" onSubmit={handleRegisterFormSubmit}>
            <label htmlFor="name" className="label-name-r">Nombre</label><br></br>
            <input className='input-name-r' type="text" id="name" name="name" placeholder="Introduce tu nombre" required></input>
            <label htmlFor="lastname" className="label-lastname-r">Apellido</label><br></br>
            <input className='input-lastname-r' type="text" id="lastname" name="lastname" placeholder="Introduce tu apellido" required></input>
            <label htmlFor="image" className="label-photo-r">Imagen de pérfil (Opcional)</label><br></br>
            <input className='input-photo-r' type="file" id="image" name="image"></input>
            {/*<label htmlFor="age" className="label-edad">Edad</label>
            <input className='input-edad' type="text" id="age" name="age" placeholder="Introduce tu edad" required></input>*/}
            <label htmlFor="email" className="label-email-r">Email</label>
            <input className='input-email-r' type="email" placeholder="Introduce tu correo" id="email" name='email' required></input>
            <label htmlFor="password" className="label-pasw-r">Contraseña</label>
            <input className='input-pasw-r' type="password" placeholder="Introduce tu contraseña" id="password" name='password' required></input>
            <label htmlFor="cpassword" className="label-pasw-r">Confirmar Contraseña</label>
            <input className='input-pasw-r' type="password" placeholder="Confirmar contraseña" id="cpassword" name='cpassword' required></input><br></br><br></br>
            <hr className="line-register"></hr>
            <input className="btn-send-register" type="submit" id='submit' value="Registrar"></input>
          </form>
        )}
        <h4 className="p-register">Ya tienes cuenta?
          <Link to="/Login" className="a-register" > Logearse</Link> </h4>
      </div>
    

</div>
  );
}

export default CompRegistrar