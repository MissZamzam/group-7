import React from 'react'
import "../About/About.styles.css";
import Image1 from "./AboutImages/breed.jpg"
import Image2 from "./AboutImages/feed.jpg";
import Image3 from "./AboutImages/disease.png";
import Image4 from "./AboutImages/welfare.jpg";
import Image5 from "./AboutImages/funfact.jpg";
import Image6 from "./AboutImages/Sport.jpg";
const About = () => {
  return (
    <section className="about-section">
      <div className="abt-sec1">
        <div className="about-us">
          <h1>About Us</h1>
          <p>
            While a pet is generally kept for the pleasure that it can give to
            its owner, often, especially with horses, dogs, and cats, as well as
            with some other domesticated animals, this pleasure appears to be
            mutual. Thus, pet keeping can be described as a symbiotic
            relationship, one that benefits both animals and human beings.{" "}
          </p>
        </div>
        <div className="services">
          <h3>Our Services</h3>
          <div className='service-blogs'>
            <div className="pets-imgs">
              <img src={Image1} />
              <a className="blog-links">Pets Breeds</a>
            </div>
            <div className="pets-imgs">
              <img src={Image2} />
              <a className="blog-links">Pets Feeds</a>
            </div>
            <div className="pets-imgs">
              <img src={Image3} />
              <a className="blog-links">Diseases Treated</a>
            </div>
            <div className="pets-imgs">
              <img src={Image4} />
              <a className="blog-links">Pets Welfare</a>
            </div>
            <div className="pets-imgs">
              <img src={Image5} />
              <a className="blog-links">FunFacts About Pets</a>
            </div>
            <div className="pets-imgs">
              <img src={Image6} />
              <a className="blog-links">Pets Sporting Activities</a>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-sec2"></div>
    </section>
  );
}

  export default About