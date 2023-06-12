import React from 'react'
import '../../estilos/events.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/free-mode'; 
import prueba from '../../Imagenes/portada.png'
import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore, { Autoplay,FreeMode } from 'swiper';
import 'font-awesome/css/font-awesome.min.css';


const Evento = () => {
  SwiperCore.use([Autoplay,FreeMode]);
  return (
    <>
    <>
    <section class="home" id="home">
      <div class="content">
        <h3>Airsoft <span>Event</span></h3>
      </div>
      <Swiper class="swiper mySwiper home-slider"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        className='home-slider'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        FreeMode={true}
        modules={[EffectCoverflow, Pagination]}
        pagination={true}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
      >
        <div class="swiper-wrapper">
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
          <SwiperSlide class="swiper-slide"><img src={prueba} alt="" /></SwiperSlide>
        </div>
      </Swiper>

    </section>
    
    <section class="service" id="service">
        <h1 class="heading">Nuestros <span>Servicios</span></h1>
        <div class="box-container">
          <div class="box">
            <i className="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fa fa-flag"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>
        </div>
      </section><section class="about" id="about">
        <h1 class="heading">About <span>Us</span></h1>
        <div class="row">
          <div class="image">
            <img src={prueba} alt="" />
          </div>
          <div class="content">
            <h3>Airsoft Warrior Team</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo eveniet quae corrupti consequatur quidem. Asperiores a praesentium illo nemo, magnam illum ea sed voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse!</p>
          </div>
        </div>
      </section><section class="gallery" id="gallery">
        <h1 class="heading">Play <span>Places</span></h1>
        <div class="box-container">
          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbana</h3>
          </div>

          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbane</h3>
          </div>

          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbana</h3>
          </div>

          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbana</h3>
          </div>

          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbana</h3>
          </div>

          <div class="box">
            <img src={prueba} alt="" />
            <h3 class="title">Zona Urbana</h3>
          </div>
        </div>
      </section></>
      
      <section class="price" id="price">

        <h1 class="heading"> Nuestros <span>Precios</span></h1>
        <div class="box-container">
          <div class="box">
            <h3 class="title">Package 1</h3>
            <h3 class="amount">$250.99</h3>
            <ul>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 2</h3>
            <h3 class="amount">$250.99</h3>
            <ul>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 3</h3>
            <h3 class="amount">$550.99</h3>
            <ul>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 4</h3>
            <h3 class="amount">$850.99</h3>
            <ul>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>
              <li><i class="fa fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>
        </div>

      </section></>

      
  )
}

export default Evento