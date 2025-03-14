"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// import ProjectCard from "./ProjectCard";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";


const projects = [
  {
    title: "Kristen Loves Cookies",
    description: "A full stack/full snack and ad-free recipe box - and my first Python project!",
    image: "../logos/Cookies-Logo-PNG.png",
    liveLink: "https://www.kristenlovescookies.com",
    githubLink: "https://github.com/kristenburgess25/kristen-loves-cookies",
    techStack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Python', 'FastAPI', 'SQLAlchemy', 'GraphQL', 'TailwindCSS', 'Material UI', 'Vercel', 'Google Cloud Run', 'Google Cloud SQL'],
    moreDetails: "I don't know if you've been on any baking blogs to grab a recipe lately, but it's kind of an exhausting and ad-full mess. I wanted a beautiful place to share my favorite recipes- and I wanted a fun and approachable project for building my first Python/FastAPI backend.",
    screenshots: ["/screenshots/klc-1.png", "/screenshots/klc-2.png"],
    backgroundColor: "#99D0F7"
  },
  {
    title: "ShopScene",
    description: "A full-stack headless e-commerce web app, for merchants and content creators to create rich, immersive experiences for customers with a no-code page builder.",
    image: "../logos/shopscene-logo-nobg.png",
    liveLink: "https://www.elementumtech.io",
    githubLink: "",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Prisma','Craft.js','MUI', 'Sendgrid', 'Shopify Hydrogen','Vite', 'Vercel','Framer','Google APIs', 'GraphQL', 'TailwindCSS', 'NextAuth', 'oAuth'],
    moreDetails: "This platform allows users to create unique online shopping experiences. Essentially, instead of having a gridded page of products to peruse, our users could create interactive rooms to show off products. This could be achieved through arranging 3D product images in a space, or by using an image of a space (for example, an actual showroom or a digital mockup) and creating interactive hotspots. The platform could be linked with Shopify to import all products to create a custom headless Shopify storefront, with its own custom Shopify checkout experience. Users could also link to their Instagram accounts to import social media content and feeds to include in their store experience. With this integration, the platform was also used by content creators who could create a room with links to product partnerships.",
    screenshots: ["/screenshots/shopscene-screen-1.png", "/screenshots/shopscene-screen-2.png", "/screenshots/shopscene-screen-3.png", "/screenshots/shopscene-screen-4.png"],
    backgroundColor: "#f49546"
  },
  {
    title: "Locket",
    description: " Full Stack Content Creation Web App w/ AI Integration  ",
    image: "../logos/locket-logo.png",
    liveLink: "https://www.elementumtech.io",
    githubLink: "",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Prisma', 'MUI', 'Google Cloud Speech, Store, Functions', 'Stripe', 'TailwindCSS', 'TipTap', 'Vercel', 'Google APIs', 'NextAuth', 'oAuth', 'Open AI', 'Novel.sh'],
    moreDetails: "A full stack web app for generating custom blog content from social media posts. A user would upload a video via social media link or direct upload. The audio would then be stripped from the video (ffmpeg) and transcribed to text (Google Cloud Speech). The text would then be analyzed with AI, cleaning it up, and improving it. This text would then be populated to a novel.sh editor, where the user could continue to revise the written content for the post with AI or manually, as well as adding additional media and links. When editing is complete, the post is published to a personal feed.",
    screenshots: [],
    backgroundColor: "#A9C33D"
  },
  {
    title: "Copper Cow Coffee",
    description: "A Shopify store custom theme and quiz app.",
    image: "../logos/ccc-cow-logo.jpeg",
    liveLink: "https://coppercowcoffee.com/",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Shopify', 'Liquid'],
    moreDetails: "A full redesign and rebuilding of Copper Cow Coffee's online Shopify store, with a custom Vue app built into the theme that allowed customers to take a quiz, which generatd personalized product recommendations. We were able to measure a 32% increase in home page engagement through the quiz. This app was a true logic game treat to build! ",
    screenshots: [],
    backgroundColor: "#FEBFC6"
  },
  {
    title: "Inside Tracker",
    description: "Shopify custom theme rebuild with custom Vue apps.",
    image: "../logos/IT_stacked_logo_fullcolor.png",
    liveLink: "https://www.insidetracker.com/",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vuetify', 'Shopify', 'Liquid'],
    moreDetails: "InsideTracker analyzes your blood biomarkers, DNA, wearable data, and lifestyle to help you improve your healthspan through nutrition, supplements, exercise, and lifestyle recommendations. Created by experts in aging and genetics from Tufts and MIT, InsideTracker provides a personal health analysis and data-driven wellness guide designed to help you live healthier longer. This project was a full rebuilding of their online presence. A lot of the interesting challenge with this project was the complexity of their products and finding the most intuitive ways to show off their offerings and features.",
    screenshots: [],
    backgroundColor: "#4F9BBE"
  },
  {
    title: "Sprinly",
    description: "Custom Shopify theme updates and custom checkout experience.",
    image: "../logos/sprinly-graphic.webp",
    liveLink: "https://sprinly.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Vue', 'Vuex', 'Recharge'],
    moreDetails: "Sprinly is a plant-based meal planning and delivery service. This project involved redesigning and building several areas of their website, particularly their PDPs. My proudest contribution to the project was a custom checkout portal which allowed customers to give Sprinly meal service subscriptions as gifts.",
    screenshots: [],
    backgroundColor: "#ffd24c"
  },
  // {
  //   title: "Developer Portfolio",
  //   description: "This website you are currently looking at.",
  //   image: "../logos/sprinly-graphic.webp",
  //   liveLink: "https://sprinly.com/",
  //   githubLink: "",
  //   techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
  //   moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
  //   screenshots: ["/screenshots/shopscene-screen-1.png", "/screenshots/shopscene-screen-2.png"],
  //   backgroundColor: "#B69BD2"
  // },
  // {
  //   title: "Omnique",
  //   description: "A sleek and responsive portfolio showcasing my projects.",
  //   image: "../logos/omnique-logo.png",
  //   liveLink: "https://myportfolio.com",
  //   githubLink: "https://github.com/myportfolio",
  //   techStack: ['React', 'Typescript', 'Prisma','CraftJS','Material UI', 'Sendgrid','Shopify', 'Shopify Hydrogen', 'Stripe','Vercel','Framer','Google APIs', 'GraphQL', 'NextJS', 'PostCSS', 'TailwindCSS',],
  //   moreDetails: "Built with React, TailwindCSS, and hosted on Vercel.",
  //   screenshots: ["/path/to/screenshot3.jpg", "/path/to/screenshot4.jpg"],
  //   backgroundColor: "#48a6b5"
  // },
];

const ProjectGrid: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

  return (
    <div id="projects-grid" style={{ marginBottom: "-1rem", padding: "0 1.5rem 3rem 1.5rem" }}>
      {projects.map((project, index) => (
        // <ProjectCard key={index} {...project} />
        isMobile ? (
          <ProjectCardMobile key={index} project={project} /> 
        ) : (
          <ProjectCardDesktop key={index} project={project} />
        )
      ))}
    </div>
  );
};

export default ProjectGrid;
