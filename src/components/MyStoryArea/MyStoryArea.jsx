import React from 'react'
import './MyStoryArea.css'

const MyStoryArea = () => {
  return (
    <div className='myStorySection'>
        <h2>My Story<span className='mainColor'>.</span></h2>
        <p>
            My journey as a front-end developer started back in 2010, working as a <span className='mainColor'>freelancer</span> for clients all over the world for several years.
        </p>
        <p>
            After being on my own for a while, I decided to enter the corporate world, and I started working as a software developer at <span className='mainColor'>Webflow</span>, the same platform I was using with my freelance clients.
        </p>
        <p>
            After some exciting months of work at Webflow, I decided to transition to <span className='mainColor'>Stripe</span>, where I returned what I love: front-end development. 
        </p>
        <p>
            My <span className='mainColor'>success</span> quickly compounded I started receiving job offers from the biggest names in the industry.
        </p>
        <p>
            All these opportunities led me to travel the world. Eventually, however, I decided to settle down for a more calm and simple routine, and I'm now working at <span className='mainColor'>Apple</span>. And you know what? I love what I do! 💜
        </p>
    </div>
  )
}

export default MyStoryArea
