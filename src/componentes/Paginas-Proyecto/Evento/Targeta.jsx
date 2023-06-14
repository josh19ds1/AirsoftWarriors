import React from 'react'
import { Link } from 'react-router-dom'

const Targeta = () => {
  return (
    <section className="price" id="price">

        <h1 className="heading"> Nuestros <span>Precios</span></h1>
        <div className="box-container">
       
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
  )
}

export default Targeta