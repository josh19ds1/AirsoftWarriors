import React from 'react'
import '../../estilos/footer.css'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Information</h3>
                <a href="#"><i class="fa fa-info"></i>About us</a>
                <a href="#"><i class="fa fa-info"></i>Privacy Policy</a>
                <a href="#"><i class="fa fa-info"></i>Cookie Policy</a>
                <a href="#"><i class="fa fa-info"></i>Terms and regulations</a>
                <a href="#"><i class="fa fa-info"></i>Others</a>
            </div>

            <div class="box">
                <h3>Quick links</h3>
                <a href="#"><i class="fa fa-arrow-right"></i>Home</a>
                <a href="#"><i class="fa fa-arrow-right"></i>Events</a>
                <a href="#"><i class="fa fa-arrow-right"></i>Products</a>
                <a href="#"><i class="fa fa-arrow-right"></i>Ranking</a>
                <a href="#"><i class="fa fa-arrow-right"></i>Tutors</a>
            </div>

            <div class="box">
                <h3>Contact Info</h3>
                <a href="#"><i class="fa fa-phone"></i>+507 123-1234</a>
                <a href="#"><i class="fa fa-phone"></i>+507 6123-1245</a>
                <a href="#"><i class="fa fa-envelope"></i>airsoftwarriors@gmail.com</a>
                <a href="#"><i class="fa fa-envelope"></i>airsoftbusiness@gmail.com</a>
                <a href="#"><i class="fa fa-map-pin"></i>Panama, Costa del este</a>
            </div>

            <div class="box">
                <h3>Follow Us</h3>
                <a href="#"><i class="fa fa-facebook-f"></i> Facebook </a>
                <a href="#"><i class="fa fa-twitter"></i> Twitter </a>
                <a href="#"><i class="fa fa-instagram"></i> Instagram </a>
            </div>
        </div>
        <div class="credit">Created by <span>AirsoftWarriors</span> | all Rights Reserved! </div>

    </section>
  )
}

export default Footer