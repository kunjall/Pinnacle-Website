import React from "react";
import "../../assets/styles/winning.css";
import Construction from "../../assets/images/construction.png";
import Competence from "./competence";
import Statistics from "./statistics";
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
                  roads, highways, bridges and etc. We also have capabilities to
                  construct aircraft hangars and lay pipelines for gas, water
                  etc.
                </p>
              </b>
            </p>
          </span>
        </div>
        <div className="winning-image">
          <img src={Construction} alt="Winning" />
        </div>
      </div>
      <Competence />
      <Statistics />
    </div>
  );
};

export default Constructions;
