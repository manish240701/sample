import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Navbar from "../src/pages/Navbar.js";
import Home from "../src/pages/Home.js"
import About from "../src/pages/About.js"
import Heading from "../src/pages/Components/Heading"
import Skills from "../src/pages/Skills.js";
import Review from "../src/pages/Review.js";
import Contact from "../src/pages/Contact.js";
import Footer from "../src/pages/Footer.js";
import Projects from "../src/pages/Projects.js";
import Float from "../src/pages/Float.js";
const Index=()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Float/>
      <div className="component-group">
        <Heading head="ABOUT ME" sub="Get to know"/>
        <About/>
        <Heading head="MY EXPERIENCE" sub="What skill I have" />
        <Skills/>
        <Heading head="PORTFOLIO" sub="My Recent Works" />
        <Projects/>
        <Heading head="REVIEWS" sub="Review from clients"/>
        <Review/>
        <Heading head="CONTACT" sub="Get In Touch"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
};

ReactDOM.render(<Index/>,document.getElementById("root"))