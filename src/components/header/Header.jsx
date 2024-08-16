import React from 'react'
import './Header.css'
import {HeaderLogo} from '../../assets'
 const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        <img src="{HeaderLogo}" alt="Header logo" />
        <a href="#">Home</a>
        <a href="#">What is GPT??</a>
        <a href="#">OpenAI</a>
        <a href="#">Case Studies</a>
        <a href="#">Library</a>
      </div>
      <p>Sign In <span>Sign up</span></p>
    </div>
  )
}

export default Header