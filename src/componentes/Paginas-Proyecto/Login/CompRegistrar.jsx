import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../estilos/Registro.css';

const CompRegistrar = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [age, setAge] = useState(null);
  const [showError, setShowError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

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
        setIsAccountCreated(true);
      })
      .catch((error) => console.log(error));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age >= 18) {
      handleRegisterFormSubmit(e);
    } else {
      setShowError(true);
    }

    if (passwordMatch) {
      console.log('Contraseña y confirmación válidas');
    } else {
      console.log('Contraseña y confirmación no coinciden');
    }
  };

  if (isAccountCreated) {
    return (
      <div className='contenedor'>
        <div className="registro-structure">
          <h1 className="registro-title">Registro</h1>
          <p className='success-message'>¡Cuenta creada exitosamente!</p>
          <center><button className='btn-regrs-log'><Link to="/Login" className='a-regresar'>Regresar a Login</Link></button></center>
          <h4 className="p-register">
            ¿Ya tienes cuenta? <Link to="/Login" className="a-register">Iniciar sesión</Link>
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className='contenedor'>
      <div className="registro-structure">
        <h1 className="registro-title">Registro</h1>
        <form id="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label-name-r">Nombre</label><br />
          <input className='input-name-r' type="text" id="name" name="name" placeholder="Introduce tu nombre" required />

          <label htmlFor="lastname" className="label-lastname-r">Apellido</label><br />
          <input className='input-lastname-r' type="text" id="lastname" name="lastname" placeholder="Introduce tu apellido" required />

          <label htmlFor="image" className="label-photo-r">Imagen de perfil (Opcional)</label><br />
          <input className='input-photo-r' type="file" id="image" name="image" />

          <label htmlFor="age" className="label-edad-r">Edad</label>
          <input className='input-edad-r' type="number" id="age" name="age" placeholder="Introduce tu edad" required value={age} onChange={(e) => setAge(parseInt(e.target.value))} />

          {showError && <p className="error-message-r">Debes tener al menos 18 años para registrarte.</p>}

          <label htmlFor="email" className="label-email-r">Email</label>
          <input className='input-email-r' type="email" placeholder="Introduce tu correo" id="email" name='email' required />

          <label htmlFor="password" className="label-pasw-r">Contraseña</label>
          <input className='input-pasw-r' type="password" placeholder="Introduce tu contraseña" id="password" name='password' required value={password} onChange={handlePasswordChange} />

          <label htmlFor="cpassword" className="label-pasw-r">Confirmar Contraseña</label>
          <input className='input-pasw-r' type="password" placeholder="Confirmar contraseña" id="cpassword" name='cpassword' required value={confirmPassword} onChange={handleConfirmPasswordChange} /><br /><br />

          {!passwordMatch && <p className="error-message-r">Las contraseñas no coinciden</p>}
          <button className="btn-send-register" type="submit" id='submit'>Registrar</button>
        </form>
        <h4 className="p-register">
          ¿Ya tienes cuenta? <Link to="/Login" className="a-register">Iniciar sesión</Link>
        </h4>
      </div>
    </div>
  );
};

export default CompRegistrar;