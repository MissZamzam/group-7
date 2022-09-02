import React from 'react'
import '../Home/Home.style.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-sec1">
        <h3>High Quality Care For Pets You'll Love</h3>
        <button className="info-btn">LEARN MORE</button>
      </div>
      <div className="home-sec2">
        <div className="card1">
          <i class="fa fa-circle-thin" aria-hidden="true"></i>
          <p>
            Welcome to Pets Centre Veterinary Clinic web page. We are committed
            to enhance your health by ensuring that you are always safe and have
            a happy companion (Pet).
          </p>
        </div>
        <div className="card2">
          <i class="fa fa-circle-thin" aria-hidden="true"></i>
          <p>
            Welcome to Pets Centre Veterinary Clinic web page. We are committed
            to enhance your health by ensuring that you are always safe and have
            a happy companion (Pet).
          </p>
        </div>
        <div className="card3">
          <i class="fa fa-circle-thin" aria-hidden="true"></i>
          <p>
            Welcome to Pets Centre Veterinary Clinic web page. We are committed
            to enhance your health by ensuring that you are always safe and have
            a happy companion (Pet).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home