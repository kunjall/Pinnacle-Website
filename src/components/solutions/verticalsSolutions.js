import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Apparels from "./apparel";
import Constructions from "./construction";
import MakeinIndia from "./makeinindia";
import Protective from "./protective";
import Nanotech from "./nano";
import Telecom from "./telecom";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Verticals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabIndicatorProps={{
              sx: {
                backgroundColor: "#bf504d", // Change the color of the underline
              },
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              "& .MuiTabs-scroller": {
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#bf504d",
              },
            }}
          >
            <Tab label="Apparels" {...a11yProps(0)} />
            <Tab label="Construction" {...a11yProps(1)} />
            <Tab label="Make In India" {...a11yProps(2)} />
            <Tab label="Protective Equipment" {...a11yProps(3)} />
            <Tab label="Nanotechnology" {...a11yProps(4)} />
            <Tab label="Telecommunications" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <CustomTabPanel
          value={value}
          index={0}
          sx={{
            backgroundColor: "#e0e0e0",
          }}
        >
          <Apparels />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Constructions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MakeinIndia />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Protective />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Nanotech />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <Telecom />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
