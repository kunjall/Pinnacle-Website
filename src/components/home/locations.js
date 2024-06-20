import React from "react";
import "../../assets/styles/locations.css";
import Location from "../../assets/images/locations.png";

const LocationComponent = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f6" }}>
      <div className="location-container">
        <div className="location-image">
          <img src={Location} alt="location" />
        </div>
        <div className="location-heading">
          {/* <h1>Regional Presence</h1> */}
          <p className="location-paragraph">
            Our presence in key locations like Delhi NCR, Punjab, Rajasthan,
            Kolkata, Maharashtra & Odisha signifies our commitment to being an
            accessible and reliable partner in your success.
            <br />
            In addition to our established regional presence, we have the
            capability to expand our operations across the entire nation. Our
            robust infrastructure, scalable solutions, and adaptive strategies
            position us to seamlessly extend our services to new regions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
