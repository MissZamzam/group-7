import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../custom-hooks/useFetch'
// const history = useHistory()

const DoctorDetails = () => {

  const { id } = useParams()
  const {data: doctor, error, loading } = useFetch('http://localhost:9292/doctors/' + id)

  const handleDelete = () => {
    fetch('http://localhost:9292/doctors/' + doctor.id, {
      // mode: 'no-cors',
      method: 'DELETE'
    }).then(()=>{
      console.log(id)
    })
  }
  return (
    <div>
      {
        doctor && (
      <div className="container">
       <img src={doctor.picture_link} alt={doctor.name} />
        <div className="img">{doctor.name}
        </div>
        </div>
        )
      }
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default DoctorDetails