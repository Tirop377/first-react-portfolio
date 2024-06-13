import React from 'react'
import './Home.css'
import Intro from '../../components/Intro/Intro'
import ProjectsArea from '../../components/ProjectsArea/ProjectsArea'
import Skills from '../../components/Skills/Skills'
import ExperienceArea from '../../components/ExperienceArea/ExperienceArea'
import MyStoryArea from '../../components/MyStoryArea/MyStoryArea'



const Home = () => {
  return (
    <div>
        <Intro/>
        <ProjectsArea/>
        <Skills/>
        <ExperienceArea/>
        <MyStoryArea/>
    </div>
  )
}

export default Home
