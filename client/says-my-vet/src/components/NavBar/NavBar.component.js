import React from 'react'
import './NavBar.styles.css'

const NavBar = () => {
  return (
      <div className="nav_bar">
          <div className="logo">
            <h1>Pets <em>First</em></h1>  
          </div>
          <div className='routes'> <ul>
              <li>Home</li>
              <li>About</li>
              <li>Register_doctor</li>
              <li>View_doctors</li>
              <li>Pets data</li>
          </ul>

          </div>
         
          </div>
    
  )
}

export default NavBar