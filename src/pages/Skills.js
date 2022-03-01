import React from "react";
import "./Skills.css";

const Skills = () =>{
    return(

        // TODO:Skills container
        <div className="skills-outer-container" id="skills">
            
            {/* TODO:Row 1 */}
            <div className="row">
                <div className="col-md-6 skill-container programming text-center mb-4">

                    {/* heading */}
                    <h1 className="skill-head">Programming</h1>

                    {/* TODO:Programming Skill row1 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">JavaScript</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">Java</h3>
                            <p className="skill-p">Intermediate</p>
                        </div> 
                    </div>

                    {/* TODO:Programming Skill row2 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">C</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">C++</h3>
                            <p className="skill-p">Intermediate</p>
                        </div> 
                    </div>
                    {/* TODO:Programming Skill row3 */}
                    <div className="row mb-3">                        
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">Python</h3>
                            <p className="skill-p">Basics</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">TypeScript</h3>
                            <p className="skill-p">Basics</p>
                        </div> 
                    </div>
                </div>


                <div className="col-md-6 skill-container frontend text-center mb-4">

                    <h1 className="skill-head">Front End</h1>

                    {/* TODO:Front End Skill row1 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">React Js</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">HTML</h3>
                            <p className="skill-p">Advance</p>
                        </div> 
                    </div>
                    {/* TODO:Front End Skill row2 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">CSS</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">Bootstrap</h3>
                            <p className="skill-p">Intermediate</p>
                        </div> 
                    </div>
                </div>
            </div>



            {/* TODO:Row 2 */}
            <div className="row">
                <div className="col-md-6 skill-container uiux text-center mb-4">

                    {/* heading */}
                    <h1 className="skill-head">UIUX</h1>

                    {/* TODO:UIUX Skill row1 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">Figma</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">AdobeXD</h3>
                            <p className="skill-p">Intermediate</p>
                        </div> 
                    </div>
                </div>


                <div className="col-md-6 skill-container backend text-center mb-4">

                    <h1 className="skill-head">Backend and DB</h1>

                    {/* TODO:Backend and DB Skill row1 */}
                    <div className="row mb-3">
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">SQL</h3>
                            <p className="skill-p">Intermediate</p>
                        </div>
                        <div className="col-6 skill text-center">
                            <h3 className="skill-h3">Firebase</h3>
                            <p className="skill-p">Intermediate</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Skills;



