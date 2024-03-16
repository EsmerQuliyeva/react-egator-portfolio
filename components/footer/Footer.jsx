import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>
        <a href="https://www.twitter.com/"><IoLogoTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;EGATOR Tutorials. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer