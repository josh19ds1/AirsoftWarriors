
import './App.css';
import PG_Head from './componentes/head/PG_Head';
import PaginaPrincipal from './componentes/PaginaPrincipal';

import Login from './componentes/Login';
import Registro from './componentes/Registro';
import { Diseño } from './componentes/head/diseño';




function App() {
  return (


    <main>
      <PG_Head />

      <h1>Probando informacion generada</h1>
      <PaginaPrincipal />

      <Login />
      <Registro />
      <Diseño />

    </main>



  );
}

export default App;
