import React from 'react';
import '../../../estilos/success.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Success = () => {
    return (
        <div className="back-one-success">
            <div className="back-two-success">
                <h1>Felicidades su compra se ha llevado con éxito</h1>
                <center><i className="fa-sharp fa-solid fa-check fa-2xl"></i></center>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <center><button class="btn btn-info" type="button"><Link to="/">Pulse aqui para regresar a la pantalla principal</Link></button></center>
                </div>
            </div>
        </div>
    )
}

export default Success