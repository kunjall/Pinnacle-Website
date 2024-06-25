import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0A1A29", color: "#FFFFFF", py: 3, mt: 6 }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 51 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              The Pinnacle Search
            </Typography>
            {/* <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <IconButton color="inherit"><LinkedInIcon /></IconButton>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
            </Box> */}
          </Grid>
          <Grid item xs={12} md={4} sx={{ ml: "auto", textAlign: "right" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                mb: 1,
              }}
            >
              <LocationOnIcon sx={{ mr: 1, color: "#ec7c30" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                India
              </Typography>
            </Box>
            <Typography>
              THE PINNACLE SEARCH
              <br />
              GF, 32 Augusta Point, Golf Course Road, Sector 53
              <br />
              Gurgaon 122002
            </Typography>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Contact Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: '#ec7c30' }} />
              <Typography>info@cloudbloom.io</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 1, color: '#ec7c30' }} />
              <Typography>+1 774 430 3233</Typography>
            </Box>
          </Grid> */}
        </Grid>
        <Box
          sx={{
            mt: 4,
            borderTop: "1px solid #444",
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>© 2024 The Pinnacle Search.</Typography>
          {/* <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              <Typography>Home</Typography>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              <Typography>Executed Projects</Typography>
            </Link>
            <Link to="/what-we-offer" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              <Typography>What We Offer</Typography>
            </Link>
            <Link to="/our-vision" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              <Typography>Our Values</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              <Typography>Contact Us</Typography>
            </Link>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
