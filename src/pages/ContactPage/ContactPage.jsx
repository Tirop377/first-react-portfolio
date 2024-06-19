import React from 'react'
import './ContactPage.css'
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import image from '../../assets/profile_pic.jpg'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <div className="contactPageIntro">
        <div className="cLeft">
          <h3>Get in Touch<span className='mainColor'>.</span></h3>
          <p className='firstP'>
            Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className='contacts'>
            <div>
              <span><LuPhone/></span>
              <p>kevin@suppercool.com</p>
            </div>
            <div>
              <span><TfiEmail/></span>
              <p>+254-115-555-036-1</p>
            </div>
          </div>
        </div>
        <div className="cRight">
          <div>
            <img src={image} alt="" />
          </div>

        </div>
      </div>

      
    </div>
  )
}

export default ContactPage;
