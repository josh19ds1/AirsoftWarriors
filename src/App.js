import { Suspense } from "react";
import { fetchData } from "./componentes/Service/fetchData"

import './App.css';


import PG_Head from './componentes/head/PG_Head';
import PaginaPrincipal from './componentes/PaginaPrincipal';


import Navibar from './componentes/navbar/navbar';
import { Diseño } from './componentes/head/diseño';


const apiData = fetchData("https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/products");

function App() {

  return (


    <main>
      <PG_Head />

      <Navibar />

      <h1>Probando informacion generada</h1>

     
      <PaginaPrincipal />

      <Diseño />

    </main>



  );
}

export default App;
