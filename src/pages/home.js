import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Background from "../assets/images/Background.png";
import Header from "../components/home/header";

const Home = () => {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage: `linear-gradient(0deg, rgba(191, 80, 77, 0.3), rgba(191, 80, 77, 0.3)), url(${Background})`,

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            margin: 0,
            height: "100%",
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
    </div>
  );
};

export default Home;
