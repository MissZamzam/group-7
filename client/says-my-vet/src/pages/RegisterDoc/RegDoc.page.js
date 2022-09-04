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
                  <div class="input-box">
                    <span class="details">Specialization</span>
                    <select name="" id="" >
                        <option value="1">Dentistry</option>
                        <option value="2">Nutrition</option>
                        <option value="3">Theriogenology</option>
                        <option value="4">Ophtalmology</option>
                    </select>
                </div>
                <div class="input-box">
                    <span class="details">Phone</span>
                    <input type="text" placeholder="Enter your number" required />
                </div>
                <div class="input-box">
                    <span class="details">Picture Link</span>
                    <input type="text" placeholder="link to face image" required />
                </div>
                <div class="input-box">
                    <span class="details">Years of Experience</span>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6 and more</option>
                    </select>
                    </div>
                    <div class="button" id="btn">
                        <input type="submit" value="Register" />
                    </div>
        </div>
        <form action="#"></form>
    </div>

  )
}

export default RegDoc