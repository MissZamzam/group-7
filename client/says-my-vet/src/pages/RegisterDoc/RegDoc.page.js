import React, { useState } from 'react'


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
    
    <div className='registerDoctors'>
  <form className="myForm" onSubmit={handleSubmit} > 
    <h2>Register with Us</h2>
    <div className="register_doctors">
      <div className='register_doctorsA'>
        <label>Name:
          <input type="text" className="field" placeholder="name" value={name} onChange={(e)=> setName(e.target.value) } />
        </label>
        <label>License_number:
              <input type="text" className="field" placeholder="license_number" value={license_number} onChange={ (e)=> setLicenceNumber(e.target.value)} />
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
              <input type="text" value={phone_number} className="field" placeholder="phone_number" onChange={(e) => setPhone_number(e.target.value)} />
            </label>
    <label>Picture Link:
              <input type="text" value={picture_link} className="field" placeholder="link to face-image" onChange={(e) => setpicture_link(e.target.value)} />
    </label>
    </div>
    <div className='register_doctorsA'>
    <label>Years of years_of_experience
    <select value={years_of_experience} onChange={(e)=> {setYears_of_experience(e.target.value)}}>
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
      {/* <p>{name}</p>
      <p>{licence_number}</p>
      <p>{picLink}</p>
      <p>{phone_number}</p>
      <p>{specialization}</p>
      <p>{location}</p>
      <p>{years_of_experience}</p> */}
    
      
    </div>
  )
}

export default RegDoc