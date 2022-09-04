import React from 'react'
import '../Footer/Footer.styles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter,} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-sec">
      <div className="footer">
        <div className="sections">
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
              <h2>Social Media Handles</h2>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer