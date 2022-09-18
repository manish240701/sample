import React from "react";
import "./Home.css";
import Resume from "../assets/RESUME.pdf"
import homeimg from "../assets/landingbg.png"
const Home= ()=>{
    return(
        // TODO: home Container
        <div className="home-container text-center" id="home">
            
            {/* TODO: home contents */}
            <div className="home-content-container text-center">
                <p className="home-content-paragraph">Hello, I'm</p>
                <h1 className="home-content-heading" style={{fontFamily:"poppins"}}>Manish Kumar</h1>
                {/* TODO: home button group */}
                <div className="home-button-group">
                    <a href={Resume}>
                        <button className="btn home-btn1 btn-outline-dark">Download CV</button>
                    </a>
                    <a href="#projects">
                        <button className="btn home-btn2 btn-outline-dark">Projects</button>
                    </a>
                </div>
            </div>

            {/* TODO: home image */}
            <img src={homeimg} className="image-fluid home-bgimg" alt="homebackgroundimg" />
        </div>

        
    )
}

export default Home;