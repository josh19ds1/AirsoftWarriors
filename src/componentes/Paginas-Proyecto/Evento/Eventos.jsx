import React from 'react'
import '../../../estilos/eventStart.css';
import prueba from '../../../Imagenes/portada.png';
import { Link } from 'react-router-dom';

const EventoStart = () => {
  return (
    <>
    <section className='home'>
        <div className="title">
          <h3>Airsoft <span>Event</span></h3>
        </div>
    </section>
    <div className="container">
        <div className="item-container">
            <div className="img-container">
                <img src={prueba} alt=""/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Panama RAVE</p>
                    <div className="separator"></div>
                    <p className="info">Chiriqui, PA</p>
                    <p className="price">29$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, Panama
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sab, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <Link to="/Evento"><button className="action">Reservar</button></Link>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
                <img src={prueba} alt=""/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Panama RAVE</p>
                    <div className="separator"></div>
                    <p className="info">Veraguas, PA</p>
                    <p className="price">70$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, Panama
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sab, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <Link to="/Evento"><button className="action">Reservar</button></Link>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
                <img src={prueba} alt=""/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Panama RAVE</p>
                    <div className="separator"></div>
                    <p className="info">Panama, PA</p>
                    <p className="price">35$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, Panama
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sab, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <Link to="/Evento"><button className="action">Reservar</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default EventoStart