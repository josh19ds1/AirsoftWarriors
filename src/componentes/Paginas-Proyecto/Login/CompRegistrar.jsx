import React from 'react'
import { Link } from 'react-router-dom'
import '../../../estilos/Registro.css'



const CompRegistrar = () => {
  return (

    <div className='contenedor'>
      
    <div class="registro-structure">
    <h1 class="registro-title">Registro</h1>
    <form action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register">
        <h3 class="input-email">Email</h3>
        <input type="email" placeholder="Introduce tu correo" id="registrar-email" required></input>
        <h3 class="input-pasw">Contraseña</h3>
        <input type="password" placeholder="Introduce tu contraseña" id="registrar-password" required></input>
        <h3 class="input-pasw">Confirmar Contraseña</h3>
        <input type="password" placeholder="Confirmar contraseña" id="confirm-password" required></input><br></br><br></br>
        <hr class="line"></hr>
        <input class="btn-send" type="submit" value="Registrar"></input>
    </form>
    <h4 class="p-register">Ya tieness cuenta? 
    <Link to="/Login" className="a-register" >Logearse</Link> </h4>
</div>




    </div>
  )
}

export default CompRegistrar