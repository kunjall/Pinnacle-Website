import React from "react";
import "../../assets/styles/winning.css";
import Construction from "../../assets/images/construction.png";

const Constructions = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Construction</h1>
          <span>
            <p className="winning-paragraph">
              Our comprehensive construction services encompass a wide array of
              projects tailored to meet diverse infrastructure needs. We
              specialize in building:
              <b>
                <p style={{ color: "#F6A126" }}>
                  bridges, highways and roads, flyovers. We also construct
                  hangars and lay pipelines.
                </p>
              </b>
            </p>
          </span>
        </div>
        <div className="winning-image">
          <img src={Construction} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Constructions;
