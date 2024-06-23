import React from "react";
import "../../assets/styles/winning.css";
import Leadership from "../../assets/images/leadership.jpeg";
import ValueComponent from "./valuesComponent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Values = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="winning-container">
        <div className="winning-heading">
          <h1>Leadership Values</h1>
          <div className="winning-paragraph" style={{ marginTop: "20px" }}>
            <ValueComponent
              text={"Customer Satisfaction"}
              summary={
                "We prioritize understanding and fulfilling customer needs to ensure their satisfaction."
              }
            />
            <ValueComponent
              text={"Timely Delivery"}
              summary={
                "We commit to delivering products and services on time, meeting deadlines with reliability."
              }
            />
            <ValueComponent
              text={"Win-Win Price"}
              summary={
                "We strive to offer competitive pricing that benefits both our clients and our company."
              }
            />
            <ValueComponent
              text={"Service Quality"}
              summary={
                "Our focus is on delivering high-quality services that exceed customer expectations."
              }
            />
            <ValueComponent
              text={"Innovation"}
              summary={
                "We encourage creativity and innovative solutions to drive continuous improvement."
              }
            />
            <ValueComponent
              text={"Cost Effectiveness"}
              summary={
                "We optimize resources and operations to achieve cost efficiency without compromising quality."
              }
            />
            <ValueComponent
              text={"Proactive approach"}
              summary={
                "We take initiative and anticipate needs to provide proactive solutions and support."
              }
            />
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                width: "220px",
                mt: 2,
                backgroundColor: "#bf504d",
                color: "#ffbf62",
                fontWeight: "bold",
                height: "40px",
                "&:hover": {
                  backgroundColor: "#ffbf62",
                  color: "#bf504d",
                },
              }}
            >
              Know more about us
            </Button>
          </div>
        </div>
        <div className="winning-image">
          <img src={Leadership} alt="Winning" />
        </div>
      </div>
    </div>
  );
};

export default Values;
