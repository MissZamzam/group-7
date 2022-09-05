import React, {useState} from 'react'
import "./RegDoc.styles.css"

const RegDoc = () => {
  // state for controlled input fields
  const [name, setName] = useState('')
  const [licenceNo, setLicenceNo] = useState('')
  const [location, setLocation] = useState('Nairobi')
  const [specialization, setSpecialization] = useState('Dentistry')
  const [phone, setPhone] = useState('')
  const [picLink, setPicLink] = useState('')
  const [experience, setExperience]= useState('')
  return (
<div className='registerDoctors'>
  <form className="myForm" > 
    <h2>Register with Us</h2>
    <div className="register_doctors">
      <div className='register_doctorsA'>
        <label>Name:
          <input type="text" className="field" placeholder="name" value={name} onChange={(e)=> setName(e.target.value) } />
        </label>
        <label>License_number:
              <input type="text" className="field" placeholder="license_number" value={licenceNo} onChange={ (e)=> setLicenceNo(e.target.value)} />
        </label>
      </div>
    <div className='register_doctorsA'>
        <label id='location'>Location: 
          <select  value={location} onChange={(e)=> setLocation(e.target.value)} >
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Kisumu">Kisumu</option>
          </select>
        </label>
        <label id='specialization'>Specialization:
              <select value={specialization} onChange={ (e)=>setSpecialization(e.target.value)} id="specialize_id" >
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
              <input type="text" value={phone} className="field" placeholder="phone_number" onChange={(e) => setPhone(e.target.value)} />
            </label>
    <label>Picture Link:
              <input type="text" value={picLink} className="field" placeholder="link to face-image" onChange={(e) => setPicLink(e.target.value)} />
    </label>
    </div>
    <div className='register_doctorsA'>
    <label>Years of Experience
    <select value={experience} onChange={(e)=> {setExperience(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6 and more</option>
    </select>
    </label>
    </div>
    <div className='submitBtn'>
    <button type="submit" className="registerbtn"> Submit</button>    
    </div>                  
      </div>
      </form> 
      <p>{name}</p>
      <p>{licenceNo}</p>
      <p>{picLink}</p>
      <p>{phone}</p>
      <p>{specialization}</p>
      <p>{location}</p>
      <p>{experience}</p>
      
</div>
  )
}

export default RegDoc