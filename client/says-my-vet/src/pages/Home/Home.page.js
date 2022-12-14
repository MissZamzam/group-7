// import React, { useState } from 'react'
import React from 'react';
import {Link} from 'react-router-dom'
import '../Home/Home.style.css'
import { FaCat, FaChevronCircleRight, FaCircle, FaDog, FaStethoscope } from "react-icons/fa";

const Home = () =>
{
  // const [ submit, onSubmit ] = useState(e.target.value )
  
  // function onHandleSubmit (e)
  // {
  //   onSubmit((submit)=> submit)
  // }
  return (
    <div className="home-page">
      <div className="home-sec1">
        <h3 id="descr">High Quality Care For Pets You'll Love</h3>
        <Link to="/about">
          <button className="info-btn">LEARN MORE</button>
        </Link>
      </div>
      <div className="home-sec2">
        {/* <div className='cards'></div> */}
        <div className="card1">
          <div>
            {/* <FaDog className="center-icon" /> */}
            <FaDog className="icon-1" />
          </div>

          <h4>Pet Walking</h4>
          <p>
            Welcome to Pets First web page. We are committed to enhance your
            health by ensuring that you are always safe and have a happy
            companion (Pet).
          </p>
          <div>
            <FaChevronCircleRight className="icon-4" />
          </div>
        </div>
        <div className="card2">
          <div>
            <FaCat className="icon-2" />
          </div>

          <h4>Pet Daycare</h4>
          <p>
            Welcome to Pets First web page. We are committed to enhance your
            health by ensuring that you are always safe and have a happy
            companion (Pet).
          </p>
          <div>
            <FaChevronCircleRight className="icon-5" />
          </div>
        </div>
        <div className="card3">
          <div>
            <FaStethoscope className="icon-3" />
          </div>
          <h4>Pet Grooming</h4>
          <p>
            Welcome to Pets First web page. We are committed to enhance your
            health by ensuring that you are always safe and have a happy
            companion (Pet).
          </p>
          <div>
            <FaChevronCircleRight className="icon-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home