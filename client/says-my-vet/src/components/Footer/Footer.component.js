import React, { useState } from 'react'
import '../Footer/Footer.styles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import footerImg from "./images/doctor3.jpg";

function Footer ()
{
  const [ formData, setFormData ] = useState( {} )
  const [addCommentData, setAddCommentData] = useState(null)
  function handleChange ( event )
  {
    // setAddCommentData( {
    //   ...addCommentData, [ event.target.name ]: event.target.value,
    
    // } );
  
    const name = event.target.name;
    setFormData({...FormData, [name]: name,})
  }
  function handleSubmit ( event )
  {
    event.preventDefault();
    // console.log( formData );
    setAddCommentData( {
      ...addCommentData, name:"",
    })
  }
  return (
    <footer className="footer-sec">
      <div className="footer">
        <div className="sections">
          <div className="footer-image">
            <img src={footerImg} />
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
                  value={formData.name}
                  placeholder="Name"
                  required
                  // onChange={handleChange}
                />
                <input
                  type="tel"
                  id="number"
                  name=""
                  value={formData.number}
                  placeholder="Phone"
                  // onChange={handleChange}
                />
                <input
                  type="Email"
                  id="email"
                  name=""
                  value={formData.email}
                  placeholder="E-mail"
                  required
                  // onChange={handleChange}
                />
                <textarea
                  type="text"
                  id="text"
                  name=""
                  placeholder=" Type here..."
                  value={formData.text}
                  // onChange={handleChange}
                />
                <button type="Submit" id="submit" >
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
              <a href="https://twitter.com/outwardhound" target={"_blank"}>
                <li>
                  <FaTwitter />
                </li>
              </a>
              <a
                href="https://www.instagram.com/outwardhound/"
                target={"_blank"}
              >
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://www.facebook.com/petsworldindia"
                target={"_blank"}
              >
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
          <div>
            <div className="Help">
              <div className="footer-help">
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
      <div class="foot">
        <hr></hr>
        <h5>
          Designed by @group-7 members <br /> copyright reserved <br />
          <a href="/" class="up">
            <FaArrowUp />
          </a>
        </h5>
      </div>
    </footer>
  );
}

  export default Footer;