import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.styles.css'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, /*FaFacebookF,*/ FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (

      <div className="nav_bar">
          <div className="logo">
            <h1>Pets <em>First</em></h1>  
          </div>
          <div className='routes'> <ul>
              <li>Home</li>
              <li>About</li>
              <li>Register_doctor</li>
              <li>View_doctors</li>
              <li>Pets data</li>
          </ul>

          </div>
         
          </div>
    
  )

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/registerdoc">Register_Doctors</Link>
            </li>
            <li>
              <Link to="/viewdoc">View-Doctors</Link>
            </li>
            <li>
              <Link to="/petsdata">Pets Data</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar