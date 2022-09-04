import React from 'react'
import "./RegDoc.styles.css"

const RegDoc = () => {
  return (
    <div class="container">
        <h2 class="title">Register with Us</h2>
        <div class="user-details">
        <div class="input-box">
                    <span class="details">Name</span>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div class="input-box">
                    <span class="details">License_number</span>
                    <input type="text" placeholder="License_number" required />
                </div>
                <div class="input-box">
                    <span class="details">Location</span>
                    <select name="" id="" >
                        <option value="1">Nairobi</option>
                        <option value="2">Mombasa</option>
                        <option value="3">Nakuru</option>
                        <option value="4">Kisumu</option>
                    </select>              
                  </div>
              
        </div>
        <form action="#"></form>
    </div>

  )
}

export default RegDoc