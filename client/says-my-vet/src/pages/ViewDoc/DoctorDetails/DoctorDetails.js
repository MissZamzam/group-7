import React from 'react'
import {useParams} from 'react-router-dom'

const DoctorDetails = () => {
    const {id} = useParams()
  return (
      <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          DoctorDetails {id} </div>
  )
}

export default DoctorDetails