import React from 'react'
import './FoodieFinder.css'
import image from '../../assets/p2.avif'
import image1 from '../../assets/pl4.avif'
import image2 from '../../assets/projectImage.avif'
import profilePic from '../../assets/profile_pic.jpg'
import Project from '../../components/Project/Project'

const FoodieFinder = () => {
  return (
    <div className='foodieFinder'>
        <div className="pIntro">
            <div className="pTitle">
                <h2>FoodieFinder<span className='mainColor'>.</span></h2>
                <p>Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.</p>
            </div>
            <div className="pImage">
                <img src={image} alt="" />
            </div>
        </div>

        <div className="pMain">
            <div className="pLeft">
                <div className='stickyDiv'>
                    <div>
                        <span className='smallFont'>Client</span>
                        <span className='largeFont'>James Mtemi</span>
                    </div>

                    <div>
                        <span className='smallFont'>Year</span>
                        <span className='largeFont'>2020</span>
                    </div>

                    <div>
                        <span className='smallFont'>My Role</span>
                        <span className='largeFont'>Software Engineer</span>
                    </div>
                </div>
            </div>

            <div className="pRight">
                <div className="pAbout">
                    <h3>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="pClient">
                    <h3>Our Client</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="pChallenges">
                    <h3>Challenges</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="pResults">
                    <h3>Results</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
        </div>

        < div className="pMoreImages">
            <div className='pDouble'>
                <div>
                    <img src={image} alt="" />
                </div>

                <div>
                    <img src={image} alt="" />
                </div>
            </div>

            <div>
                <img src={image} className='pLargeImage' alt="" />
            </div>  
        </div>

        <div className="comment">
            <div className='commentContainer'>
                <p>
                    Luca was very good in the creation of our website, very attentive and willing to make changes to every request. He also has a lot of good ideas and can find the best solution based on your needs. I recommend Luca to everyone, a good professional and a great person.
                </p>

                <div className='person'>
                    <img src={profilePic} alt="" />
                    <div>
                        <h4>Mercy Kitur</h4>
                        <span>CFO at Spotify</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="moreProjects">
            <h3 className='morePH3'>More Projects<span className='mainColor'>.</span></h3>
            <div className='twoMoreProjects'>
                <Project image={image1} title={"TaskFlow"}/>
                <Project image={image2} title={"EcoCart"}/>
            </div>  
        </div>

      
    </div>
  )
}

export default FoodieFinder
