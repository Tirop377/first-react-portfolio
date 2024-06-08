import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigationContainer'>
        <div className="logoContainer">
            <b><span>&lt;</span>Kevin<span>/&gt;</span></b>
        </div>

        <ul className='navLinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Me</a></li>
        </ul>

        <div>
            <span><a href='#'>Contact Me</a></span>
        </div>
      
    </div>
  )
}

export default Navigation
