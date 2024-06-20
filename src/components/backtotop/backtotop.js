import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const StyledButton = styled(Button)(({ theme }) => ({
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#bf504d",
    color: "#ffffff",
    zIndex: 1000,
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: isVisible ? "block" : "none",
    "&:hover": {
      backgroundColor: "#a0302c",
    },
  }));

  return (
    <StyledButton
      onClick={scrollToTop}
      variant="contained"
      aria-label="Back to top"
    >
      <ArrowUpwardIcon sx={{ marginTop: "5px" }} />
    </StyledButton>
  );
};

export default BackToTopButton;
