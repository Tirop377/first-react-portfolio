import React from 'react'
import { FaCheck } from "react-icons/fa6";
import PropTypes from 'prop-types'

const Experience = ({companyName, title, time, tasks}) => {
  return (
    <div className="expeDescription">
        <div className='apple'>
            <h4>{title} <span className='mainColor'>@{companyName}</span></h4>
            <p>{time}</p>
        </div>
        {
            tasks.map((task, index)=>{
                return (
                    <div key={index} className='expDesci'>
                        <span><FaCheck className='mainColor icon'/></span>
                        <p>{task}</p>
                    </div>
                )
            })
        }
        
    </div>
  )
}
Experience.propTypes = {
    companyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    tasks: PropTypes.object.isRequired
}
export default Experience
