import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Background from "../assets/images/solutions.png";
import Header from "../components/solutions/headerSolution";
import Verticals from "../components/solutions/verticalsSolutions";
import Footer from "../components/footer/footer";

const Solutions = () => {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            backgroundSize: "cover", // Adjusted background size to cover entire viewport
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
      <Footer />
    </div>
  );
};

export default Solutions;
