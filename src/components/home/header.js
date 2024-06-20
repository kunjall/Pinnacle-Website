import React from "react";
import "../../assets/styles/header.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/solutions");
  };
  return (
    <div className="outer-headings">
      <h1>
        We meet your needs by
        <div className="inner-headings">
          <span>
            Prioritizing excellent service <br />
            Innovative problem-solving <br />
            Cost-effective strategies <br />
            Value-driven solutions <br />
          </span>
        </div>
      </h1>
      <b>
        <p className="paragraph">
          Our holistic approach ensures the establishment <br />
          of mutually beneficial partnerships that foster <br />
          long-term success and satisfaction.
        </p>
      </b>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          width: "250px",
          mt: 2,
          backgroundColor: "#ffbf62",
          color: "#bf504d",
          fontWeight: "bold",
          height: "50px",
          "&:hover": {
            backgroundColor: "#bf504d",
            color: "#ffbf62",
          },
        }}
      >
        Explore Our Solutions
      </Button>
    </div>
  );
};

export default Header;
