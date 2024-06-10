import React from 'react'
import './Footer.css'
import { FiLinkedin } from "react-icons/fi";
import { SlSocialDribbble } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footerArea'>
        <div className="footerNavLinks">
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <ul>
                <li><a href="#"> <IoLogoInstagram/></a></li>
                <li><a href="#"> <FiGithub/> </a></li>
                <li><a href="#"> <SlSocialDribbble/> </a></li>
                <li><a href="#"> <FiLinkedin/> </a></li>
            </ul>
        </div>


        <div className="footerBottom">
            <div className="left">
                <p>Intrested in working together?</p>
                <div>
                    <button className='getinTouchBtn'>Get In Touch</button>
                    <button className='browseBtn'>Browse Projects</button>
                </div>
            </div>

            <div className="rightBF">
                <p>&copy;2024 All Rights Reserved.</p>
                <p>Made by kevin@superCool</p>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
