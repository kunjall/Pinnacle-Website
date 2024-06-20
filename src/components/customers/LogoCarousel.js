import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/LogoCarousel.css";
import Mcd from "../../assets/images/authorities/MCD.png";
import Dda from "../../assets/images/authorities/DDA.png";
import Ndmc from "../../assets/images/authorities/NDMC.png";
import Pwd from "../../assets/images/authorities/PWD.png";
import Mcg from "../../assets/images/authorities/MCG.png";
import Mcf from "../../assets/images/authorities/MCF.png";
import Huda from "../../assets/images/authorities/HUDA.png";
import Ggn from "../../assets/images/authorities/GGN.png";
import Gda from "../../assets/images/authorities/GDA.png";
import GMDA from "../../assets/images/authorities/GMDA.jpeg";
import FMDA from "../../assets/images/authorities/FMDA.png";
import KMC from "../../assets/images/authorities/KMC.png";
import BMC from "../../assets/images/authorities/BMC.jpeg";
import PVVNL from "../../assets/images/authorities/PVVNL.png";
import NHAI from "../../assets/images/authorities/NHAI.png";
import JDA from "../../assets/images/authorities/JDA.png";
import GP from "../../assets/images/authorities/GP.png";
import ANN from "../../assets/images/authorities/ANN.png";
import IR from "../../assets/images/authorities/IR.png";
import GAIL from "../../assets/images/authorities/GAIL.png";
import BP from "../../assets/images/authorities/BP.png";

const logos = [
  GAIL,
  BP,
  Mcd,
  Dda,
  Ndmc,
  Pwd,
  Mcg,
  Mcf,
  Huda,
  Ggn,
  Gda,
  GMDA,
  FMDA,
  KMC,
  BMC,
  PVVNL,
  NHAI,
  JDA,
  GP,
  ANN,
  IR,
];

const LogoCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "30px", color: "#bf504d" }}
      >
        Collaborating Partners
      </h1>
      <div className="carousel-container" style={{ backgroundColor: "#fffff" }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div className="carousel-item" key={index}>
              <img src={logo} alt={`logo-${index}`} className="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
