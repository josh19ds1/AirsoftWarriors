import React from 'react';
import '../../estilos/404.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NotFoundPage = () => {
    return (
        <div class="nfp-body">
            <div class="nfp-body-two">
                <h1>404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que estás buscando no existe.</p>
                <center><i class="fa-solid fa-face-sad-tear"></i></center>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <center><button className="btn btn-primary" type="button"><Link to="/Evento">Pulse aqui para regresar</Link></button></center>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage