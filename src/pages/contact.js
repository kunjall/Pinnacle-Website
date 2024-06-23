import React from "react";
import "../assets/styles/contact.css";
import Header from "../components/solutions/headerSolution";
import { GlobalStyles } from "@mui/material";
import Background from "../assets/images/Background.png";

const ContactUs = () => {
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
      <div className="container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Please let us know what you would like to inquire about, and our
              team will get back to you promptly!{" "}
            </p>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              action="https://formspree.io/f/xjvnqrdz"
              method="POST"
              autocomplete="off"
            >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <p>Email:</p>
                <input type="email" name="email" className="input" required />
              </div>
              <div className="input-container">
                <p>Phone:</p>

                <input type="tel" name="phone" className="input" required />
              </div>
              <div className="input-container textarea">
                <p>Comments:</p>

                <textarea name="message" className="input" required></textarea>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
