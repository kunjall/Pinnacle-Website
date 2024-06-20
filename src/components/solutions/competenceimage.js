import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Contruction2 from "../../assets/images/construction2.png";
import Contruction1 from "../../assets/images/construction1.png";
import Contruction3 from "../../assets/images/construction3.png";
import Contruction4 from "../../assets/images/construction4.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Competencelist() {
  return (
    <ImageList
      sx={{ width: 500, height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Contruction2,
    title: "1",
    rows: 2,
    cols: 2,
  },

  {
    img: Contruction4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: Contruction3,
    title: "Hats",
    cols: 2,
  },
  {
    img: Contruction1,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 4,
  },
];
