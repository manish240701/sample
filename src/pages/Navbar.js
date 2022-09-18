import React from "react";
import "./Navbar.css";
import svg from "../assets/bars-solid.png"
import logo from "../assets/logo.png"
const Navbar = () =>{
    return (
        // TODO:Navbar
        <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
        <div class="container-fluid">

            {/* TODO:Navbar brand */}
            <a class="navbar-brand" href="#">
            <img src={logo} width="60%" role="img" />
            </a>

            {/* TODO:Toggler */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={svg} width="30px" alt="toggler"  />
            </button>

            {/* TODO:Nav Menu */}
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom-navbar-collapse">

                <li className="nav-item ">
                    <a className="nav-link active" href="#">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link color-white" href="#skills">skills</a>
                </li>

                <li className="nav-item ">
                    <a className="nav-link color-white" href="#projects">projects</a>
                </li>

                <li className="nav-item me-3">
                    <a className="nav-link color-white" href="#contact">contact</a>
                </li>

                <li className="quick-links">
                    <a className="nav-link color-white" href="https://manish240701.github.io/leo/">
                        <span className="black">Reach Me</span>
                    </a>

                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;