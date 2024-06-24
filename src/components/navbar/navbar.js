import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pinnacle.jpeg";
import "../../assets/styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <img src={Logo} alt="The Pinnacle Search" height="40px" />
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleDrawer}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`drawer ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleDrawer}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/solutions" onClick={toggleDrawer}>
              Solutions
            </Link>
          </li>

          <li>
            <Link to="/customers" onClick={toggleDrawer}>
              Customers & Partners
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleDrawer}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={toggleDrawer}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
