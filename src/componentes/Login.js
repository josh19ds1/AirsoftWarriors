import React from 'react'
import ReactDom from 'react-dom/client'
import '../estilos/Login.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Login() {
    return <div className="login-structure">
        <h1 className="login-title">Login</h1>
        <button className="btn-login-google"><a ref="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email" className="login-google">Iniciar sesión con Google</a></button>
        <hr className="line"></hr>
        <form action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/login">
            <h3 className="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="email" required></input>
            <h3 className="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="password" required></input><br></br><br></br>
            <input className="btn-send" type="submit" value="LOGIN"></input>
        </form>
        <h4 className="p-register">No tieness cuenta? <a className="a-register" href="">Registrate</a></h4>
    </div>
}
