import React from 'react'
import './Footer.css'
import { FiLinkedin ,FiGithub } from "react-icons/fi";
import { SlSocialDribbble } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerArea'>
        <div className="footerNavLinks">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
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
