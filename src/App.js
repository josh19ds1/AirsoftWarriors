
import { Route, Routes } from "react-router-dom";

import './App.css';



import NavBar from './componentes/navbar/navbar'
import Evento from "./componentes/Paginas-Proyecto/Evento";
import Tutores from "./componentes/Paginas-Proyecto/Tutores";
import Ranking from "./componentes/Paginas-Proyecto/Ranking";
import Catalogo from "./componentes/Paginas-Proyecto/Catalogo";
import Login from "./componentes/Paginas-Proyecto/Login/Login"; 
import Inicio from "./componentes/Paginas-Proyecto/Inicio/Inicio";
import PgHead from "./componentes/head/PgHead";
import Registrar from "./componentes/Paginas-Proyecto/Login/Registrar";
import DescripProducto from "./componentes/Pagination/DescripProducto";
import Perfil from "./componentes/Paginas-Proyecto/Perfil";
import Carrito from "./componentes/Paginas-Proyecto/Carrito";




function App() {

  return (


    <main>
      <PgHead />
      <NavBar />
      


        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/Evento' element={<Evento />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/Tutores' element={<Tutores />} />
          <Route path='/Ranking' element={<Ranking />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='/Registrar' element={<Registrar />} />
          <Route path='/Perfil' element={<Perfil />} />
          <Route path='/DescripcionProducto/:id' Component={DescripProducto } />
        </Routes>


    </main>
    



  );
}

export default App;
