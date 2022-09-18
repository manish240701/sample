import React from "react";
import aboutmeimg from "../assets/aboutmeimg.png";
import "../pages/About.css";
const About = () => {
  return (
    <div className="about-outer-container">
      <div className="row about-container-row">
        {/* TODO:About me Left container for web */}
        <div className="col-sm-0 col-md-1 about-left-container"></div>

        {/* TODO:About me image container  */}
        <div className="col-sm-12 col-md-5 about-img-container text-center">
          <img
            src={aboutmeimg}
            className="image-fluid aboutmeimg"
            alt="manish kumar"
            width="70%"
          />
        </div>

        {/* TODO:About Me Content container  */}
        <div className="col-sm-12 col-md-5 about-content-container">
          <p className="about-me-paragraph">
            Hello everybody, I am Manish - Web Enthusiast. I love developing
            websites and represent data in a meaningful way. Also I like pushing
            myself and taking up new challenges.
          </p>

          {/* TODO:About-me count container  */}
          <div className="row about-count-container">
            <div className="col-sm-4 text-center project-container count-countname-container">
              <p className="about-count-number">10+</p>
              <p className="about-count-name ">projects</p>
            </div>
            <div className="col-sm-4 text-center client-container count-countname-container">
              <p className="about-count-number">5+</p>
              <p className="about-count-name">satisfied clients</p>
            </div>
            <div className="col-sm-4 text-center lecture-container count-countname-container">
              <p className="about-count-number">20+</p>
              <p className="about-count-name">lectures taken</p>
            </div>
          </div>

          <a href="https://manish240701.github.io/leo/" className="link">
            <button className="btn about-btn">Let's Talk</button>
          </a>
        </div>

        {/* TODO:About me right container for web  */}
        <div className="col-sm-0 col-md-1 about-right-container"></div>
      </div>
    </div>
  );
};
export default About;
