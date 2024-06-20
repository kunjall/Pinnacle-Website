import React from "react";
import "../../assets/styles/winning.css";
import ProtectiveImage from "../../assets/images/equipment.png";

const Protective = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Production of Protective Equipment</h1>
          <p className="winning-paragraph">
            Our commitment to safety and health is demonstrated through our
            comprehensive production of protective equipment.{" "}
            <b>
              <p style={{ color: "#F6A126" }}>
                We manufacture high-quality PPE gear, including specialized
                masks, face shields, body shields.
              </p>
            </b>
          </p>
        </div>
        <div className="winning-image">
          <img src={ProtectiveImage} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Protective;
