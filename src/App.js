
import { Route, Routes } from "react-router-dom";

import './App.css';


import Registro from './componentes/Registro';
import { Diseño } from './componentes/head/diseño';

import NavBar from './componentes/navbar/navbar'
import PG_Head from './componentes/head/PG_Head';


import Evento from "./componentes/Paginas-Proyecto/Evento";
import Tutores from "./componentes/Paginas-Proyecto/Tutores";
import Ranking from "./componentes/Paginas-Proyecto/Ranking";
import Catalogo from "./componentes/Paginas-Proyecto/Catalogo";
import Login from "./componentes/Paginas-Proyecto/Login"; 
import Inicio from "./componentes/Paginas-Proyecto/Inicio";





function App() {

  return (


    <main>

      <NavBar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/Evento' element={<Evento />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/Tutores' element={<Tutores />} />
          <Route path='/Ranking' element={<Ranking />} />
          <Route path='/Login' element={<Login />} />
          
        </Routes>

      </div>
      <h1>Probando informacion generada</h1>

    </main>



  );
}

export default App;
