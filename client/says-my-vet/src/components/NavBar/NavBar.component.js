import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.styles.css'
import { FaEnvelope, FaFacebook, /*FaFacebookF,*/ FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="header-sec">
      <div className="media-contacts">
        <div className="phonecall">
          <FaPhoneAlt />: +2547200000
        </div>
        <div className="mail">
          <FaEnvelope />: pets_first_app@site.com
        </div>
        <div className="media-handles">
          <ul>
            <a>
              <li>
                <FaTwitter />
              </li>
            </a>
            <a>
              <li>
                <FaInstagram />
              </li>
            </a>
            <a>
              <li>
                <FaFacebook />
              </li>
            </a>
            <a>
              <li>
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="nav_bar">
        <div className="logo">
          <h1>
            Pets <em>First</em>
          </h1>
        </div>
        <div className="routes">
          <ul>
            <li> <Link to="/home"/>Home</li>
            <li> <Link to="/about"/>About</li>
            <li> <Link to="/registerdoc"/>Register_Doctors</li>
            <li> <Link to="/viewdoc"/>View-Doctors</li>
            {/* <li> <Link to="/home"/>Pets Data</li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar