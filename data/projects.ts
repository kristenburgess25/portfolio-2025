import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Kristen Loves Cookies",
    description: "A full stack/full snack and ad-free recipe box - and my first Python project! Featuring light and dark viewing modes.",
    logo: "/logos/Cookies-Logo-PNG.png",
    image: "/screenshots/klc-1.5.png",
    liveLink: "https://www.kristenlovescookies.com",
    githubLink: "https://github.com/kristenburgess25/kristen-loves-cookies",
    techStack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Python', 'FastAPI', 'SQLAlchemy', 'GraphQL', 'TailwindCSS', 'Material UI', 'Vercel', 'Google Cloud Run', 'Google Cloud SQL'],
    moreDetails: "I don't know if you've been on any baking blogs to grab a recipe lately, but it's kind of an exhausting and ad-full mess. I wanted a beautiful place to share my favorite recipes- and I wanted a fun and approachable project for building my first Python/FastAPI backend. I am additionally proud of the light/dark/system theme modes on this; no one wants a bright white blog when your machine is on dark mode!",
    screenshots: ["/screenshots/klc-1.png", "/screenshots/klc-2.png"],
    backgroundColor: "#99D0F7",
    tags:['backend', 'frontend', 'fullstack', 'design', 'personal', 'featured', 'github'],
    subtags: [],
    featured: true,
    year: "2025",
    id: "kristen-loves-cookies",
  },
  {
    title: "Kristen Burgess Portfolio",
    description: "This beautiful site you're looking at.",
    logo: "",
    image: "/images/kb-portfolio-1.png",
    liveLink: "https://www.kristen-burgess.dev/",
    githubLink: "https://github.com/kristenburgess25/portfolio-2025",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MUI', 'TailwindCSS', 'PostCSS'],
    moreDetails: "",
    screenshots: ["/images/kb-portfolio-1.png"],
    backgroundColor: "#b69ad3",
    tags:['personal', 'frontend', 'design', 'github'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: true,
    year: "2025",
    id: "kristen-burgess-portfolio",
  },
  {
    title: "ShopScene",
    description: "A full-stack headless e-commerce web app, for merchants and content creators to create rich, immersive experiences for customers with a no-code page builder.",
    logo: "/logos/shopscene-logo-nobg.png",
    image: "/screenshots/shopscene-screen-3.png",
    liveLink: "https://www.elementumtech.io",
    githubLink: "",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Prisma','Craft.js','MUI', 'Sendgrid', 'Shopify Hydrogen','Vite', 'Vercel','Framer','Google APIs', 'GraphQL', 'TailwindCSS', 'NextAuth', 'oAuth'],
    moreDetails: "This platform allows users to create unique online shopping experiences. Essentially, instead of having a gridded page of products to peruse, our users could create interactive rooms to show off products. This could be achieved through arranging 3D product images in a space, or by using an image of a space (for example, an actual showroom or a digital mockup) and creating interactive hotspots. The platform could be linked with Shopify to import all products to create a custom headless Shopify storefront, with its own custom Shopify checkout experience. Users could also link to their Instagram accounts to import social media content and feeds to include in their store experience. With this integration, the platform was also used by content creators who could create a room with links to product partnerships.",
    screenshots: ["/screenshots/shopscene-screen-1.png", "/screenshots/shopscene-screen-2.png", "/screenshots/shopscene-screen-3.png", "/screenshots/shopscene-screen-4.png"],
    backgroundColor: "#f49546",
    tags:['backend', 'frontend', 'fullstack', 'design', 'shopify', 'app', 'pro', 'ecomm', 'featured'],
    subtags: ['headless', 'custom-cart', 'shopify-api', 'shopify-hydrogen'],
    featured: true,
    year: "2022-2024",
    id: "shop-scene",
  },
  {
    title: "Locket",
    description: " Full Stack Content Creation Web App w/ AI Integration  ",
    logo: "/logos/locket-logo.png",
    image: "/images/locket.png",
    liveLink: "https://www.elementumtech.io",
    githubLink: "",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Prisma', 'MUI', 'Google Cloud Speech, Store, Functions', 'Stripe', 'TailwindCSS', 'TipTap', 'Vercel', 'Google APIs', 'NextAuth', 'oAuth', 'Open AI', 'Novel.sh'],
    moreDetails: "A full stack web app for generating custom blog content from social media posts. A user would upload a video via social media link or direct upload. The audio would then be stripped from the video (ffmpeg) and transcribed to text (Google Cloud Speech). The text would then be analyzed with AI, cleaning it up, and improving it. This text would then be populated to a novel.sh editor, where the user could continue to revise the written content for the post with AI or manually, as well as adding additional media and links. When editing is complete, the post is published to a personal feed.",
    screenshots: ["/images/locket.png"],
    backgroundColor: "#A9C33D",
    tags:['backend', 'frontend', 'fullstack', 'googlecloud', 'app', 'pro'],
    subtags: [],
    featured: false,
    year: "2024",
    id: "locket",
  },
  {
    title: "Zinc Theme",
    description: "Highly Flexible Shopify 2.0 Theme",
    logo: "",
    image: "/images/dawn.png",
    liveLink: "https://www.elementumtech.io",
    githubLink: "https://github.com/kristenburgess25/zinc-theme",
    techStack: ['HTML', 'Liquid', 'Shopify', 'Javascript', 'Vue', 'HeadlessUI', 'CSS', 'PostCSS', 'TailwindCSS', 'Vite', 'ThemeCheck'],
    moreDetails: "The Zinc Theme created by Elementum Tech shortly after Shopify 2.0 was announced, making it one of the first themes made in this new format. The theme was incredibly flexible and customizable, featuring a beautiful custom megamenu built with Vue.",
    screenshots: ["/images/dawn.png"],
    backgroundColor: "#4d5374",
    tags:['frontend', 'googlecloud', 'app', 'pro', 'ecomm', 'shopify', 'github'],
    subtags: ['theme', 'app', 'custom-cart', 'shopify-api'],
    featured: false,
    year: "2022-2023",
    id: "zinc-theme",
  },
  {
    title: "Govalo",
    description: "Shopify ",
    logo: "",
    image: "/images/govalo-home.png",
    liveLink: "https://www.govalo.com/",
    githubLink: "",
    techStack: [  
      "JavaScript",
      "HTML/CSS",
      "TypeScript",
      "React",
      "MaterialUI",
      "TailwindCSS",
      "Node.js",
      "Koa",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Apollo",
      "Shopify (app development, custom integrations)",
      "Docker",
      "Heroku",
      "Git",
      "GH Actions",
      "CI/CD",
      "Figma",
      "Jest",
      "Sinon",
      "Cypress",
      "Sendgrid"
    ],
    moreDetails: "Govalo is a public Shopify app that gives merchants a premium digital gifting experience for their stores. While working on the app, I helped build key user flows that let merchants create custom-branded digital gift cards and offer scheduled email delivery on behalf of their customers. The goal was to replace the outdated default gift card experience with a more flexible, thoughtful solution. From a customer's perspective, Govalo allows you to choose a gift design, schedule delivery to a recipient, and include a personalized message — all inside the Shopify checkout flow. On the backend, we built robust merchant-facing tools for branding, fulfillment, and tracking. Govalo is publicly available in the Shopify App Store and used by a growing number of merchants to create a more human and polished gifting experience.",
    screenshots: ["/images/govalo-home.png", "/screenshots/govalo-app-1.png"],
    backgroundColor: "#8284e6",
    tags:['shopify', 'frontend', 'backend', 'fullstack', 'app', 'pro'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: true,
    year: "2022",
    id: "govalo",
  },
  {
    title: "Inside Tracker",
    description: "Shopify custom theme rebuild with custom Vue apps.",
    logo: "/logos/IT_stacked_logo_fullcolor.png",
    image: "/images/inside-tracker-1.png",
    liveLink: "https://www.insidetracker.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'ThemeCheck', 'Javascript', 'PostCSS', 'Vue', 'Vuex', 'Vuetify'],
    moreDetails: "InsideTracker analyzes your blood biomarkers, DNA, wearable data, and lifestyle to help you improve your healthspan through nutrition, supplements, exercise, and lifestyle recommendations. Created by experts in aging and genetics from Tufts and MIT, InsideTracker provides a personal health analysis and data-driven wellness guide designed to help you live healthier longer. This project was a full rebuilding of their online presence. A lot of the interesting challenge with this project was the complexity of their products and finding the most intuitive ways to show off their offerings and features.",
    screenshots: ["/images/inside-tracker-1.png"],
    backgroundColor: "#005753",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['theme', 'app', 'shopify-plus', 'migration'],
    featured: true,
    year: "2021",
    id: "inside-tracker",
  },
  {
    title: "Copper Cow Coffee",
    description: "A Shopify store custom theme and quiz app.",
    logo: "/logos/ccc-cow-logo.jpeg",
    image: "/images/ccc-product-1.png",
    liveLink: "https://coppercowcoffee.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS', 'PostCSS', 'Vue', 'Vuex', 'GraphQL', 'ThemeCheck'],
    moreDetails: "Featured on Shark Tank, Copper Cow Coffee is a unique, woman-owned coffee company focused on Vietnamese style pour-over coffees in fabulous flavors. (I still order the churro flavor a few times a year!) This project at the Taproom Agency was full redesign and rebuild of Copper Cow Coffee's online Shopify store, with a custom Vue app built into the theme that allowed customers to take a quiz, which generated personalized product recommendations. We were able to measure a 32% increase in home page engagement through the quiz. This app was a true logic game treat to build! This build also included a custom cart, as well as a migration of all of CCC's products from their existing Shopify Plus store.",
    screenshots: ["/images/copper-cow-coffee.jpg"],
    backgroundColor: "#FEBFC6",
    tags:['frontend', 'shopify', 'pro', 'ecomm', 'sharktank'],
    subtags: ['theme', 'app', 'custom-cart', 'shopify-api', 'shopify-plus', 'migration', 'recharge'],
    featured: true,
    year: "2021",
    id: "copper-cow-coffee",
  },
  {
    title: "Sprinly",
    description: "Custom Shopify theme updates and custom checkout experience.",
    logo: "/logos/sprinly-graphic.webp",
    image: "/images/sprinly-1.png",
    liveLink: "https://sprinly.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS', 'Recharge'],
    moreDetails: "Sprinly is a plant-based meal planning and delivery service. This project involved redesigning and building several areas of their Shopify store, particularly their PDPs. My proudest contribution to the project was a custom checkout portal which allowed customers to give Sprinly meal service subscriptions as gifts through Recharge.",
    screenshots: ["/images/sprinly-1.png"],
    backgroundColor: "#f55755",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['recharge', 'custom-cart'],
    featured: false,
    year: "2021",
    id: "sprinly",
  },
  {
    title: "Mint Julep",
    description: "Custom Shopify theme, custom app, and Shopify Plus store migration.",
    logo: "",
    image: "/images/mint-julep-1.png",
    liveLink: "https://shopthemint.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Vue', 'CSS'],
    moreDetails: "The Mint Julep Boutique teamed up with us to migrate their large store over to Shopify Plus, giving the store a fresh new look in the process with a custom variant selector app. This was my first Shopify theme development work at the Taproom Agency, and I was so proud to contribute to this beautiful and performant site!",
    screenshots: ["/images/mint-julep-1.png"],
    backgroundColor: "#b2dad0",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: true,
    year: "2020",
    id: "mint-julep",
  },
  {
    title: "Furry Freshness",
    description: "Custom Shopify theme updates, recurring client.",
    logo: "",
    image: "/images/furry-freshness.png",
    liveLink: "https://shop.furryfreshness.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS'],
    moreDetails: "Furry Freshness is a pet goods company, specializing in pet cleaning and odor management products. A long-time client of the Taproom Agency, I was the primary developer doing ongoing updates, improvements, and customizations to this Shopify storefront.",
    screenshots: ["/images/furry-freshness.png"],
    backgroundColor: "#1582b6",
    tags:['shopify', 'frontend', 'pro', 'ecomm'],
    subtags: ['theme'],
    featured: false,
    year: "2021",
    id: "furry-freshness",
  },
  {
    title: "Omnique Chat",
    description: "Custom live chat app for automotive shop management platform.",
    logo: "",
    image: "/images/omnique-1.png",
    liveLink: "https://omnique.com/",
    githubLink: "",
    techStack: ['React', 'Redux', 'Javascript', 'SCSS', 'ASP.NET', 'MSSQL', 'SignalR' ],
    moreDetails: "The Omnique chat app was a SPA added to existing large legacy application to allow live chat between auto shop managers and customers.",
    screenshots: ["/images/omnique-1.png"],
    backgroundColor: "#24628e",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018",
    id: "omnique-chat",
  },
  {
    title: "FracTrends",
    description: "Responsive web app for client's internal use for importing and managing millions of rows of fracking data from multiple sources.",
    logo: "",
    image: "/images/los-1.png",
    liveLink: "https://libertyenergy.com/resource-library/fractrends/",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vue-Router', 'Jest', 'Sinon', 'MSSQL', 'oData', '.NET Core'],
    moreDetails: "Built for Liberty Energy- one of North America's leading energy company- this was a complex data management app, built to allow teams within the company to manage and visualize millions of rows of fracking data from multiple sources.",
    screenshots: ["/images/los-1.png", "/screenshots/los-data-1.png"],
    backgroundColor: "#a60812",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018-2019",
    id: "fractrends",
  },
  // {
  //   title: "Omnique Marketing",
  //   description: "A SPA added to existing large application for creating, managing, and sending marketing campaigns via e-mail or SMS.",
  //   logo: "",
  //   image: "/images/omnique-1.png",
  //   liveLink: "https://omnique.com/",
  //   githubLink: "",
  //   techStack: ['Javascript', 'Knockout.js', 'Durandal','ASP.NET', 'MSSQL' ],
  //   moreDetails: "",
  //   screenshots: [],
  //   backgroundColor: "#ffd24c",
  //   tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
  //   subtags: [],
  //   featured: false,
  //   year: "2019",
  //   id: "omnique-marketing",
  // },
  {
    title: "Dealer 360 Analytics",
    description: "A web app for for auto dealerships to analyze and validate inventory and sales records across multiple locations.",
    logo: "",
    image: "/images/dlr360-1.png",
    liveLink: "https://dlr360.com/products/analytics/",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vue-Router', 'Jest', 'ASP.NET'],
    moreDetails: "A web app for for auto dealerships to analyze and validate inventory and sales records across multiple locations.",
    screenshots: ["/images/dlr360-1.png"],
    backgroundColor: "#16354a",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018",
    id: "dealer-360",
  },
  // {
  //   title: "Calf Tracker",
  //   description: "Responsive web application for my family's use in tracking births and weights of calves on our family's cattle ranch.",
  //   logo: "",
  //   image: "",
  //   liveLink: "",
  //   githubLink: "",
  //   techStack: ['JavaScript', 'SCSS', 'React', 'Redux', 'Google Firebase', 'Jest', 'Enzyme'],
  //   moreDetails: "",
  //   screenshots: [],
  //   backgroundColor: "#ffd24c",
  //   tags:['personal', 'frontend', 'backend', 'fullstack', 'app' ],
  //   subtags: [],
  //   featured: false,
  //   year: "2017",
  //   id: "calf-tracker",
  // },
  {
    title: "AGEX Market",
    description: "Mobile-friendly web app built for handling eBay-style cattle auctions.",
    logo: "",
    image: "/images/agex-old.jpg",
    liveLink: "https://www.agex.io/",
    githubLink: "",
    techStack: ['Javascript', 'React', 'Next.js', 'Redux', 'Node.js', 'Express', 'Jest', 'Enzyme', 'Sinon', 'SCSS', 'Material UI', 'AWS', 'ElasticSearch' ],
    moreDetails: "AGEX is an ag-tech startup building a fully licensed and bonded online livestock auction and marketplace—think eBay for cattle. The company had a unique technical scope, not only developing software solutions for livestock trading but also innovating with custom cattle scales and a QR-based electronic identification (EID) system for tracking livestock. I was the primary developer on both the AGEX Marketplace and AGEX Herd platforms. NOTE: If you visit the current live site, please know that this company stopped prioritizing design and the current site is absolutely not what I designed/built out.",
    screenshots: ["/images/agex-old.jpg"],
    backgroundColor: "#bdd753",
    tags:['pro', 'frontend', 'app' ],
    subtags: [],
    featured: false,
    year: "2017",
    id: "agex",
  },
  {
    title: "Can Chaser",
    description: "Responsive web application for tracking barrel racing events.",
    logo: "",
    image: "/images/can-chaser-short.jpg",
    liveLink: "",
    githubLink: "https://github.com/kristenburgess25/CanChaser",
    techStack: ['JavaScript', 'SCSS', 'React', 'Redux', 'Google Firebase', 'Jest'],
    moreDetails: "Built as one of my final projects while at The Turing School, this was an application for adding and tracing barrel racing events.",
    screenshots: [],
    backgroundColor: "#00807f",
    tags:['personal', 'frontend', 'app', 'github' ],
    subtags: ["Can Chaser"],
    featured: false,
    year: "2016",
    id: "can-chaser",
  },
  {
    title: "Halloween Hangman Game",
    description: "A project from Turing school to build a game using HTML, CSS, and vanilla JavaScript.",
    logo: "",
    image: "/images/halloween-hangman-2.png",
    liveLink: "https://kristenburgess25.github.io/game-time/",
    githubLink: "https://github.com/kristenburgess25/game-time",
    techStack: ['JavaScript', 'CSS', 'HTML'],
    moreDetails: "The final project of my first module at The Turing School, this simple logic game showcases my fundamental JavaScript skills. I added all of the words for the game myself, and yet the game still beats me regularly when I play! Give it a try!",
    screenshots: ["/images/halloween-hangman-2.png"],
    backgroundColor: "#f5b475",
    tags:['personal', 'frontend', 'app', 'github' ],
    subtags: [],
    featured: true,
    year: "2016",
    id: "halloween-hangman",
  },
];