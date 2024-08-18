import React from 'react'
import './Hero.css'
import {VisitorsImage, AiImage} from '../../assets'
const Hero = () => {
  return (
    <div className="hero-container">
    <div className="hero__text">
      <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <span className="enter">
        <input type="text" placeholder="Your email address" />
        <button type="submit">Get Started</button>
      </span>
      <span className="side">
        <img src={VisitorsImage} alt="Stack of visitors' images" />
        <small>1,600 people requested access a visit in last 24 hours</small>
      </span>
    </div>
    <img src={AiImage} alt="Ai Image" />

    </div>
  )
}

export default Hero