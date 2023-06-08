
import { Link } from 'react-router-dom'

import React from 'react'
import '../../estilos/navbar.css'







function NavBar() {
  return (
    //barra de navegacion - contenedor
    <div className="nav">
      {/*aqui vendria la navegacion*/}
      <header className="headerNav">
        <nav className="nav">
          <ul className="nav_items">

            <li><Link to="/" className="nav_link">Inicio</Link></li>
            <li><Link to="/Evento" className="nav_link">Eventos</Link></li>
            <li><Link to="/Catalogo" className="nav_link">Productos</Link></li>
            <li><Link to="/Tutores" className="nav_link">Tutorias</Link></li>
            <li><Link to="/Ranking" className="nav_link">Ranking</Link></li>
            <li><Link to="/Login" className="nav_link">Login</Link></li>

          </ul>
        </nav>
      </header>



    </div>

  )
}

export default NavBar