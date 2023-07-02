import React from 'react';
import '../../../estilos/failed.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Failed = () => {
    return (
        <div class="back-one-failed">
            <div class="back-two-failed">
                <h1>Lo sentimos ha ocurrido un error en su compra, verifique que haya seleciona una opción</h1>
                <center><i class="fa-solid fa-xmark fa-2xl"></i></center>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <center><button className="btn btn-info" type="button"><Link to="/Catalogo">Pulse aqui para regresar</Link></button></center>
                </div>
            </div>
        </div>
    )
}

export default Failed