import React from 'react'
import ReactDom from 'react-dom/client'
import '../styless/Login.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Login() {
    return <div class="login-structure">
        <h1 class="login-title">Login</h1>
        <button class="btn-login-google">Iniciar sesión con Google</button>
        <hr class="line"></hr>
        <form action="#">
            <h3 class="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="email" required></input>
            <h3 class="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="password" required></input><br></br><br></br>
            <input class="btn-send" type="submit" value="LOGIN"></input>
        </form>
        <h4 class="p-register">No tieness cuenta? <a class="a-register" href="">Registrate</a></h4>
    </div>
}