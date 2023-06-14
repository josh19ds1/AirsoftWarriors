import React from 'react'
import '../../estilos/footer.css'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>Information</h3>

                <p href="#"><i className="fa fa-info"></i>About us</p>
                <p href="#"><i className="fa fa-info"></i>Privacy Policy</p>
                <p href="#"><i className="fa fa-info"></i>Cookie Policy</p>
                <p href="#"><i className="fa fa-info"></i>Terms and regulations</p>
                <p href="#"><i className="fa fa-info"></i>Others</p>

            </div>

            <div className="box">
                <h3>Quick links</h3>

                <p href="#"><i className="fa fa-arrow-right"></i>Home</p>
                <p href="#"><i className="fa fa-arrow-right"></i>Events</p>
                <p href="#"><i className="fa fa-arrow-right"></i>Products</p>
                <p href="#"><i className="fa fa-arrow-right"></i>Ranking</p>
                <p href="#"><i className="fa fa-arrow-right"></i>Tutors</p>
            </div>

            <div className="box">
                <h3>Contact Info</h3>

                <p href="#"><i className="fa fa-phone"></i>+507 123-1234</p>
                <p href="#"><i className="fa fa-phone"></i>+507 6123-1245</p>
                <p href="#"><i className="fa fa-envelope"></i>airsoftwarriors@gmail.com</p>
                <p href="#"><i className="fa fa-envelope"></i>airsoftbusiness@gmail.com</p>
                <p href="#"><i className="fa fa-map-pin"></i>Panama, Costa del este</p>
            </div>

            <div className="box">
                <h3>Follow Us</h3>

                <p href="#"><i className="fa fa-facebook-f"></i> Facebook </p>
                <p href="#"><i className="fa fa-twitter"></i> Twitter </p>
                <p href="#"><i className="fa fa-instagram"></i> Instagram </p>

            </div>
        </div>
        <div className="credit">Created by <span>AirsoftWarriors</span> | all Rights Reserved! </div>

    </section>
  )
}

export default Footer