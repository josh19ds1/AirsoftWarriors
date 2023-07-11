
import { Route, Routes } from "react-router-dom";

import './App.css';
import NavBar from './componentes/navbar/navbar'
import Eventos from "./componentes/Paginas-Proyecto/Evento/Eventos";
import Evento from "./componentes/Paginas-Proyecto/Evento/Evento";
import Tutores from "./componentes/Paginas-Proyecto/Tutores";
import Ranking from "./componentes/Paginas-Proyecto/Ranking";
import Catalogo from "./componentes/Paginas-Proyecto/Catalogo";
import Footer from "./componentes/footer/footer"
import Login from "./componentes/Paginas-Proyecto/Login/Login";
import Inicio from "./componentes/Paginas-Proyecto/Inicio/Inicio";
import Registrar from "./componentes/Paginas-Proyecto/Login/Registrar";
import DescripProducto from "./componentes/Pagination/DescripProducto";
import Perfil from "./componentes/Paginas-Proyecto/Perfil";
import Carrito from "./componentes/Paginas-Proyecto/CarritoDeCompras/Carrito";
import UserExist from "./componentes/Paginas-Proyecto/Login/UserExist";
import Success from "./componentes/Paginas-Proyecto/CarritoDeCompras/Success";
import Failed from "./componentes/Paginas-Proyecto/CarritoDeCompras/Failed";
import NotFoundPage from "./componentes/NotFoundPage/NotPage404";


function App() {

  return (


    <main>


      <UserExist />

      <NavBar />





      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Evento" element={<Evento />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Tutores" element={<Tutores />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/DescripcionProducto/:id" element={<DescripProducto />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Failed" element={<Failed />} />
        {/* Ruta para todas las demás rutas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />








    </main>





  );
}

export default App;
