import React from 'react'
import HomeImg from '../images/intro-pro-bg.jpg';

const Home = () => {
  return (
    <div className='homepage'>
      <div className='home-cont'>
        <img className='home-img' src={HomeImg} alt='img not found' />
      </div>
      <div className='content'>
        <p className='name-head'>
          {/* <span className='part1'>I'M</span> */}
          <span className='part2'>CONSTRUCTION CORP.</span>
        </p>
        <span className='title'>WE BUILD GREAT PROJECTS</span>
        <div className='btn-part'>
          <button className='btn-contact'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home
