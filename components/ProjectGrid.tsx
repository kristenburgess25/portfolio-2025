"use client";

import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    clientName: "Copper Cow Coffee",
    // logo: "../logos/copper-cow-coffee-logo.avif",
    logo: "../logos/ccc-cow-logo.jpeg",
    description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
    link: "https://example.com/client-a",
  },
  {
    clientName: "Inside Tracker",
    logo: "../logos/IT_stacked_white_logo-only.png",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://example.com/client-b",
  },
  {
    clientName: "Sprinly",
    logo: "../logos/sprinly-graphic.webp",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://example.com/client-b",
  },
  {
    clientName: "Transwest",
    logo: "../logos/transwest-logo.jpg",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://example.com/client-b",
  },
  {
    clientName: "Omnique",
    logo: "../logos/omnique-logo.jpg",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://example.com/client-b",
  },
  {
    clientName: "Farm Credit Services of America",
    logo: "../logos/FCSA-logo-only.jpg",
    description: "Built a custom CMS solution to streamline content creation and management.",
    link: "https://example.com/client-b",
  },
  // Add more projects here
];

const ProjectGrid: React.FC = () => {
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

export default ProjectGrid;
