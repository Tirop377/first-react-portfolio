import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigationContainer'>
        <div className="logoContainer">
            <b><span>&lt;</span>Kevin<span>/&gt;</span></b>
        </div>

        <ul className='navLinks'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/about"}a href="#">About Me</Link></li>
        </ul>

        <div>
            <span><Link to={"/contact"}>Contact Me</Link></span>
        </div>
      
    </div>
  )
}

export default Navigation
