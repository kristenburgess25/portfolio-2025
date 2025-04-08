"use client";

import React from "react";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    clientName: "Elementum Tech",
    // logo: "../logos/copper-cow-coffee-logo.avif",
    logo: "../logos/elementum-logo.png",
    description: "Elementum Tech is an e-commerce-focused startup dedicated to building innovative solutions for online merchants, with a focus on Shopify-based businesses. Our products enable brands to create immersive, AI-powered experiences and optimize their digital presence.",
    link: "https://www.elementumtech.io",
    shopifyPlusPartner: false,
    keyAchievements:['⚡ Built an AI-powered content generation tool that allows users to import social media content and create engaging blog posts, enhancing content marketing strategies.', '⚡ Developed a no-code e-commerce experience builder that enables users to design and host immersive, interactive shopping environments with ease.', '⚡ Designed & built a fully customizable Shopify 2.0 theme, providing merchants with maximum flexibility and performance.'],
    backgroundColor: ""
  },
  {
    clientName: "Govalo",
    logo: "../logos/govalo-logo-mono-light.png",
    description: "Govalo is a fintech/e-commerce startup transforming the digital gifting experience, helping Shopify merchants customize, streamline, and scale their gift offerings. Recruited internally from The Taproom, I was one of the first developers to help build this platform and take it to market.",
    link: "https://www.govalo.com",
    shopifyPlusPartner: true,
    keyAchievements:['⚡ Engineered a Shopify-integrated React app that processed $1M+ in gift card transactions within 4 months', '⚡ Developed custom bulk gift card issuance functionality, enabling merchants to generate hundreds of gift cards in one click via CSV upload.', '⚡ Built gift card customization tools, allowing users to create multiple unique and branded card designs.', '⚡ Implemented end-to-end testing across Govalo’s codebases, improving stability and reducing regression issues.'],
    backgroundColor: ""
  },
  {
    clientName: "The Taproom Agency",
    logo: "../logos/taproom-agency-logo.png",
    description: "The Taproom Agency was a leading e-commerce agency specializing in high-performance Shopify solutions for well-known brands. I worked on redesigning and rebuilding Shopify stores for some well-known clients. I also developed custom Vue applications that seamlessly integrated into Shopify themes—enhancing store functionality with unique, interactive components.",
    link: "https://www.thetaproom.com/",
    shopifyPlusPartner: true,
    keyAchievements:['⚡ Developed a custom quiz app for Copper Cow Coffee, allowing customers to receive personalized product recommendations, increasing engagement and conversions.', '⚡ Created an interactive product comparison app, greatly improving the customer shopping experience for Inside Tracker’s complex genetic data product offerings.', '⚡ Created a custom gifting portal for Sprinly, integrating Recharge to enable seamless gifting of recurring meal service subscriptions.'],
    backgroundColor: ""
  },
  {
    clientName: "DevIQ",
    logo: "../logos/deviq-2.png",
    description: "Formerly Hatton Point, DevIQ is a software consultancy specializing in highly complex, data-driven applications for large-scale clients across multiple industries, including automotive, entertainment, medical, and education. I worked on challenging full-stack projects, collaborating closely with clients from initial sales discussions through production deployment.",
    link: "https://www.deviq.io",
    shopifyPlusPartner: false,
    keyAchievements:['⚡ Helped secure $450K+ in new business as part of a three-person sales development team, driving client acquisition through technical expertise and project scoping.', '⚡ Led three greenfield projects from the sales phase through production release, working closely with stakeholders to design and implement scalable solutions.', '⚡ Designed and built a real-time live chat application for an automotive software company, improving communication and workflow efficiency for service centers.', '⚡ Developed a high-performance data visualization tool that enabled clients to manage and analyze millions of rows of data, optimizing decision-making processes for large-scale operations.'],
    backgroundColor: ""
  },
  {
    clientName: "AGEX, Inc.",
    logo: "../logos/agex-logo-2.png",
    description: "AGEX is an ag-tech startup building a fully licensed and bonded online livestock auction and marketplace—think eBay for cattle. The company had a unique technical scope, not only developing software solutions for livestock trading but also innovating with custom cattle scales and a QR-based electronic identification (EID) system for tracking livestock.",
    link: "https://www.agex.io",
    shopifyPlusPartner: false,
    keyAchievements:['⚡ Led frontend development on the marketplace and herd management apps, delivering core functionality for buyers, sellers, and ranchers', '⚡ Implemented end-to-end testing (E2E) across all platforms, improving stability and reliability.', '⚡ Designed all wireframes and prototypes for AGEX’s software suite, ensuring intuitive UX and UI.', '⚡ Played a major role in product development for the herd management app, working closely with stakeholders to define features and workflows'],
    backgroundColor: ""
  },
  {
    clientName: "GrainBridge, LLC",
    logo: "../logos/grainbridge-white-logo.png",
    description: "GrainBridge was a startup software company specializing in risk management and offer management tools for agricultural businesses. As the first hire, I played a critical role in shaping the company’s growth, wearing multiple hats across sales, marketing, client relations, and content strategy. (GrainBridge was acquired in 2021.)",
    link: "https://app.grainbridge.com/",
    shopifyPlusPartner: false,
    keyAchievements:['⚡ Expanded business into three new states, generating $250K+ in new revenue through strategic partnerships and outreach.', '⚡ Featured speaker at national industry events and forums, positioning GrainBridge as a thought leader in agricultural risk management.', '⚡ Implemented an SEO strategy that increased inbound customer inquiries by 200%.', '⚡ Wrote industry articles featured in national publications, enhancing brand visibility and credibility.', '⚡ Produced promotional and educational video content, helping clients understand and adopt GrainBridge’s technology.'],
    backgroundColor: ""
  },
  // Add more projects here
];

const CompanyGrid: React.FC = () => {
  return (
    <Grid 
      container 
      spacing={4} 
      justifyContent="center"
      alignItems="center" 
      sx={{ padding: 2 }}
    >
      {companies.map((company, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index} display="flex" justifyContent="center">
          <CompanyCard project={company} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyGrid;
