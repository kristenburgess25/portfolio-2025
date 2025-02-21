"use client";

import React from "react";
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Container } from "@mui/material";
import { Code, SettingsSuggest, Storage } from "@mui/icons-material"; 
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


const SkillText = styled(ListItemText)(() => ({
  color: "#6A0572",
  fontWeight: "500",
}));


const frontendSkills = [
  "JavaScript & TypeScript",
  "React, Next.js & Vue",
  "TailwindCSS & Material UI",
  "State Management (Vuex, Redux)",
  "Shopify (Liquid, Hydrogen) & BigCommerce"
];

const backendSkills = [
  "Node.js (Express, Koa)",
  "Python (FastAPI, Ariadne)",
  "Databases (PostgreSQL, Prisma, MongoDB, Redis, oData)",
  "APIs (REST, GraphQL, Elasticsearch)",
  "Cloud & DevOps (Docker, Vercel, Netlify, AWS, Heroku, GCP)"
];

const toolsSkills = [
  "Testing (Jest, Sinon, Postman)",
  "Version Control & CI/CD (Git, GitHub Actions)",
  "Project Management (JIRA, Atlassian)",
  "Design & Prototyping (Figma, Sketch, Miro)",
  "E-commerce & Payments (Shopify, BigCommerce, Stripe, Braintree, Sendgrid, MailChimp)"
];

const SkillsSection: React.FC = () => {
  return (
    <SkillsContainer>
      <Container>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#6A0572", marginBottom: "2rem" }}>
          Skills & Expertise
        </Typography>

         <SkillsGrid>
          {/* Column 1 */}
          <Box>
            <List>
              {frontendSkills.map((skill, index) => (
                <ListItem key={index}>
                <ListItemIcon>
                  <Code sx={{ color: "#6A0572" }} />
                </ListItemIcon>
                <SkillText primary={skill} />
              </ListItem>
              ))}
            </List>
          </Box>

          {/* Column 2 */}
          <Box>
            <List>
              {backendSkills.map((skill, index) => (
                  <ListItem key={index}>
                  <ListItemIcon>
                    <Storage sx={{ color: "#6A0572" }} />
                  </ListItemIcon>
                  <SkillText primary={skill} />
                </ListItem>
                ))}
            </List>
          </Box>

          {/* Column 3 */}
          <Box>
            <List>
              {toolsSkills.map((skill, index) => (
                  <ListItem key={index}>
                  <ListItemIcon>
                    <SettingsSuggest sx={{ color: "#6A0572" }} />
                  </ListItemIcon>
                  <SkillText primary={skill} />
                </ListItem>
                ))}
            </List>
          </Box>
        </SkillsGrid> 

      </Container>
    </SkillsContainer>
  );
};

export default SkillsSection;