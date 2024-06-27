import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#8d3a38", color: "#FFFFFF", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              The Pinnacle Search
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-end" },
                mb: 1,
              }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#ffbf62" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                India
              </Typography>
            </Box>
            <Typography textAlign={{ xs: "center", md: "right" }}>
              THE PINNACLE SEARCH
              <br />
              GF, 32 Augusta Point,
              <br />
              Golf Course Road, Sector 53
              <br />
              Gurgaon 122002
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            borderTop: "1px solid #ffbf62",
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>© 2024 The Pinnacle Search.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
