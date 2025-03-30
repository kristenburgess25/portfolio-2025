import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Kristen Loves Cookies",
    description: "A full stack/full snack and ad-free recipe box - and my first Python project!",
    image: "../logos/Cookies-Logo-PNG.png",
    liveLink: "https://www.kristenlovescookies.com",
    githubLink: "https://github.com/kristenburgess25/kristen-loves-cookies",
    techStack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Python', 'FastAPI', 'SQLAlchemy', 'GraphQL', 'TailwindCSS', 'Material UI', 'Vercel', 'Google Cloud Run', 'Google Cloud SQL'],
    moreDetails: "I don't know if you've been on any baking blogs to grab a recipe lately, but it's kind of an exhausting and ad-full mess. I wanted a beautiful place to share my favorite recipes- and I wanted a fun and approachable project for building my first Python/FastAPI backend.",
    screenshots: ["/screenshots/klc-1.png", "/screenshots/klc-2.png"],
    backgroundColor: "#99D0F7",
    tags:['backend', 'frontend', 'fullstack', 'design', 'personal'],
    subtags: [],
    featured: false,
    year: "2025",
    id: "kristen-loves-cookies",
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
    backgroundColor: "#f49546",
    tags:['backend', 'frontend', 'fullstack', 'design', 'shopify', 'app', 'pro', 'ecomm'],
    subtags: ['headless', 'custom-cart', 'shopify-api', 'shopify-hydrogen'],
    featured: false,
    year: "2022-2024",
    id: "shop-scene",
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
    image: "",
    liveLink: "https://www.elementumtech.io",
    githubLink: "https://github.com/kristenburgess25/zinc-theme",
    techStack: ['HTML', 'Liquid', 'Shopify', 'Javascript', 'Vue', 'HeadlessUI', 'CSS', 'PostCSS', 'TailwindCSS', 'Vite', 'ThemeCheck'],
    moreDetails: "A full stack web app for generating custom blog content from social media posts. A user would upload a video via social media link or direct upload. The audio would then be stripped from the video (ffmpeg) and transcribed to text (Google Cloud Speech). The text would then be analyzed with AI, cleaning it up, and improving it. This text would then be populated to a novel.sh editor, where the user could continue to revise the written content for the post with AI or manually, as well as adding additional media and links. When editing is complete, the post is published to a personal feed.",
    screenshots: [],
    backgroundColor: "#A9C33D",
    tags:['backend', 'frontend', 'fullstack', 'googlecloud', 'app', 'pro', 'ecomm'],
    subtags: ['theme', 'app', 'custom-cart', 'shopify-api'],
    featured: false,
    year: "2022-2023",
    id: "zinc-theme",
  },
  {
    title: "Copper Cow Coffee",
    description: "A Shopify store custom theme and quiz app.",
    image: "../logos/ccc-cow-logo.jpeg",
    liveLink: "https://coppercowcoffee.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS', 'PostCSS', 'Vue', 'Vuex', 'GraphQL', 'ThemeCheck'],
    moreDetails: "A full redesign and rebuilding of Copper Cow Coffee's online Shopify store, with a custom Vue app built into the theme that allowed customers to take a quiz, which generatd personalized product recommendations. We were able to measure a 32% increase in home page engagement through the quiz. This app was a true logic game treat to build! ",
    screenshots: [],
    backgroundColor: "#FEBFC6",
    tags:['frontend', 'shopify', 'pro', 'ecomm'],
    subtags: ['theme', 'app', 'custom-cart', 'shopify-api', 'shopify-plus', 'migration', 'recharge'],
    featured: false,
    year: "2021",
    id: "copper-cow-coffee",
  },
  {
    title: "Inside Tracker",
    description: "Shopify custom theme rebuild with custom Vue apps.",
    image: "../logos/IT_stacked_logo_fullcolor.png",
    liveLink: "https://www.insidetracker.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'ThemeCheck', 'Javascript', 'PostCSS', 'Vue', 'Vuex', 'Vuetify'],
    moreDetails: "InsideTracker analyzes your blood biomarkers, DNA, wearable data, and lifestyle to help you improve your healthspan through nutrition, supplements, exercise, and lifestyle recommendations. Created by experts in aging and genetics from Tufts and MIT, InsideTracker provides a personal health analysis and data-driven wellness guide designed to help you live healthier longer. This project was a full rebuilding of their online presence. A lot of the interesting challenge with this project was the complexity of their products and finding the most intuitive ways to show off their offerings and features.",
    screenshots: [],
    backgroundColor: "#4F9BBE",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['theme', 'app', 'shopify-plus', 'migration'],
    featured: false,
    year: "2021",
    id: "inside-tracker",
  },
  {
    title: "Sprinly",
    description: "Custom Shopify theme updates and custom checkout experience.",
    image: "../logos/sprinly-graphic.webp",
    liveLink: "https://sprinly.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS', 'Recharge'],
    moreDetails: "Sprinly is a plant-based meal planning and delivery service. This project involved redesigning and building several areas of their website, particularly their PDPs. My proudest contribution to the project was a custom checkout portal which allowed customers to give Sprinly meal service subscriptions as gifts.",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['recharge', 'custom-cart'],
    featured: false,
    year: "2021",
    id: "sprinly",
  },
  {
    title: "Furry Freshness",
    description: "Custom Shopify theme updates, recurring client.",
    image: "",
    liveLink: "https://shop.furryfreshness.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['shopify', 'frontend', 'pro', 'ecomm'],
    subtags: ['theme'],
    featured: false,
    year: "2021",
    id: "furry-freshness",
  },
  {
    title: "Mint Julep",
    description: "Custom Shopify theme, custom app, and Shopify Plus store migration.",
    image: "",
    liveLink: "https://shopthemint.com/",
    githubLink: "",
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Vue', 'CSS'],
    moreDetails: "The Mint Julep Boutique teamed up with us to migrate their large store over to Shopify Plus, giving the store a fresh new look in the process with a custom variant selector app.",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['shopify', 'frontend', 'pro'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: false,
    year: "2020",
    id: "mint-julep",
  },
  {
    title: "Govalo",
    description: "Shopify ",
    image: "",
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
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['shopify', 'frontend', 'backend', 'fullstack', 'app', 'pro'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: false,
    year: "2022",
    id: "govalo",
  },
  {
    title: "Kristen Burgess Portfolio",
    description: "This beautiful site you're looking at.",
    image: "",
    liveLink: "https://www.kristen-burgess.dev/",
    githubLink: "https://github.com/kristenburgess25/portfolio-2025",
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MUI', 'TailwindCSS', 'PostCSS'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['personal', 'frontend', 'fullstack', 'design'],
    subtags: ['app', 'shopify-plus', 'migration'],
    featured: false,
    year: "2025",
    id: "kristen-burgess-portfolio",
  },
  {
    title: "Omnique Chat",
    description: "Custom live chat app for automotive shop management platform.",
    image: "",
    liveLink: "https://omnique.com/",
    githubLink: "",
    techStack: ['React', 'Redux', 'Javascript', 'SCSS', 'ASP.NET', 'MSSQL', 'SignalR' ],
    moreDetails: "Additional SPA added to existing large application to allow live chat between auto shop managers and customers.",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018",
    id: "omnique-chat",
  },
  {
    title: "Omnique Marketing",
    description: "A SPA added to existing large application for creating, managing, and sending marketing campaigns via e-mail or SMS.",
    image: "",
    liveLink: "https://omnique.com/",
    githubLink: "",
    techStack: ['Javascript', 'Knockout.js', 'Durandal','ASP.NET', 'MSSQL' ],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2019",
    id: "omnique-marketing",
  },
  {
    title: "Dealer 360",
    description: "A web app for for auto dealerships to analyze and validate inventory and sales records across multiple locations.",
    image: "",
    liveLink: "https://dlr360.com/",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vue-Router', 'Jest', 'ASP.NET'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018",
    id: "dealer-360",
  },
  {
    title: "AGEX Market",
    description: "Mobile-friendly web app built for handling eBay-style cattle auctions.",
    image: "",
    liveLink: "https://www.agex.io/",
    githubLink: "",
    techStack: ['Javascript', 'React', 'Next.js', 'Redux', 'Node.js', 'Express', 'Jest', 'Enzyme', 'Sinon', 'SCSS', 'Material UI', 'AWS', 'ElasticSearch' ],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2017",
    id: "agex",
  },
  {
    title: "Harmony Arms",
    description: "Progressive web app built for e-commerce, using third party payment processors.",
    image: "",
    liveLink: "",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vue-Router', 'Vue-Storefront', 'Google Firebase', 'BigCommerce'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'ecomm', 'design'],
    subtags: ['headless', 'app'],
    featured: false,
    year: "2020",
    id: "harmony-arms",
  },
  {
    title: "FracTrends",
    description: "Responsive web app for client's internal use for importing and managing millions of rows of fracking data from multiple sources.",
    image: "",
    liveLink: "",
    githubLink: "",
    techStack: ['Vue', 'Vuex', 'Vue-Router', 'Jest', 'Sinon', 'MSSQL', 'oData', '.NET Core'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['pro', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2018-2019",
    id: "fractrends",
  },
  {
    title: "Calf Tracker",
    description: "Responsive web application for my family's use in tracking births and weights of calves on our family's cattle ranch.",
    image: "",
    liveLink: "",
    githubLink: "",
    techStack: ['JavaScript', 'SCSS', 'React', 'Redux', 'Google Firebase', 'Jest', 'Enzyme'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['personal', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2017",
    id: "calf-tracker",
  },
  {
    title: "Can Chaser",
    description: "Responsive web application for tracking barrel racing events.",
    image: "",
    liveLink: "",
    githubLink: "https://github.com/kristenburgess25/CanChaser",
    techStack: ['JavaScript', 'SCSS', 'React', 'Redux', 'Google Firebase', 'Jest'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['personal', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2016",
    id: "can-chaser",
  },
  {
    title: "Halloween Hangman Game",
    description: "A project from Turing school to build a game using HTML, CSS, and vanilla JavaScript.",
    image: "",
    liveLink: "https://kristenburgess25.github.io/game-time/",
    githubLink: "https://github.com/kristenburgess25/game-time",
    techStack: ['JavaScript', 'CSS', 'HTML'],
    moreDetails: "",
    screenshots: [],
    backgroundColor: "#ffd24c",
    tags:['personal', 'frontend', 'backend', 'fullstack', 'app' ],
    subtags: [],
    featured: false,
    year: "2016",
    id: "halloween-hangman",
  },
];