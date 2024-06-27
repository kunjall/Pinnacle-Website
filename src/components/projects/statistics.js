import React from "react";
import "../../assets/styles/verticals.css";
// import VerticalComponent from "./verticalsComponent";
import StatisticsTable from "./statisticsTable";

const Statistics = () => {
  return (
    <div>
      <div className="verticals-container">
        <div className="verticals-heading">
          <h1 style={{ marginTop: "20px" }}>
            Brief Statistics of Recent Projects
          </h1>
        </div>
        <div className="verticals-row">
          <StatisticsTable />
        </div>
        <div
          className="competence-row"
          style={{
            fontSize: "24px",
            lineHeight: "1.5",
            color: "#757575",
            marginTop: "10px",
          }}
        >
          {/* <p>
            The Pinnacle Search has complete competence to install steel towers
            and build PCC/RCC structures.{" "}
            <b>
              <p style={{ color: "#F6A126" }}>
                We have the unique expertise to raise steel Towers on cemented
                structures in PAN India.
              </p>
            </b>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
