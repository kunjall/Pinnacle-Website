import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Background from "../assets/images/Background.png";
import Header from "../components/home/header";
import Winning from "../components/home/winning";
import Verticals from "../components/home/verticals";
import Leading from "../components/home/leading";
import Location from "../components/home/locations";
import Values from "../components/home/values";

const Home = () => {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `linear-gradient(0deg, rgba(191, 80, 77, 0.3), rgba(191, 80, 77, 0.3)), url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%", // Adjusted background size to cover entire viewport
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
      <Winning />
      <Verticals />
      <Leading />
      <Location />
      <Values />
    </div>
  );
};

export default Home;
