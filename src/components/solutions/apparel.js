import React from "react";
import "../../assets/styles/winning.css";
import Apparels from "../../assets/images/apparels.png";

const Apparel = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Apparels Manufacturing</h1>
          <p className="winning-paragraph">
            Our apparel manufacturing encompasses a wide range of specialized
            clothing designed for various needs and environments.{" "}
            <b>
              <p style={{ color: "#F6A126" }}>
                We offer technical clothing, bullet proof jackets, fire
                resistant clothing and wind resistant clothing shields.
                Additionally, we offer a diverse range of other apparel.
              </p>
            </b>
          </p>
        </div>
        <div className="winning-image">
          <img src={Apparels} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Apparel;
