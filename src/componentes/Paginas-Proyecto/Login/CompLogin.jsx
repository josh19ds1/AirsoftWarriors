import React from 'react';
import '../../../estilos/login.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


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
      credentials:"include",
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

  
  return <div class="login-structure">
        <h1 class="login-title">Login</h1>
        <Button class="btn-login-google"  href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"  
                variant="contained"
                startIcon={<i className="fab fa-google left"></i>}
        >Iniciar sesión con Google </Button>

        <hr class="line"></hr>
        <form id="login-form" onSubmit={handleLoginFormSubmit}>
            <label htmlFor="email" class="input-email">Email</label>
            <input type="text" placeholder="Introduce tu correo" id="email" name='email' required></input>
            
            <label htmlFor="password" class="input-pasw">Contraseña</label>
            <input type="password" placeholder="Introduce tu contraseña" id="password" name='password' required/>
            <br></br><br></br>
            <input class="btn-send" type="submit" id='submit' value="LOGIN"></input>
        </form>
        <h4 className="p-register">¿No tienes cuenta?  <Link to="/Registrar" className="a-register" > Regístrate</Link> </h4>
    </div>
}
export default CompLogin;
