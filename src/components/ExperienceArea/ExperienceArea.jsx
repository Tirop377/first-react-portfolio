import React, { useState } from 'react'
import './ExperienceArea.css'
import Experience from '../Experience/Experience'


const ExperienceArea = () => {

    const companyExperience = [
        {
            companyName: "Apple",
            title:"Engineer",
            time:"Present",
            tasks: [
                "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"
            ]   
        },

        {
            companyName: "Microsoft",
            title:"Frontend Developer",
            time:"January - April 2018",
            tasks: [
                "Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.",
                "Helped solidify a brand direction for blistabloc that spans both packaging and web.",
                "Interfaced with clients on a weekly basis, providing technological expertise."
            ]   
        },
        {
            companyName: "Stripe",
            title:"Frontend Developer",
            time:"January - June 2017",
            tasks: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ]   
        },
        {
            companyName: "Spotify",
            title:"UI Engineer",
            time:"July - December 2017",
            tasks: [
                "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                "Work with a variety of different languages, platforms, frameworks, and content management systems.",
                "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis."
            ]   
        },
        {
            companyName: "Webflow",
            title:"Software Developer",
            time:"July - December 2016",
            tasks: [
                "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
                "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
                "Integrated interactive data analytics features into the platform."
            ]   
        }
    ]

    const [company, setCompany] = useState("Apple");
  return (
    <div className='experienceArea'>
        <h2>Experience<span className='mainColor'>.</span></h2>
        <div className="expCon">
            <div className="companies">
                <button onClick={()=>setCompany("Apple")} className={company === "Apple" ? 'clborder' : ""} >Apple</button>
                <button onClick={()=>setCompany("Spotify")} className={company === "Spotify" ? 'clborder' : ""} >Spotify</button>
                <button onClick={()=>setCompany("Microsoft")} className={company === "Microsoft" ? 'clborder' : ""}>Microsoft</button>
                <button onClick={()=>setCompany("Stripe")} className={company === "Stripe" ? 'clborder' : ""}>Stripe</button>
                <button onClick={()=>setCompany("Webflow")} className={company === "Webflow" ? 'clborder' : ""}>Webflow</button>
            </div>
            {
                companyExperience.map((Company, index)=>{
                        return Company.companyName === company ? (
                            <Experience key={index} companyName={Company.companyName} title={Company.title} time= {Company.time} tasks={Company.tasks}/>
                        ) : <></>
                })
            }
            
        </div>
    </div>
  )
}

export default ExperienceArea
