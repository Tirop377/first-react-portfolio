import React from 'react'
import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import Intro from '../../components/Intro/Intro'
import ProjectsArea from '../../components/ProjectsArea/ProjectsArea'
import Skills from '../../components/Skills/Skills'
import ExperienceArea from '../../components/ExperienceArea/ExperienceArea'
import MyStoryArea from '../../components/MyStoryArea/MyStoryArea'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navigation/>
        <Intro/>
        <ProjectsArea/>
        <Skills/>
        <ExperienceArea/>
        <MyStoryArea/>
        <Footer/>
    </div>
  )
}

export default Home
