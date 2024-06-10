import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Experience = ({companyName, title, time, tasks}) => {
  return (
    <div className="expDescription">
        <div className='apple'>
            <h4>{title} <span className='mainColor'>@{companyName}</span></h4>
            <p>{time}</p>
        </div>
        {
            tasks.map((task, index)=>{
                return (
                    <div key={index} className='expDesc'>
                        <FaCheck className='mainColor icon'/>
                        <p>{task}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Experience
