import React from "react";
import "../../assets/styles/winning.css";
import Tele from "../../assets/images/tele.png";

const Telecom = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Telecommunications</h1>
          <p className="winning-paragraph">
            Our comprehensive telecom services include:{" "}
            <b>
              <p style={{ color: "#F6A126" }}>
                {" "}
                rollout of Optical Fiber Cables (OFC), construction &
                electrification of telecom towers and ROW / acquisition of
                telecom infrastructure projects.
              </p>
            </b>
            Together, these efforts enhance connectivity and support the growing
            demands of the telecommunications sector.
          </p>
        </div>
        <div className="winning-image">
          <img src={Tele} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Telecom;
