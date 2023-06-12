import React from 'react';
import '../../../estilos/login.css'
import { Link } from 'react-router-dom';

const CompLogin = () => {
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
    fetch('https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/login', {
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
      <div className="login-structure">
        <h1 className="login-title">Login</h1>
        <button className="btn-login-google">
          <Link
            to="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"
            className="login-google"
          >
            Iniciar sesión con Google
          </Link>
        </button>
        <hr className="line" />
        <form onSubmit={handleLoginFormSubmit} action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/login">
          <h3 className="input-email">Email</h3>
          <input type="email" placeholder="Introduce tu correo" id="email" required />
          <h3 className="input-pasw">Contraseña</h3>
          <input type="password" placeholder="Introduce tu contraseña" id="password" required /><br /><br />
          <input className="btn-send" type="submit" value="LOGIN" />
        </form>
        <h4 className="p-register">¿No tienes cuenta?  <Link to="/Registrar" className="a-register" >Regístrate</Link> </h4>
      </div>
    </div>
  );
};

export default CompLogin;
