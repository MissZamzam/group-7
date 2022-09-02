import React from 'react'
import "./RegDoc.styles.css"

const RegDoc = () => {
  return (
    <div className='registerDoctors'>
          <form className="myForm" > 
              <h2>Register with Us</h2>
              <div className="register_doctors">
                <div className='register_doctorsA'>
                  <label>Name:
                <input type="text" className="field" placeholder="name" name="name" /></label>
                <label>License_number:
              <input type="text"  className="field" placeholder="license_number" name="age" /></label>
              </div>
              <div className='register_doctorsA'>
              <label id='location'>Location: 
              <select  name="location">
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Kisumu">Kisumu</option>
              </select>
              </label>
              <label id='specialization'>Specialization:
              <select name="service_specialized" id="specialize_id" >
                  <option value="Dentistry">Dentistry</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Nutrition">Nutrition</option>
                  <option value="Theriogenology">Theriogenology</option>
                  <option value="Opthalmology">Ophtalmology</option>
              </select>
              </label>              
              </div>
              <div className='register_doctorsA'>
              <label>Phone Number:
              <input type="text" name="phone_number"  className="field" placeholder="phone_number" /> </label>
              <label>Picture Link:
              <input type="text" name="pictureLink"  className="field" placeholder="link to face-image"/></label>
              </div>
              <div className='register_doctorsA'>
              <label>Years of Experience
              <select name="years_of_experience">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6 and more</option>
              </select>
              </label>
              </div>
              <div className="submit_btn">
              <input type="submit" className="registerbtn"/>    
              </div>                  
                </div>
      </form>        
</div>
  )
}

export default RegDoc