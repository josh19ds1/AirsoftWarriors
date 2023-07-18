import React from 'react';
import '../../../estilos/login.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Dominio, ApiLogin } from '../../Tools/var';


const CompLogin = () => {

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch(`${Dominio}/${ApiLogin}`, {
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


  return <div className="login-structure">
    <h1 className="login-title">Login</h1>
    <Button className="btn-login-google" href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"

      startIcon={<i className="fab fa-google left"></i>}
      sx={{
        textAlign: 'center',
        fontSize: '20px',
        borderRadius: '3px',
        padding: '15px',
        marginLeft: '34.5%',
        color: '#ffff',
        background: '#E67D06'
      }}
    >Iniciar sesión con Google </Button>

    <hr className="line-login"></hr>
    <form id="login-form" onSubmit={handleLoginFormSubmit}>
      <label htmlForm="email" className="label-email-l">Email</label><br></br>
      <input className='input-email-l' type="text" placeholder="Introduce tu correo" id="email" name='email' required></input>

      <label htmlFor="password" className="label-pasw-l">Contraseña</label><br></br>
      <input className='input-pasw-l' type="password" placeholder="Introduce tu contraseña" id="password" name='password' required />
      <br></br><br></br>

      <input className="btn-send-login" type="submit" id='submit' value="LOGIN"></input>
    </form>
    <h4 className="p-register">¿No tienes cuenta?  <Link to="/Registrar" className="a-register" > Regístrate</Link> </h4>
  </div>
}
export default CompLogin;
