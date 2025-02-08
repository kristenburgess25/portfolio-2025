"use client";

import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    clientName: "Elementum Tech",
    // logo: "../logos/copper-cow-coffee-logo.avif",
    logo: "../logos/elementum-logo.png",
    description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
    link: "https://www.elementumtech.io",
    shopifyPlusPartner: false,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#f26e3f"
  },
  {
    clientName: "Govalo",
    logo: "../logos/Govalo_Dark.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.govalo.com",
    shopifyPlusPartner: true,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#ffd24c"
  },
  {
    clientName: "The Taproom Agency",
    logo: "../logos/taproom-agency-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.thetaproom.com/",
    shopifyPlusPartner: true,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#4e9bbf"
  },
  {
    clientName: "DevIQ",
    logo: "../logos/deviq-2.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.deviq.io",
    shopifyPlusPartner: false,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#8282E7"
  },
  {
    clientName: "AGEX, Inc.",
    logo: "../logos/agex-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.agex.io",
    shopifyPlusPartner: false,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#F5B4D9"
  },
  {
    clientName: "GrainBridge, LLC",
    logo: "../logos/grainbridge-white-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://app.grainbridge.com/",
    shopifyPlusPartner: false,
    keyAchievements:['did a lot', 'did my very best', 'won every day'],
    backgroundColor: "#A9C33D"
  },
  // Add more projects here
];

const CompanyGrid: React.FC = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 5 }}>
      {companies.map((company, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CompanyCard project={company} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyGrid;
