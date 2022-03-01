import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({img,alt,head,link}) =>{
    return(
        
        // TODO:Project box container
        <div className="project-box-container text-start">
            <img src={img} className="image-fluid project-image" alt={alt}  width="100%"/>
            <h1 className='project-head'>{head}</h1>
            <a href={link}>
                <button className='btn project-preview-button btn-outline-dark'>
                    Preview
                </button>   
            </a>
        </div>
    )
}

export default ProjectContainer;