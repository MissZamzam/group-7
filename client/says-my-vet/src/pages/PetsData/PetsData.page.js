// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";
import "../PetsData/PetsData.styles.css";
const PetsData = () => {
  // state
  const [name, setName] =useState('')
  const [tagNumber, setTagNumber] = useState(0)
  const [petType, setPetType] = useState('Dogs')
  const [petBreed, setPetBreed] =useState('German Shepherd')
  const [phoneNumber, setPhoneNumber] =useState('')

  return (
    <div className="registerPets">
      <form className="myForm">
        <h2>Register Your Pets Here</h2>
        <div className="register_pets">
          <div className="details">
            <label>
              Name:
              <input
                type="text"
                className="field"
                placeholder="name"
                value={ name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </label>
          </div>
          <div className="details">
            <label>
              Tag_number:
              <input
                type="text"
                className="field"
                placeholder="tag_number"
                value={tagNumber}
                onChange={(e)=> {setTagNumber(e.target.value)}}
              />
            </label>
          </div>
          <div className="details">
            <label id="location">
              Pet_type:
              <select value={petType} className="field" onChange={(e)=>{setPetType(e.target.value) }}>
                <option value="Dogs">Dogs</option>
                <option value="Cats">Cats</option>
                <option value="Fish">Fish</option>
                <option value="Rabbits">Rabbits</option>
                <option value="Birds">Birds</option>
              </select>
            </label>
          </div>
          <div className="details">
            <label id="specialization">
              Pet_Breeds:
              <select
                value={petBreed}
                id="specialize_id"
                className="field"
                onChange={(e)=> {setPetBreed(e.target.value)}}
              >
                <option value="German Shepherd">German Shepherd</option>
                <option value="">Rex Rabbit</option>
                <option value="Ragdoll">Ragdoll</option>
                <option value="">Fantail Fish</option>
                <option value="Eskimo Dog">Eskimo Dog</option>
                <option value="">Angora Rabbit</option>
                <option value="Munchkin Cat">Munchkin Cat</option>
                <option value="Cockateil">Cockateil</option>
                <option value="">Koi Fish</option>
                <option value="Pomeranian">Pomeranian</option>
              </select>
            </label>
          </div>
          <div className="details">
            <label>
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                className="field"
                placeholder="phone_number"
                onChange={(e)=> {setPhoneNumber(e.target.value)}}
              />
            </label>
          </div>
          <div className="details">
            <label>
              Pet_color:
              <input
                type="text"
                name="pictureLink"
                className="field"
                placeholder="your pet's color"
              />
            </label>
          </div>
          <div className="details">
            <label>Life_span:</label>
            <select name="life-span" className="details">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6 and more</option>
            </select>
          </div>
          <div className="details">
            <label id="specialization">Specialization:</label>
            <select
              name="service_specialized"
              id="specialize_id"
              className="details"
            >
              <option value="Dentistry">Dentistry</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Eskimo Dog">Nutrition</option>
              <option value="Ragdoll">Theriogenology</option>
              <option value="Opthalmology">Ophtalmology</option>
            </select>
          </div>
          <input type="submit" className="registerbtn" />
        </div>
        {/* <button type="submit" onChange={handleSubmit}>Submit</button> */}
      </form>
    </div>
  );
};
export default PetsData;
