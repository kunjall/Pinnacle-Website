import React from "react";
import "../../assets/styles/winning.css";
import Win from "../../assets/images/winning.png";

const Winning = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Our Winning Formula</h1>
          <p className="winning-paragraph">
            Our core strength is our technical knowledge, market dynamics, and
            our committed team, who are dedicated to providing customer
            satisfaction with their zeal to stand in the toughest conditions and
            high integrity.
          </p>
        </div>
        <div className="winning-image">
          <img src={Win} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Winning;
