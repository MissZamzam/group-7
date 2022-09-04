import React from 'react'
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
            <a href="https://twitter.com/outwardhound" target={"_blank"}>
              <li>
                <FaTwitter />
              </li>
            </a>
            <a href="https://www.instagram.com/outwardhound/" target={"_blank"}>
              <li>
                <FaInstagram />
              </li>
            </a>
            <a href="https://www.facebook.com/petsworldindia" target={"_blank"}>
              <li>
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/outward-hound/?viewAsMember=true"
              target={"_blank"}
            >
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
            <li>Home</li>
            <li>About</li>
            <li>Register_Doctors</li>
            <li>View-Doctors</li>
            <li>Pets Data</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar