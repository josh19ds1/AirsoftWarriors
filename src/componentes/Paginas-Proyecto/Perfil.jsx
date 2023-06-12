import React from 'react'
import "../../estilos/Perfil.css"

const Perfil = () => {
  return (
    <div class="perfil-body">
      <div class="square-perfil">
        <div class="square-photo">
          <img src="../img/foto.png" alt=""></img>
        </div>
        <div class="square-text">
          <h1>Isabella Gonzales</h1>

          <h3>29 años</h3>

          <h3>Genero: Femenino</h3>
          <h3>Nacionalidad: Panameña</h3>
          <h3>Direccion: Calle Principla 123</h3>
          <h3>Ciudad de Panama, Panama</h3>

          <h3>Telefono: +507 7182-9364</h3>

          <h3>emma.jones@example.com</h3>
        </div>
      </div>


      <h1 class="title-teams">los tigres del sur</h1>
      <div class="teams-perfil">
        <div class="logo-teams">
          <img src="../img/logos.png" alt=""></img>
        </div>
        <div class="teams-members">
          <h1 class="title-member">Miembros</h1>
        </div>
      </div>
    </div>
  )
}

export default Perfil