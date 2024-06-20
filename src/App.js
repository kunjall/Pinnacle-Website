import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import Background from "./assets/images/Background.png";
import Home from "./pages/home";
import Solutions from "./pages/solutions";
import "../src/assets/styles/App.css";
import BackToTopButton from "./components/backtotop/backtotop";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </div>
      </Router>
      <BackToTopButton />
    </React.Fragment>
  );
};

export default App;
