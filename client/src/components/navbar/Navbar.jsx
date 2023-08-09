import React from 'react'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <span className='text'>ThirdJob</span>
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>ThirdJob Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a Seller</span>
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar