
import './App.css';
import PG_Head from './componentes/head/PG_Head';
import PaginaPrincipal from './componentes/PaginaPrincipal';

import { Diseño } from './componentes/head/diseño';



function App() {
  return (


    <main>
      <PG_Head />
     
      <h1>Probando informacion generada</h1>
      <PaginaPrincipal />

      <Diseño />

    </main>



  );
}

export default App;
