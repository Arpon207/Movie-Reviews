import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-container">
            <div className="header-logo">
                <p>
                    Movie Reviews
                </p>
            </div>
            <div className="header-buttons">
                <a href=' '>Login</a>
                <a href=' '>Register</a>
            </div>
        </div>
    </div>
  )
}

export default Header