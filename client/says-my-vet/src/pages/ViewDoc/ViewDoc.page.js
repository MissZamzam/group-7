import React from 'react'
import './ViewDoc.styles.css';
import useFetch from '../../custom-hooks/useFetch';
// import image from '../../assets/img/dog.jpg'
// import {useState, useEffect} from 'react'
const ViewDoctors = () => {   
    
// state was here 
    const { data: doctors, loading } = useFetch('http://localhost:9292/doctors')
    
    const handleLocationChange = (e) => {
        console.log(e.target.value)
        
    }
//  useEffect was here
    return (
        <>
            
      <div className="main-container">
          <div className="filter">
                    <h6>Filter by:</h6>
                    <div className='select-container'>

                    {/* filter by location */}
              <label htmlFor="location">Location:</label>

                        <select name="location" id="location">
                            {doctors.map(doctor => (
                                <option value="location-2">{ <p>{doctor.location}</p> }</option>
                           ))}
                         </select>
            
                    </div>
                    <div className='select-container'>
                        
                    {/* filter by years of experience */}
              <label htmlFor="experience">Experience:</label>
                        <select name="experience" id="experience">
                             {doctors.map(doctor => (
                                <option value="experience">{ <p>{doctor.years_of_experience}</p> }</option>
                           ))}
       
                </select>
                    </div>
                    <div className='select-container'>

                    {/* filter by specialization */}
              <label htmlFor="specialization">Specialization:</label>
                        <select name="location" id="location" onChange={handleLocationChange}>
                              {doctors.map(doctor => (
                                <option value="experience">{ <p>{doctor.specialization}</p> }</option>
                           ))}
               
                </select>
                    </div>
          </div>      
                <div className="main-cards">
 
            
                      {doctors && doctors.map((doctor) => {
                            return (
                                <div className="card-container">
                        <div className="location">
                                        <p>location: { doctor.location}</p>
                        </div>
                        <div className="card-img"><img src={ doctor.picture_link} alt={doctor.name} /></div>
                        <hr />
                        <div className="card-text">
                                        <p>Name: { doctor.name}</p>
                                        <p>Phone_no: { doctor.phone_number}</p>
                        </div>
                </div>
                            )
                        })
                    }
                    
                   
                </div>      
      </div>
      </>
  )
}

export default ViewDoctors