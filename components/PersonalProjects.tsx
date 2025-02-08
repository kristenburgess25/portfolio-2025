"use client";

import React from "react";
import ProjectCard from "./PersonalProjectCard";
import { Grid } from "@mui/material";


const projects = [
  {
    title: "Portfolio",
    description: "A high-performance platform for managing online stores.",
    image: "../logos/shopscene-logo.png",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "The story of the app: This platform includes features like real-time inventory updates, custom analytics dashboards, and multi-currency support.",
    screenshots: ["/path/to/screenshot1.jpg", "/path/to/screenshot2.jpg"],
    backgroundColor: "#5391AE"
  },
  {
    title: "Kristen Loves Cookies",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/locket-logo.jpg",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#85B464"
  },
  {
    title: "Rooster Boots",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/ccc-cow-logo.jpeg",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#FEBFC6"
  },
];

const PersonalProjects: React.FC = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 5 }}>
{projects.map((project, index) => (
  <Grid item xs={12} sm={6} md={4} key={index}>
    <ProjectCard {...project} />
  </Grid>
))}
</Grid>
  );
};

export default PersonalProjects;



