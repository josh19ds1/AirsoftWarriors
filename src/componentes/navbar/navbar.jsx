
import { Routes, Route, Link } from 'react-router-dom'

import React from 'react'
import '../../estilos/navbar.css'

//aqui traire los elemento de cada pagina
import PaginaPrincipal from '../PaginaPrincipal'
import Evento from '../Paginas-Proyecto/Evento'
import Catalogo from '../Paginas-Proyecto/Catalogo'
import Tutores from '../Paginas-Proyecto/Tutores'
import Ranking from '../Paginas-Proyecto/Ranking'
import Login from '../Paginas-Proyecto/Login'





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

          </ul>
        </nav>
      </header>



    </div>

  )
}

export default NavBar