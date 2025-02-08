"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ShopScene",
    description: "A high-performance platform for managing online stores.",
    image: "../logos/shopscene-logo-nobg.png",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    techStack: ['React', 'TypeScript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "The story of the app: This platform includes features like real-time inventory updates, custom analytics dashboards, and multi-currency support.",
    screenshots: ["/path/to/screenshot1.jpg", "/path/to/screenshot2.jpg"],
    backgroundColor: "#5391AE"
  },
  {
    title: "Locket",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/locket-logo.png",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'TypeScript', 'Prisma', 'Material UI', 'Google Cloud Speech', 'Google Cloud Storage', 'Stripe', 'TailwindCSS', 'TipTap', 'Vercel', 'Google APIs', 'Next.js', 'NextAuth', 'Open AI', 'Novel.sh'],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#85B464"
  },
  {
    title: "Copper Cow Coffee",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/ccc-cow-logo.jpeg",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['Vue', 'Vuex', 'Shopify', 'Liquid'],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#FEBFC6"
  },
  {
    title: "Inside Tracker",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/IT_stacked_logo_fullcolor.png",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#957dc1"
  },
  {
    title: "Sprinly",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/sprinly-graphic.webp",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#f7cd6a"
  },
  {
    title: "Omnique",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/omnique-logo.png",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#48a6b5"
  },
];

const ProjectGrid: React.FC = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
