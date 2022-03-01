import React from "react";
import "./Projects.css";
import ProjectContainer from "./Components/ProjectContainer"
import project1 from "../assets/project1.jpg"

const Projects = () =>{
    return (

        // TODO:Projects Container
        <div className="projects-outer-container text-center" id="projects">
            
            {/* TODO:row1 */}
            <div className="row projects-row-1 text-center">
                
                {/*empty spaces for alignment*/}
                <div className="col-md-2"></div>

                {/*TODO: Row1 Components group */}
                <div className="col-md-8 text-center">
                    <div className="row row1-component-row text-center">
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                    </div>
                </div>

                {/*empty spaces for alignment*/}
                <div className="col-md-2"></div>
            </div>


            {/* TODO:row2 */}
            <div className="row projects-row-1 text-center">
                
                {/*empty spaces for alignment*/}
                <div className="col-md-2"></div>

                {/*TODO: Row2 Components group */}
                <div className="col-md-8 text-center">
                    <div className="row row2-component-row text-center">
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                        <div className="col-md-4 project-detail-container">
                            <ProjectContainer img={project1} alt="project1" head="Subramania Bharathi Sports Club" link="https://www.sbsctn.com"/>
                        </div>
                    </div>
                </div>

                {/*empty spaces for alignment*/}
                <div className="col-md-2"></div>
            </div>

        </div>        
    )
}

export default Projects;
















