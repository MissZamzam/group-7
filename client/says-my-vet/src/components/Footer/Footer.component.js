import React from 'react'
import '../Footer/Footer.styles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";
import footerImg from "./images/doctor3.jpg";

function Footer() {
  return (
    <footer className="footer-sec">
      <div className="footer">
        <div className="sections">
          <div className='footer-image'>
            <img src={footerImg}/>
          </div>
          <div className="formpage">
            <div id="htwo" class="dark">
              <h2>Contact</h2>
            </div>
            <div className="contact-form">
              <form className="form">
                <input
                  type="text"
                  id="name"
                  name=""
                  value=""
                  placeholder="Name"
                  required
                />
                <input
                  type="tel"
                  id="number"
                  name=""
                  value=""
                  placeholder="Phone"
                />
                <input
                  type="Email"
                  id="email"
                  name=""
                  value=""
                  placeholder="E-mail"
                  required
                />
                <textarea type="text" id="text" name="" value=" Type here..." />
                <button type="Submit" id="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="social">
            <div id="htwo" class="dark">
              <h2>Let's Stay In Touch</h2>
            </div>
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
          <div>
            <div className="Help">
              <div className='footer-help'>
                <h2>Get Help</h2>
              </div>
              <ul>
                <li>Terms and Conditions </li>
                <li>Returns and Refunds</li>
                <li>Privacy notice</li>
                <li>Service FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer