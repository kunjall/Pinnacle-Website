import React from "react";
import "../../assets/styles/winning.css";
import Win from "../../assets/images/customers.png";

const Winning = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Our Customers</h1>
          <p className="winning-paragraph">
            Our customers are the cornerstone of our success. We pride ourselves
            on delivering exceptional service, leveraging our deep technical
            expertise and market knowledge. We aim to build lasting
            relationships by ensuring customer satisfaction through tailored
            solutions and reliable support. Your trust drives our innovation and
            excellence, making us your preferred partner for achieving
            remarkable outcomes.
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
