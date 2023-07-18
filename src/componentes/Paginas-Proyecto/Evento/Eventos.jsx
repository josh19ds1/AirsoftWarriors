import React, { useEffect, useState } from 'react';
import '../../../estilos/eventStart.css';
import { Link } from 'react-router-dom';
import { Dominio, ApiEvento } from '../../Tools/var';
import fetchData from '../../Service/feetchApi';

const apiUrl = `${Dominio}/${ApiEvento}`;

const EventoStart = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchDataFromApi = async () => {
          const responseData = await fetchData(apiUrl);
          setData(responseData);
        };
    
        fetchDataFromApi();
      }, []);

     

      

      const imageUrl = data && data.length > 0 ? data[0].place.image_url.url : null;
      const imageUrl2 = data && data.length > 0 ? data[1].place.image_url.url : null;


    
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
            {imageUrl && <img src={imageUrl} alt="Evento" />}
            </div>
            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Boscoso</p>
                    <div className="separator"></div>
                    <p className="info-t">Panama, PA</p>
                    <p className="price">12.99$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            9.01112 Lat -79.5863 Lon, Panama
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sab, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                        Final del corredor Norte Albrook, mano derecha<span></span>
                        </p>
                    </div>
                </div>
                <Link to="/Evento"><button className="action">Reservar</button></Link>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
            {imageUrl2 && <img src={imageUrl2} alt="Evento" />}
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Boscoso</p>
                    <div className="separator"></div>
                    <p className="info-t">Cerro Azul, PA</p>
                    <p className="price">9.99$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            9.24687 Lat -79.5863 Lon, Panama
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sab, Oct 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                        Cerro azul, Camino a tres brazos <span></span>
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