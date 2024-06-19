import React from 'react'
import './ProjectsArea.css'
import Project from '../Project/Project';
import largeImage from '../../assets/pl4.avif'
import smallImage from '../../assets/ps4.avif'

const ProjectsArea = () => {
  return (
    <div className='projectsSection'>
      <h2>Projects<span>.</span></h2>
      <div className="projectsContainer">
        <div className="small-large">
          <Project image ={smallImage} title={"FoodieFinder"}/>
          <Project image ={largeImage} title={"EventPlanner"}/>
        </div>
        <div className="large-small">
          <Project image ={largeImage} title={"EcoCart"}/>
          <Project image ={smallImage} title={"TaskFlow"}/>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectsArea;
