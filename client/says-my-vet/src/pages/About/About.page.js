import React from 'react'
import "../About/About.styles.css";
import Image1 from "./AboutImages/breed.jpg";
import Image2 from "./AboutImages/feed.jpg";
import Image3 from "./AboutImages/disease.png";
import Image4 from "./AboutImages/welfare.jpg";
import Image5 from "./AboutImages/funfact.jpg";
import Image6 from "./AboutImages/Sport.jpg";
import Image7 from "./AboutImages/doctor1.jpg";

const About = () => {
  return (
    <div className="about-section">
      <section className="section-one">
        <div className="abt-sec1">
          <div className="about-us">
            <h1>About Us</h1>
            <p>
              While a pet is generally kept for the pleasure that it can give to
              its owner, often, especially with horses, dogs, and cats, as well
              as with some other domesticated animals, this pleasure appears to
              be mutual. Thus, pet keeping can be described as a symbiotic
              relationship, one that benefits both animals and human beings.{" "}
            </p>
          </div>
          <div className="services">
            <h3>Our Services</h3>
            <div className="service-blogs">
              <div className="pets-imgs">
                <img src={Image1} />
                <a
                  href="https://www.dog-breeds-expert.com/Dog-Breeds-A-To-Z.html"
                  className="blog-links"
                >
                  Pets Breeds
                </a>
              </div>
              <div className="pets-imgs">
                <img src={Image2} />
                <a
                  href="https://www.petsworld.in/blog/pet-food"
                  className="blog-links"
                >
                  Pets Feeds
                </a>
              </div>
              <div className="pets-imgs">
                <img src={Image3} />
                <a
                  href="https://www.avma.org/resources-tools/pet-owners/petcare/disease-risks-dogs-social-settings"
                  target={"_blank"}
                  className="blog-links"
                >
                  Diseases Treated
                </a>
              </div>
              <div className="pets-imgs">
                <img src={Image4} />
                <a
                  href="https://outwardhound.com/furtropolis/pet-parenting/do-you-need-help-with-your-dog"
                  className="blog-links"
                >
                  Pets Welfare
                </a>
              </div>
              <div className="pets-imgs">
                <img src={Image5} />
                <a
                  href="https://outwardhound.com/furtropolis/category/dogs"
                  className="blog-links"
                >
                  FunFacts About Pets
                </a>
              </div>
              <div className="pets-imgs">
                <img src={Image6} />
                <a
                  href="https://www.puppyleaks.com/games/"
                  className="blog-links"
                >
                  Pets Sporting Activities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="abt-sec2">
          <img src={Image7} />
        </div>
      </section>
    </div>
  );
}

export default About