import React from 'react'
import './AboutPage.css'
import { FaRegStar } from "react-icons/fa6";
import MyStoryArea from '../../components/MyStoryArea/MyStoryArea'
import MyExperienceArea from '../../components/MyExperienceArea/MyExperienceArea';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPageIntro'>
        <h1>About Me<span className='mainColor'>.</span></h1>
        <p>
          Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
        </p>
      </div>

      <div className="animeMap">
        <div className='stackAnimationContainer'>
          <h2>My Stack <FaRegStar className='mainColor'/></h2>
          <div className='animeContainer'>
            <div className='movingRow anime1'>
              <span>UI/UX Design</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Responsive Design</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Wireframing</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>User Research</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Commitment</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Leadership</span>
            </div>

            <div className='movingRow anime2'>
              <span >ReactJS</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Javascript</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>NextJS</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>CSS3</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Commitment</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Leadership</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Commitment</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Leadership</span>
            </div>

            <div className='movingRow anime3'>
              <span>NodeJS</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>ExpressJs</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Vercel</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>MongoDB</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Effective communication</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Collaboration</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Commitment</span>
              <span className="star"><FaRegStar className='mainColor'/></span>
              <span>Leadership</span>
            </div>
          </div>
        </div>
        <div className="mapContainer">
          <h2>My Special Place.</h2>
          <div className='map'>
          </div>
        </div>
      </div>
      <MyStoryArea/>
      <MyExperienceArea/>

      
    </div>
  )
}

export default AboutPage
