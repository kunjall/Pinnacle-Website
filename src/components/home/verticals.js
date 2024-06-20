import React from "react";
import "../../assets/styles/verticals.css";
import VerticalComponent from "./verticalsComponent";

const Verticals = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f6" }}>
      <div className="verticals-container">
        <div className="verticals-heading">
          <h1>Industries We Transform</h1>
        </div>
        <div className="verticals-row">
          <VerticalComponent />
        </div>
      </div>
    </div>
  );
};

export default Verticals;
