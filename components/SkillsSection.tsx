"use client";

import React from "react";
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Container } from "@mui/material";
import { Code, Brush, Storage } from "@mui/icons-material"; 
import { styled } from "@mui/material/styles";

// ✅ Background Gradient - Light Lilac to Off-White
const SkillsContainer = styled(Box)(() => ({
  textAlign: "center",
  background: "linear-gradient(180deg, #BFA2DB, #F5ECFF)", 
  padding: "4rem 0",
  animation: "fadeIn 1.5s ease-in-out",
  marginTop: "-2rem"
}));

const SkillsGrid = styled(Grid)(() => ({
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",  // ✅ Forces strict grid layout
  gridTemplateColumns: "repeat(3, 1fr)",  // ✅ 3 equal columns
  gap: "1.5rem",  // ✅ Ensures equal spacing
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr", // ✅ Stacks items on mobile
  },
}));

const SkillCard = styled(Box)(() => ({
  background: "rgba(255, 255, 255, 0.9)",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
  },
}));

const SkillText = styled(ListItemText)(() => ({
  color: "#6A0572",
  fontWeight: "500",
}));

const SkillsSection: React.FC = () => {
  return (
    <SkillsContainer>
      <Container>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#6A0572", marginBottom: "2rem" }}>
          Skills & Expertise
        </Typography>

        <SkillsGrid>
          {/* Column 1 */}
          <SkillCard>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Code sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="JavaScript (ES6+)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="React & Next.js" />
              </ListItem>
            </List>
          </SkillCard>

          {/* Column 2 */}
          <SkillCard>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Brush sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="UI/UX Design" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Brush sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="TailwindCSS & Material UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Brush sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="Figma & Prototyping" />
              </ListItem>
            </List>
          </SkillCard>

          {/* Column 3 */}
          <SkillCard>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Storage sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="Node.js & Express" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Storage sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="PostgreSQL & MySQL" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Storage sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary="REST & GraphQL APIs" />
              </ListItem>
            </List>
          </SkillCard>
        </SkillsGrid>
      </Container>
    </SkillsContainer>
  );
};

export default SkillsSection;
