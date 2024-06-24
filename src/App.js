import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import Background from "./assets/images/Background.png";
import Home from "./pages/home";
import Solutions from "./pages/solutions";
import Customers from "./pages/customers";
import About from "./pages/about";
import Projects from "./pages/projects";
import ContactUs from "./pages/contact";
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
            <Route path="/customers" element={<Customers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
      <BackToTopButton />
    </React.Fragment>
  );
};

export default App;
