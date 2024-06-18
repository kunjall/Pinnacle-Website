import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import WOW from "../../assets/images/wow.png";
import Logo from "../../assets/images/pinnacle.jpeg";
import "../../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <img src={Logo} alt="The Pinnacle Search" height="40px"></img>
      <nav>
        <ul>
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Solutions</Link>
            </li>
            <li>
              <Link to="/test">About Us</Link>
            </li>
            <li>
              <Link to="/test">Customers & Parteners</Link>
            </li>
            <li>
              <Link to="/test">Contact Us</Link>
            </li>
            {/* <li><Link to="/admin-settings">Admin Settings</Link></li> */}
          </>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
