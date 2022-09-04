import React from "react";
import "./PetsData.styles.css";

const PetsData = () => {
  return (
    <div className="petsData">
      <form className="myForm">
        <h2>Pets Registration</h2>
        <div className="register_doctors">
          <div className="register_doctorsA">
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
              Breed:
              <input
                type="text"
                className="field"
                placeholder="Breed"
                name=""
              />
            </label>

            <label>
              Tag Number:
              <input
                type="text"
                className="field"
                placeholder="Tag Number"
                name=""
              />
            </label>

            <label>
              Age:
              <input
                type="text"
                className="field"
                placeholder="license_number"
                name="age"
              />
            </label>
          </div>
          <div className="register_doctorsA">
            <label id="location">
              Health Status:
              <select name="location">
                <option value="Healthy">Healthy</option>
                <option value="Sickly">Sickly</option>
                <option value="Bad">Bad</option>
                <option value="Serious">Serious</option>
              </select>
            </label>
            <label id="specialization">
              Life Span:
              <select name="service_specialized" id="specialize_id">
                <option value="1-3">1-3</option>
                <option value="3-6">3-6</option>
                <option value="6-9">6-9</option>
                <option value="Above 9">Above 9</option>
              </select>
            </label>

            <label>
              Color:
              <input
                type="text"
                className="field"
                placeholder="Color"
                name="phone_number"
              />{" "}
            </label>
            <label>
              Notes:
              <input
                type="text"
                className="field"
                placeholder="link to face-image"
                name="pictureLink"
              />
            </label>
          </div>
          <div className="submit_btn">
            <input type="submit" className="registerbtn" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetsData;