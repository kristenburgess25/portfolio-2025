"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

// const projects = [
//   {
//     clientName: "ShopScene",
//     logo: "../logos/shopscene-logo.png",
//     description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
//     link: "https://example.com/client-a",
//   },
//   {
//     clientName: "Locket",
//     logo: "../logos/locket-logo.jpg",
//     description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
//     link: "https://example.com/client-a",
//   },
//   {
//     clientName: "Copper Cow Coffee",
//     // logo: "../logos/copper-cow-coffee-logo.avif",
//     logo: "../logos/ccc-cow-logo.jpeg",
//     description: "Developed a responsive e-commerce platform with a focus on performance and user experience.",
//     link: "https://example.com/client-a",
//   },
//   {
//     clientName: "Inside Tracker",
//     logo: "../logos/IT_stacked_white_logo-only.png",
//     description: "Built a custom CMS solution to streamline content creation and management.",
//     link: "https://example.com/client-b",
//   },
//   {
//     clientName: "Sprinly",
//     logo: "../logos/sprinly-graphic.webp",
//     description: "Built a custom CMS solution to streamline content creation and management.",
//     link: "https://example.com/client-b",
//   },
//   {
//     clientName: "Omnique",
//     logo: "../logos/omnique-logo.jpg",
//     description: "Built a custom CMS solution to streamline content creation and management.",
//     link: "https://example.com/client-b",
//   },
//   {
//     clientName: "Farm Credit Services of America",
//     logo: "../logos/FCSA-logo-only.jpg",
//     description: "Built a custom CMS solution to streamline content creation and management.",
//     link: "https://example.com/client-b",
//   },
//   // Add more projects here
// ];


const projects = [
  {
    title: "ShopScene",
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
    title: "Locket",
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
    title: "Copper Cow Coffee",
    description: "A sleek and responsive portfolio showcasing my projects.",
    image: "../logos/ccc-cow-logo.jpeg",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
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
    image: "../logos/omnique-logo.jpg",
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/myportfolio",
    techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
    moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
    screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
    backgroundColor: "#A75051"
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;


// const ProjectGrid: React.FC = () => {
//   return (
//     <Grid container spacing={4} sx={{ padding: 4 }}>
//       {projects.map((project, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <ProjectCard project={project} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ProjectGrid;
