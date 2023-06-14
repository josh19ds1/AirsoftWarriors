import React from 'react'
import { Link } from 'react-router-dom'
import '../../../estilos/Registro.css'



const CompRegistrar = () => {
  return (

    <div className='contenedor'>
      
    <div className="registro-structure">
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
    <h4 className="p-register">Ya tieness cuenta? 
    <Link to="/Login" classNameName="a-register" >Logearse</Link> </h4>
</div>




    </div>
  )
}

export default CompRegistrar