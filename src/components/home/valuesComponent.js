import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ValueComponent({ text, summary }) {
  return (
    <div>
      <Accordion
        sx={{
          marginBottom: 1,
          border: "3px solid black",
          color: "#00000",
          "&.Mui-expanded": {
            backgroundColor: "#bf504d",
            border: "none",
            color: "#f3fae1",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#bf504d" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "e0e0e0",
            "& .MuiAccordionSummary-content": {
              fontFamily: "'Roboto', sans-serif",
              fontSize: "18px",
              margin: 0,
            },
            "& .MuiAccordionSummary-root": {
              backgroundColor: "#bf504d",
            },
            "&.Mui-expanded": {
              minHeight: "40px",
            },
            minHeight: "20px",
          }}
        >
          {text}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#e0e0e0",
            color: "#757575",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "18px",
          }}
        >
          {summary}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
