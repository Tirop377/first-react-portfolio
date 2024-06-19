import React from 'react'
import './ProjectsPage.css'
import Project from '../../components/Project/Project'
import image from '../../assets/p2.avif'
import image1 from '../../assets/pl4.avif'
import image2 from '../../assets/projectImage.avif'
import image3 from '../../assets/ps4.avif'
import image4 from '../../assets/small.avif'

const ProjectsPage = () => {
  return (
    <div className='projectsPage'>
      <div className="projectsPageIntro">
        <h2>
          My <span className='mainColor'>Best</span> Creations
        </h2>
        <p>
          Designing and Developing Robust and Stylish Web Applications for a Decade and Counting
        </p>
      </div>

      <div className="projectPageProjectContainer">
        <Project image={image} title={"FoodieFinder"}/>
      </div>
      <div className="projectPageProjectContainer">
        <Project image={image1} title={"EventPlanner"}/>
      </div>
      <div className="projectPageProjectContainer">
        <Project image={image2} title={"EcoCart"}/>
      </div>
      <div className="projectPageProjectContainer">
        <Project image={image3} title={"TaskFlow"}/>
      </div>
      <div className="projectPageProjectContainer">
        <Project image={image4} title={"FoodDelivery"}/>
      </div>

    </div>
  )
}

export default ProjectsPage
