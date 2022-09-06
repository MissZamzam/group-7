
import React from 'react'
import "./RegDoc.styles.css"
import { useState } from 'react'

const RegDoc = () => {
  // state for controlled input fields
  const [name, setName] = useState('')
  const [location, setLocation] = useState('Nairobi')
  const [license_number, setLicenceNumber] = useState(11111111)
  const [specialization, setSpecialization] = useState('Dentistry')
  const [phone_number, setPhone_number] = useState(17955457183)
  const [picture_link, setpicture_link] = useState('fygggfff')
  const [years_of_experience, setYears_of_experience] = useState(2)
  const [toasty, setToasty] = useState(null)
  

  // const history = useNavigate()
// handle form submission
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const doctor = {name, license_number, location, specialization, phone_number, picture_link, years_of_experience}
    console.log(doctor)
    // notify()
    // make post request
    fetch('http://localhost:9292/doctors', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(doctor)
  
    }).then(() => {
      console.log("New doctor added successfuly");
    })
    // history.push('/')
  }

  return (
    <div class="container">
        <form action="#">
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
                    <button className="button">Register</button>
        </div>
        </form>
    </div>

  )
}

export default RegDoc