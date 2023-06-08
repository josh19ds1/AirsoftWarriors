import { Button, Card, CardContent, Container, makeStyles } from '@mui/material';
import { red } from '@mui/material/colors';

import React from 'react';





const Login = () => {


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
  };

  return (
    <Container  sx={{ color: '#ffffff' } }>
      <Card >
        <CardContent>
          <div >
            <Button
              href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"
              
              variant="contained"
              startIcon={<i className="fab fa-google left"></i>}
            >
              Log In With Google
            </Button>
          </div>
        </CardContent>
      </Card>

      <form id="login-form" onSubmit={handleLoginFormSubmit}>
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" id="submit" value="Enviar" />
      </form>
      <br /><br />
      <form id="register-form" onSubmit={handleRegisterFormSubmit}>
        <br /><br />
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" /><br /><br />
        <label htmlFor="image">Imagen de perfil (Opcional)</label>
        <input type="file" id="image" name="image" /><br /><br />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" /><br /><br />
        <label htmlFor="cpassword">Confirmar contraseña</label>
        <input type="password" id="cpassword" name="cpassword" /><br /><br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label htmlFor="age">Edad</label>
        <input type="text" id="age" name="age" /><br /><br />
        <input type="submit" id="submit" value="Enviar" />
      </form>
      <br /><br />
    </Container>
  );
};

export default Login;