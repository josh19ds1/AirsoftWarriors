import React from "react"
import ReactDom from 'react-dom/client'
import '../styless/Registro.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Registro() {

    return <div className="registro-structure">
        <h1 className="registro-title">Registro</h1>
        <form action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register">
            <h3 className="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="registrar-email" required></input>
            <h3 className="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="registrar-password" required></input>
            <h3 className="input-pasw">Confirmar Contraseña</h3>
            <input type="password" placeholder="Confirmar contraseña" id="confirm-password" required></input><br></br><br></br>
            <hr className="line"></hr>
            <input className="btn-send" type="submit" value="Registrar"></input>
        </form>
        <h4 className="p-register">Ya tieness cuenta? <a className="a-register" href="">Inicia Sesion</a></h4>
    </div>
}

