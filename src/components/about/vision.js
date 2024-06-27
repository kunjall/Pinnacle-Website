import React from "react";
import "../../assets/styles/winning.css";
import VisionImage from "../../assets/images/vision.png";

const Vision = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Mission</h1>
          <p className="winning-paragraph">
            Our Mission is to provide exceptional, safe, and sustainable
            projects that surpass client expectations, foster development, and
            elevate the built environment through exceptional craftsmanship and
            innovative approaches. By prioritizing quality, safety, and
            environmental responsibility, The Pinnacle Search strives to deliver
            projects that not only meet but exceed the needs of its clients and
            contribute positively to the communities it serves.
          </p>
          <h1>Vision</h1>
          <p className="winning-paragraph">
            Our Vision is to be the leading provider of innovative and
            sustainable solutions, transforming infrastructure for future
            generations.
          </p>
        </div>
        <div className="winning-image">
          <img
            src={VisionImage}
            alt="winning"
            style={{ width: "400px", height: "400px", marginLeft: "150px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
