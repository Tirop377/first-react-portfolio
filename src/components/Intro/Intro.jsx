import React from 'react'
import './Intro.css'
import profilePic from '../../assets/profile_pic.jpg'


const Intro = () => {
  return (
    <div className='introContainer'>
      <div className="left">
        <p className="greeting">Hey, I'm Kevin👋</p>
        <h2><span>Full</span>stack <br/>Developer</h2>
        <p className="description">I'm a fullstack developer based in Kenya, I'll help you build beautiful websites your users will love.</p>
        <div>
          <button className='getinTouchBtn'>Get In Touch</button>
          <button className='browseBtn'>Browse Projects</button>
        </div>
      </div>
      <div className="right">
        <div className="profilePicContainer">
          <div>
            <img src={profilePic} alt="profile" />
          </div>
          
        </div>
      </div>

      
    </div>
  )
}

export default Intro
