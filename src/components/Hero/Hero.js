import React from 'react'
import '../../App.css'
import './Hero.css'

function Hero() {
  return (
    <>
    <div className="hero-container">
    </div>
      <div className="hero-text">
        <h1>Welcome to our Book Store</h1>
        <p>We are the test community at RoS and have created this book store front end using React.</p>
        <p>It gets it's data from our bookstore API written as a Node microservice for our learning.</p>
      </div>
      </>
  )
}

export default Hero