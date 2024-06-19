import React from 'react'
import './Project.css'
import { PiArrowCircleUpRightBold } from "react-icons/pi";
const Project = ({image, title}) => {
  return (
    <div className='project'>
        <div className="projectImageContainer">
            <img src={image} alt="" />
        </div>
        <div className="projectTitleContainer">
            <h3>{title}</h3>
            <a href="#"><PiArrowCircleUpRightBold className='icon'/></a>
        </div>
        <div className="projectDescription">
            <p>Task management system with drag-and-drop, real-time collaboration, and responsive layout.</p>
        </div>
      
    </div>
  )
}

export default Project
