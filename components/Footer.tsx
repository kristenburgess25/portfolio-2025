"use client";

import { Box, Typography, Container, IconButton } from "@mui/material";
import { GitHub, Email, Description } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// ✅ Explicitly Declare Component Type in Styled Box
const FooterContainer = styled(Box)<{ component?: string }>(() => ({
  backgroundColor: "#211332", // ✅ Matches Navbar
  color: "#F5ECFF", // ✅ Light text for contrast
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  fontSize: "0.9rem",
}));

// ✅ Styled IconButton with Hover Effect
const StyledIconButton = styled(IconButton)(() => ({
  color: "#F5ECFF",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#BFA2DB", // ✅ Soft lilac on hover
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer component="footer">
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* ✅ Left Side - Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} Kristen Burgess. All rights reserved.
        </Typography>

        {/* ✅ Right Side - Social Icons */}
        <Box>
          <a href="mailto:your.email@example.com">
            <StyledIconButton aria-label="Email">
              <Email />
            </StyledIconButton>
          </a>

          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <StyledIconButton aria-label="GitHub">
              <GitHub />
            </StyledIconButton>
          </a>

          <a href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
            <StyledIconButton aria-label="Resume">
              <Description />
            </StyledIconButton>
          </a>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
