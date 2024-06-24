import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ApparelImage from "../../assets/images/apparel.jpeg";
import ConstructionImage from "../../assets/images/construction.jpeg";
import MakeinIndia from "../../assets/images/makeinindia.jpeg";
import PPEImage from "../../assets/images/ppe.jpeg";
import NanotechImage from "../../assets/images/nanotech.jpeg";
import TelecomImage from "../../assets/images/telecom.png";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: "100%", // Adjust width to be responsive
        height: "auto",
        transform: "translateZ(0)",
      }}
      cols={3} // Set the number of columns
      gap={1}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={1} rows={1}>
          <img
            {...srcset(item.img, 250, 200, 1, 1)}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <ImageListItemBar
            sx={{
              "& .MuiImageListItemBar-titleWrap": {
                color: "#f3fae1",
                fontWeight: "bold",
                fontSize: "1rem",
              },
            }}
            title={item.title}
            position="bottom"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: ApparelImage,
    title: "Apparel",
  },
  {
    img: ConstructionImage,
    title: "Construction",
  },
  {
    img: MakeinIndia,
    title: "Make in India Initiative",
    author: "@silverdalex",
  },
  {
    img: PPEImage,
    title: "Protective Equipment",
    author: "@shelleypauls",
  },
  {
    img: NanotechImage,
    title: "Nanotechnology",
    author: "@peterlaster",
  },
  {
    img: TelecomImage,
    title: "Telecommunications",
    author: "@southside_customs",
  },
];
