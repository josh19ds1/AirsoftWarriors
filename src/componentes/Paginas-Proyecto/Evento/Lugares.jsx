import React from 'react'
import prueba from '../../../Imagenes/portada.png'


const Lugares = () => {
  return (
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

     

    
    </div>
  </section>
  )
}

export default Lugares