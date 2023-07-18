import React, { useEffect, useState } from 'react';
import '../../../estilos/events.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/free-mode';

import SwiperCore, { Autoplay, FreeMode } from 'swiper';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { Dominio, ApiEvento } from '../../Tools/var';
import fetchData from '../../Service/feetchApi';

const apiUrl = `${Dominio}/${ApiEvento}`;

const Evento = () => {

  const [data, setData] = useState(null);
    useEffect(() => {
        const fetchDataFromApi = async () => {
          const responseData = await fetchData(apiUrl);
          setData(responseData);
        };
    
        fetchDataFromApi();
      }, []);

   

  SwiperCore.use([Autoplay, FreeMode]);

  

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Airsoft <span>Event</span></h3>
        </div>
        {/* <Swiper
          className="swiper mySwiper home-slider"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          freeMode={true}
          modules={[EffectCoverflow, Pagination]}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
            {data?.map((evento) => (
                <div key={evento.id}>
                  <img src={evento.place.image_url.url} alt="Evento" />
                </div>
              ))}   
            </SwiperSlide>
          </div>
        </Swiper> */}
      </section>

      <section className="service" id="service">
        <h1 className="heading">Modos de <span>Juegos</span></h1>
        <div className="box-container">
          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>El primer equipo en obtener la bandera de los enemigos y llevarla a su base, gana.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Rey de la Colina</h3>
            <p>Ambos equipos luchan por tomar y controlar un punto estratégico del mapa por un tiempo definido. El primer equipo en mantener el punto bajo control durante el tiempo definido, gana. El tiempo acumulado desaparece cuando el equipo pierde el punto de control.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Duelo por Equipos</h3>
            <p>El primer equipo en eliminar a todos los miembros del equipo contrario, gana.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Carrera</h3>
            <p>Los jugadores se dividen en dos equipos en una relación Hay 3 puntos de control consecutivos en el campo, el equipo atacante debe tomar todos en un tiempo límite. El equipo defensor debe evitar el avance de los atacantes lo más posible para demorar su avance.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Escolta el Paquete</h3>
            <p>Una vez que el equipo atacante tiene a el paquete, lo debe proteger y escoltar hacia un “punto de extracción” definido. La otra mitad del equipo defensor tratará de evitarlo.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Dominio</h3>
            <p>Hay de 3 a 5 puntos de control repartidos en el campo. El objetivo de ambos equipos es capturar tantas puntos de control como les sea posible. Después de 60 minutos, el juego termina y gana el equipo que tenga la mayor cantidad de puntos de control tomados.</p>
          </div>
        </div>
      </section>

      {/* <section className="about" id="about">
        <h1 className="heading">About <span>Us</span></h1>
        <div className="row">
          <div className="image">
            <img src={prueba} alt="" />
          </div>
          <div className="content">
            <h3>Airsoft Warrior Team</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo eveniet quae corrupti consequatur quidem. Asperiores a praesentium illo nemo, magnam illum ea sed voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse!</p>
          </div>
        </div>
      </section> */}

      {/* <section className="gallery" id="gallery">
        <h1 className="heading">Play <span>Places</span></h1>
        <div className="box-container">
          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbana</h3>
          </div>

          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbane</h3>
          </div>

          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbana</h3>
          </div>

          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbana</h3>
          </div>

          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbana</h3>
          </div>

          <div className="box">
            <img src={prueba} alt="" />
            <h3 className="title">Zona Urbana</h3>
          </div>
        </div>
      </section> */}

      <section className="price" id="price">
        <h1 className="heading">Nuestros <span>Paquetes</span></h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">Paquete Cadete</h3>
            <h3 className="amount">$69.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Hasta 5 Amigos</li>
              <li><i className="fa fa-check"></i>Armas Prestadas</li>
              <li><i className="fa fa-check"></i>3 Cartuchos de BBs</li>
              <li><i className="fa fa-check"></i>1 hora</li>
              
            </ul>
            <Link to="/" className="btn">Sold Out</Link>
          </div>

          <div className="box">
            <h3 className="title">Paquete Capitan</h3>
            <h3 className="amount">$99.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Hasta 10 Amigos</li>
              <li><i className="fa fa-check"></i>Armas Prestadas</li>
              <li><i className="fa fa-check"></i>8 Cartuchos de BBs</li>
              <li><i className="fa fa-check"></i>3 Horas</li>
              <li><i className="fa fa-check"></i>Fotos de Recuerdo</li>
            </ul>
            <Link to="/" className="btn">Sold Out</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Evento;
