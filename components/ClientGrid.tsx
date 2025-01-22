"use client";

import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    clientName: "Elementum Tech",
    // logo: "../logos/copper-cow-coffee-logo.avif",
    logo: "../logos/elementum-logo.png",
    description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
    link: "https://www.elementumtech.io",
    shopifyPlusPartner: false,
  },
  {
    clientName: "Govalo",
    logo: "../logos/govalo-logo-narrow.jpg",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.govalo.com",
    shopifyPlusPartner: true,
  },
  {
    clientName: "The Taproom Agency",
    logo: "../logos/taproom-agency-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.thetaproom.com/",
    shopifyPlusPartner: true,
  },
  {
    clientName: "DevIQ",
    logo: "../logos/deviq-logo.webp",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.deviq.io",
    shopifyPlusPartner: false,
  },
  {
    clientName: "AGEX, Inc.",
    logo: "../logos/agex-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://www.agex.io",
    shopifyPlusPartner: false,
  },
  {
    clientName: "GrainBridge, LLC",
    logo: "../logos/grainbridge-white-logo.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://app.grainbridge.com/",
    shopifyPlusPartner: false,
  },
  // Add more projects here
];

const ClientGrid: React.FC = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientGrid;
