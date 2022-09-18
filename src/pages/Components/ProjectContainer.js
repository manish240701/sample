import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({tag,alt,head,link}) =>{
    const imageList=[
        "https://cdn.dribbble.com/users/464226/screenshots/6686150/prided_ievent_v2-dribbble.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/14300795/media/6bf63145162d76e4951120279fcdd1c9.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/14840586/media/3c869ed9227881bc769c1a76444ea3e6.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/14913418/media/9df9e278725d8ba8c7bf4e55e0196b6a.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/14927581/media/9907e8cc148fc68963fe3c56d6a07d93.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/16058175/media/e3c02f2e711ff637ffcca0b0b9b07e1e.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/16787626/media/f9e9efa0204d2b1518f751fc0658cf4c.png?compress=1&resize=450x338&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/5405239/media/14f3f94a79aecc0aafa7d626b445c2f1.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/4243893/media/b5b3352179d5a06d33d2099d769b08d6.png?compress=1&resize=400x300&vertical=top",
        "https://cdn.dribbble.com/users/464226/screenshots/4231450/media/62ab9b94e887341efe14c8f24126cc96.png?compress=1&resize=400x300&vertical=top"
    ]
    return(
        // TODO:Project box container
        <div className="project-box-container text-start">
            <img src={imageList[Math.floor(Math.random()*imageList.length)]} className="image-fluid project-image" alt={alt}  width="100%"/>
            <h5 className='green project-tag'>{tag}</h5>
            <h1 className='project-head'>{head}</h1>
            <a href={link} target="_blank">
                <button className='btn project-preview-button btn-outline-dark'>
                    Preview
                </button>   
            </a>
        </div>
    )
}

export default ProjectContainer;