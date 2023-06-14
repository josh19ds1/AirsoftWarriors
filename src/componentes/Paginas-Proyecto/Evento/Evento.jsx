import React from 'react';
import '../../../estilos/events.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import prueba from '../../../Imagenes/portada.png';
import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore, { Autoplay, FreeMode } from 'swiper';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Evento = () => {
  SwiperCore.use([Autoplay, FreeMode]);

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Airsoft <span>Event</span></h3>
        </div>
        <Swiper
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
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          </div>
        </Swiper>
      </section>

      <section className="service" id="service">
        <h1 className="heading">Nuestros <span>Servicios</span></h1>
        <div className="box-container">
          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div className="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
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
      </section>

      <section className="gallery" id="gallery">
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
      </section>

      <section className="price" id="price">
        <h1 className="heading">Nuestros <span>Precios</span></h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">Package 1</h3>
            <h3 className="amount">$250.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
            </ul>
            <Link to="/" className="btn">Check Out</Link>
          </div>

          <div className="box">
            <h3 className="title">Package 2</h3>
            <h3 className="amount">$250.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
            </ul>
            <Link to="/" className="btn">Check Out</Link>
          </div>

          <div className="box">
            <h3 className="title">Package 3</h3>
            <h3 className="amount">$550.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
            </ul>
            <Link to="/" className="btn">Check Out</Link>
          </div>

          <div className="box">
            <h3 className="title">Package 4</h3>
            <h3 className="amount">$850.99</h3>
            <ul>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
              <li><i className="fa fa-check"></i>Full services</li>
            </ul>
            <Link to="/" className="btn">Check Out</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Evento;
