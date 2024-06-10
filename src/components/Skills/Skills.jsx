import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillsSection'>
        <h3>Skills<span>.</span></h3>

        <div className="skillCon">
            <div>
                <h3>Frontend</h3>
                <ul>
                    <li>Javascript</li>
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>CSS3</li>
                </ul>
            </div>

            <div>
                <h3>Backend</h3>
                <ul>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                    <li>Vercel</li>
                </ul>
            </div>

            <div>
                <h3>Soft Skills</h3>
                <ul>
                    <li>Effective communication</li>
                    <li>Leadership</li>
                    <li>Commitment</li>
                    <li>Collaboration</li>
                </ul>
            </div>
        </div>
       
      
    </div>
  )
}

export default Skills
