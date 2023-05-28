import React from "react"
import ReactDom from 'react-dom/client'
import '../styless/Registro.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Registro() {

    return <div class="registro-structure">
        <h1 class="registro-title">Registro</h1>
        <form action="#">
            <h3 class="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="registrar-email" required></input>
            <h3 class="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="registrar-password" required></input>
            <h3 class="input-pasw">Confirmar Contraseña</h3>
            <input type="password" placeholder="Confirmar contraseña" id="confirm-password" required></input><br></br><br></br>
            <hr class="line"></hr>
            <input class="btn-send" type="submit" value="Registrar"></input>
        </form>
        <h4 class="p-register">Ya tieness cuenta? <a class="a-register" href="">Inicia Sesion</a></h4>
    </div>
}