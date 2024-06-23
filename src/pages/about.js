import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Background from "../assets/images/solutions.png";
import Header from "../components/solutions/headerSolution";
import Verticals from "../components/solutions/verticalsSolutions";
import Competence from "../components/solutions/competence";
import Statistics from "../components/solutions/statistics";

const About = () => {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `linear-gradient(0deg, rgba(191, 80, 77, 0.8), rgba(191, 80, 77, 0.8)), url(${Background})`,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            backgroundSize: "100% 65%", // Adjusted background size to cover entire viewport
            margin: 0,
            height: "100vh", // Ensure full viewport height
          },
          html: {
            height: "100%",
          },
          "#root": {
            height: "100%",
          },
        }}
      />{" "}
      <Header />
      <Verticals />
      <Competence />
      <Statistics />
    </div>
  );
};

export default About;