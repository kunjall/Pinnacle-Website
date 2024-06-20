import React from "react";
import "../../assets/styles/winning.css";
import Nano from "../../assets/images/nano.png";

const Nanotech = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Nanotechnology</h1>
          <p className="winning-paragraph">
            Our advanced manufacturing capabilities extend to the production of
            <b>
              <p style={{ color: "#F6A126" }}>
                nanotechnology-enhanced artillery guns, ammunition, barrels, and
                various other weapons.
              </p>
            </b>
          </p>
        </div>
        <div className="winning-image">
          <img src={Nano} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Nanotech;
