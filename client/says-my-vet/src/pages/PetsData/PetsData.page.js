import React from 'react'
import "../PetsData/PetsData.styles.css";

const PetsData = () => {
  return (
    <div className="registerPets">
      <form className="myForm">
        <h2>Register Your Pets Here</h2>
        <div className="register_pets">
          <div className="register_petsA">
            <label>
              Name:
              <input
                type="text"
                className="field"
                placeholder="name"
                name="name"
              />
            </label>
            <label>
              Tag_number:
              <input
                type="text"
                className="field"
                placeholder="tag_number"
                name="age"
              />
            </label>
          </div>
          <div className="register_petsA">
            <label id="location">
              Pet_type:
              <select name="location">
                <option value="Dogs">Dogs</option>
                <option value="Cats">Cats</option>
                <option value="Fish">Fish</option>
                <option value="Rabbits">Rabbits</option>
                <option value="Birds">Birds</option>
              </select>
            </label>
            <label id="specialization">
              Pet_Breeds:
              <select name="service_specialized" id="specialize_id">
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
          <div className="register_petsA">
            <label>
              Phone Number:
              <input
                type="text"
                name="phone_number"
                className="field"
                placeholder="phone_number"
              />
            </label>
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
          <div className="register_petsA">
            <label>
              Life_span
              <select name="life-span">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6 and more</option>
              </select>
            </label>
            <label id="specialization">
              Specialization:
              <select name="service_specialized" id="specialize_id">
                <option value="Dentistry">Dentistry</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Eskimo Dog">Nutrition</option>
                <option value="Ragdoll">Theriogenology</option>
                <option value="Opthalmology">Ophtalmology</option>
              </select>
            </label>
          </div>
          <input type="submit" className="registerbtn" />
        </div>
      </form>
    </div>
  );
};

export default PetsData;