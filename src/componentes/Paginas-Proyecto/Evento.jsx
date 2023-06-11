import React from 'react'
import '../../estilos/events.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Evento = () => {
  return (

    <><><section class="home" id="home">
      <div class="content">
        <h3>Airsoft <span>Event</span></h3>
      </div>

      <div class="swiper mySwiper home-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="images/image1.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/image2.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/image3.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/image4.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/image5.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/image6.jpg" alt="" /></div>
        </div>
      </div>

    </section><section class="service" id="service">
        <h1 class="heading">Nuestros <span>Servicios</span></h1>
        <div class="box-container">
          <div class="box">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fas fa-envelope"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fas fa-music"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fas fa-utensils"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fas fa-photo-video"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>

          <div class="box">
            <i class="fas fa-birthday-cake"></i>
            <h3>Captura la Bandera</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, debitis.</p>
          </div>
        </div>
      </section><section class="about" id="about">
        <h1 class="heading">About <span>Us</span></h1>
        <div class="row">
          <div class="image">
            <img src="images/aboutus.jpg" alt="" />
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
            <img src="images/gall1.jpg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/gall2.jpeg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/gall3.jpg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/gall4.jpg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/gall4.jpg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          </div>

          <div class="box">
            <img src="images/gall4.jpg" alt="" />
            <h3 class="title">Zona Urbana</h3>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
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
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 2</h3>
            <h3 class="amount">$250.99</h3>
            <ul>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 3</h3>
            <h3 class="amount">$550.99</h3>
            <ul>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>

          <div class="box">
            <h3 class="title">Package 4</h3>
            <h3 class="amount">$850.99</h3>
            <ul>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>
              <li><i class="fas fa-check"></i>Full services</li>

            </ul>
            <a href="" class="btn">Check Out</a>
          </div>
        </div>

      </section></>

      
  )
}

export default Evento