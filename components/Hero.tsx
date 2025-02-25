"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// Parallax Hero Section with Lightened Overlay
const HeroContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh", // Full-screen hero section
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://i.imgur.com/XizsJ1c.jpg')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed", // Enables Parallax Effect
  backgroundPosition: "center",
  position: "relative",
}));

const HeroOverlay = styled(Box)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.2)", // Lightened overlay for better visibility
  zIndex: 1,
}));

const HeroContent = styled(Container)(() => ({
  position: "relative",
  zIndex: 2, // Keeps text above overlay
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
}));

// const HeroAvatar = styled(Avatar)(() => ({
//   width: 160,
//   height: 160,
//   border: "3px solid white", 
//   marginBottom: "1rem",
// }));

// const HeroButton = styled(Button)(() => ({
//   marginTop: "1rem",
//   padding: "12px 24px",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   borderRadius: "8px",
//   textTransform: "none",
//   color: "white",
//   borderColor: "white",
//   transition: "all 0.3s ease-in-out",
//   "&:hover": {
//     boxShadow: "0px 0px 10px rgba(0,0,255,0.4)",
//   }
// }));

const Hero = () => {
  return (
    <HeroContainer>
      <HeroOverlay />
      <HeroContent>

        <Typography variant="h2" sx={{ fontFamily:"'Archivo Black', serif" ,fontWeight: "bold", letterSpacing: "1.25px" }}>
          Kristen Burgess
        </Typography>

        <Typography variant="h5" sx={{ opacity: 0.9, fontFamily:"'Zain', serif" }}>
          Cowgirl / Software Engineer / Baker / Conservationist / Conversationalist 
        </Typography>

        {/* <Typography variant="body1" sx={{ maxWidth: "600px", opacity: 0.85 }}>
          I build high-performance applications and bring modern tech solutions to agriculture.
        </Typography> */}

        {/* <HeroButton variant="outlined" href="#about">
          More!
        </HeroButton> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
