import React from 'react'
import './NavBar.styles.css'

const NavBar = () => {
  return (
      <div>
          <div className="logo">
            <h1>Pets first</h1>  
          </div>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Register_doctor</li>
              <li>View_doctors</li>
              <li>Pets data</li>
          </ul>
    </div>
  )
}

export default NavBar