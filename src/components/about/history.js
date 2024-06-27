import React from "react";
import "../../assets/styles/locations.css";
import History from "../../assets/images/history.png";

const HistoryComponent = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f6" }}>
      <div className="location-container">
        <div className="location-image">
          <img
            src={History}
            alt="History"
            style={{ height: "60vh", width: "550px" }}
          />
        </div>
        <div className="location-heading">
          <h1>Decades of Excellence</h1>
          <p className="location-paragraph">
            The MIG Group, founded in 1902, is the parent company behind The
            Pinnacle Search having a strong presence for over a century.
            Headquartered in New Delhi, India.
            <br />
            With an expansive footprint spanning more than 10 metropolitan
            areas, our organization's reach continues to grow.
            <br />
            Broadening its scope, The Pinnacle Search delved into the realms of
            specialized apparel, healthcare attire, telecommunications networks,
            infrastructure projects, and procurement of defense-related
            products, diversifying its expertise across various sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
