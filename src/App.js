import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import Background from "./assets/images/Background.png";
import Home from "./pages/home";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
