import React from 'react'
import './ViewDoc.styles.css';
import image from '../../assets/img/dog.jpg'
import {useState, useEffect} from 'react'

const ViewDoctors = () => {   
    const url = 'http://localhost:9292/doctors'

    const [doctors, setDoctors] = useState([]);

    const getDocttorsData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDoctors(data)
        console.log(doctors);
    }
    useEffect(() => {
        getDocttorsData()
    },[])
    return (
        <>
            
      <div className="main-container">
          <div className="filter">
                    <h6>Filter by:</h6>
                    <div className='select-container'>

                    {/* filter by location */}
              <label htmlFor="location">Location:</label>
              <select name="location" id="location">
                  <option value="location-1">Location-1</option>
                  <option value="location-2">Location-2</option>
                  <option value="location-3">Location-3</option>
                  <option value="location-4">Location-4</option>
                  <option value="location-5">Location-5</option>
                </select>
                    </div>
                    <div className='select-container'>
                        
                    {/* filter by years of experience */}
              <label htmlFor="experience">Experience:</label>
              <select name="experience" id="experience">
                  <option value="experience-1">experience-1</option>
                  <option value="experience-2">experience-2</option>
                  <option value="experience-3">experience-3</option>
                  <option value="experience-4">experience-4</option>
                  <option value="experience-5">experience-5</option>
                </select>
                    </div>
                    <div className='select-container'>

                    {/* filter by specialization */}
              <label htmlFor="specialization">Specialization:</label>
              <select name="location" id="location">
                  <option value="specialization-1">specialization-1</option>
                  <option value="specialization-2">specialization-2</option>
                  <option value="specialization-3">specialization-3</option>
                  <option value="specialization-4">specialization-4</option>
                  <option value="specialization-5">specialization-5</option>
                </select>
                    </div>
          </div>      
                <div className="main-cards">

                    {
                        doctors && doctors.map((doctor) => {
                            return (
                                <div className="card-container">
                        <div className="location">
                                        <p>location: { doctor.location}</p>
                        </div>
                        <div className="card-img"><img src={ doctor.picture_link} alt="dog-image" /></div>
                        <hr />
                        <div className="card-text">
                                        <p>Name: { doctor.name}</p>
                                        <p>Phone_no: { doctor.phone_number}</p>
                        </div>
                </div>
                            )
                        })
                    }
                    
                    {/* <div className="card-container">
                        <div className="location">
                            <p>location</p>
                        </div>
                        <div className="card-img"><img src={ image} alt="dog image" /></div>
                        <hr />
                        <div className="card-text">
                            <p>Name:</p>
                            <p>Phone_no:</p>
                        </div>
                </div> */}
                    {/* <div className="card-container">
                        <div className="location">
                            <p>location</p>
                        </div>
                        <div className="card-img"><img src={ image} alt="dog image" /></div>
                        <hr />
                        <div className="card-text">
                            <p>Name:</p>
                            <p>Phone_no:</p>
                        </div>
                </div> */}
                    {/* <div className="card-container">
                        <div className="location">
                            <p>location</p>
                        </div>
                        <div className="card-img"><img src={ image} alt="dog image" /></div>
                        <hr />
                        <div className="card-text">
                            <p>Name:</p>
                            <p>Phone_no:</p>
                        </div>
                </div> */}
                </div>      
      </div>
      </>
  )
}

export default ViewDoctors