import React from "react";
import "../../assets/styles/winning.css";
import MakeImage from "../../assets/images/makeinindia.png";

const MakeinIndia = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Make in India Initiative</h1>
          <p className="winning-paragraph">
            Under the "Make in India Initiative," we are proud to contribute to
            the nation's self-reliance and technological advancement through a
            variety of projects. <br />
            <b>
              <p style={{ color: "#F6A126" }}>
                We manufacture and assemble critical parts for the AK-203 at the
                Indo-Russian Rifles Private Limited (IRRPL) facility.
                Additionally, we are developing armored vehicles with advanced
                technology from Turkey. Our capabilities in GPS and SUE surveys
                provide comprehensive data for infrastructure planning, and we
                also utilize Ground Penetrating Radar (GPR).
              </p>
            </b>
          </p>
        </div>
        <div className="winning-image">
          <img src={MakeImage} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default MakeinIndia;
