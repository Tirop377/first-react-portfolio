import React from 'react'
import './MyExperienceArea.css'

const MyExperienceArea = () => {
  return (
    <div className='myExperienceArea'>
        <h3>My Experience<span className='mainColor'>.</span></h3>
        <OneExperience value={"01"} title={"Software Developer"} company={"Webflow"}/>
        <OneExperience value={"02"} title={"Frontend Developer"} company={"Apple"}/>
        <OneExperience value={"03"} title={"UI Engineer"} company={"Spotify"}/>
        <OneExperience value={"04"} title={"Frontend Developer"} company={"Microsoft"}/>
        <OneExperience value={"05"} title={"Engineer"} company={"Webflow"}/>
    </div>
  )
}


const OneExperience = ({value, title, company})=>{
    return (
        <div className='oneExperience'>
            <div className="count">
                <h4>{value}</h4>
                <div></div>
            </div>

            <div className="expRight">
                <div className="expTitle">
                    <h5>{title}</h5>
                    <h4>{company}</h4>
                </div>
                <div className="expDescription">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.
                    </p>
                    <p>
                        Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default MyExperienceArea
