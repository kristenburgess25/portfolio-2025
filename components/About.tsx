"use client";

import React from "react";
import { Box, Typography, Avatar, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// ✅ Refined Gradient Background (Modern Deep Purple to Soft Lavender)
const AboutContainer = styled(Box)(() => ({
  textAlign: "center",
  lineHeight: 1.5,
  background: "linear-gradient(180deg, #2E1A47, #BFA2DB)", // Deep plum to soft lavender
  // padding: "4rem 0",
}));

const HeroSection = styled(Box)(() => ({
  width: "100%",
  minHeight: "70vh",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/your-image.jpg')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "4rem 1rem",
  color: "white",
}));

const ContentWrapper = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "800px",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 180,
  height: 180,
  marginBottom: "1rem",
  border: "4px solid #BFA2DB", // Soft lavender border
}));

const AboutIconsContainer = styled(Grid)(() => ({
  margin: "2rem auto",
  width: "100%",
  maxWidth: "100vw",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  "@media (max-width: 900px)": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const IconContent = styled(Grid)(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  margin: "1rem",
  padding: "2rem",
  background: "rgba(255, 255, 255, 0.9)", // Subtle off-white for contrast
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
}));

const SvgIcon = styled("svg")(() => ({
  width: "80px",
  height: "80px",
  fill: "currentColor",
  color: "#6A0572", // Rich plum for icons
}));

const About: React.FC = () => {
  return (
    <AboutContainer>
      {/* ✅ Hero Section with Deep Plum Overlay */}
      <HeroSection sx={{ animation: "fadeIn 2s ease-in-out" }}>
        <ContentWrapper>
          <StyledAvatar src="https://i.imgur.com/io5PKEg.jpg?1" alt="Kristen Burgess" />

          <Typography variant="h3" sx={{ fontWeight: "bold", letterSpacing: "1px", color: "#fff" }}>
            Howdy, I&apos;m Kristen! 
          </Typography>

          <Typography variant="h5" sx={{ opacity: 0.9, marginTop: "0.5rem", color: "#BFA2DB" }}>
            a fourth-generation rancher & first-generation software engineer 🤠💻
          </Typography>

          <Typography variant="body1" sx={{ marginTop: "1.5rem", maxWidth: "600px", color: "#f5f5f5" }}>
            I build <strong>modern, high-performance applications</strong> and bring <strong>creative tech solutions</strong> 
            to underserved markets, particularly in agriculture.
            Based in the <strong>Sandhills of Nebraska</strong>, I combine my ranching roots with cutting-edge technology.
          </Typography>
        </ContentWrapper>
      </HeroSection>

      {/* ✅ Informational Blocks - Now with More Depth and Modern Tones */}
      <AboutIconsContainer container spacing={3} justifyContent="center">
        <IconContent item xs={12} sm={4} md={4} lg={4} xl={4}>
          <SvgIcon viewBox="0 0 80 80">
            <path d="M40 10l36.719 20v26.719h-6.719v-23.125l-30 16.406-36.719-20zM16.719 43.906l23.281 12.813 23.281-12.813v13.438l-23.281 12.656-23.281-12.656v-13.438z"></path>
          </SvgIcon>
          <Typography variant="h6" sx={{ marginTop: 1, color: "#6A0572" }}>Education</Typography>
          <Typography sx={{ color: "#333" }}>
            I attended a small liberal arts college where I obtained degrees in Political Science and English. My time studying abroad in Europe and Africa were some of the most impactful experiences of my life.
            <br />            
            My passion for the power of coding came from one of my first jobs after college, which led me to Turing School of Software and Design.
          </Typography>
        </IconContent>

        <IconContent item xs={12} sm={4} md={4} lg={4} xl={4}>
          <SvgIcon viewBox="0 0 80 80">
            <path d="M46.719 20v-6.719h-13.438v6.719h13.438zM66.719 20c3.75 0 6.563 2.969 6.563 6.719v36.563c0 3.75-2.813 6.719-6.563 6.719h-53.438c-3.75 0-6.563-2.969-6.563-6.719v-36.563c0-3.75 2.813-6.719 6.563-6.719h13.438v-6.719c0-3.75 2.813-6.563 6.563-6.563h13.438c3.75 0 6.563 2.813 6.563 6.563v6.719h13.438z"></path>
          </SvgIcon>
          <Typography variant="h6" sx={{ marginTop: 1, color: "#6A0572" }}>Work</Typography>
          <Typography sx={{ color: "#333" }}>
            I have worked at multiple startups and agencies, filling roles in sales, marketing, communications, product and project management, design, and engineering.
            I have a highly diverse skill set and pride myself on my ability to wear many hats to help companies succeed. 
          </Typography>
        </IconContent>

        <IconContent item xs={12} sm={4} md={4} lg={4} xl={4}>
          <SvgIcon viewBox="0 0 80 80">
            <path d="M48.594 55.313l15.469-15.313-15.469-15.313 4.688-4.688 20 20-20 20zM31.406 55.313l-4.688 4.688-20-20 20-20 4.688 4.688-15.469 15.313z"></path>
          </SvgIcon>
          <Typography variant="h6" sx={{ marginTop: 1, color: "#6A0572" }}>Code</Typography>
          <Typography sx={{ color: "#333" }}>
            I strive to create readable, testable, and maintainable code. While my primary focus is frontend development,
            I enjoy full-stack development and am skilled in <strong>VueJS, React, and Angular.</strong>
          </Typography>
        </IconContent>
      </AboutIconsContainer>
    </AboutContainer>
  );
};

export default About;
