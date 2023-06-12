import React from 'react'
import prueba from '../../Imagenes/portada.png'


const Lugares = () => {
  return (
    <section class="gallery" id="gallery">
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

     

    
    </div>
  </section>
  )
}

export default Lugares