"use client";

import CompanyGrid from "@/components/CompanyGrid";
import ProjectGrid from "@/components/ProjectGrid";
// import PersonalProjects from "@/components/PersonalProjects";
import { Typography } from "@mui/material";

const ProjectsPage: React.FC = () => {
    return (
      <div id="employment-history">
        <link href="https://fonts.googleapis.com/css2?family=Zain:wght@400;700&display=swap" rel="stylesheet"/>
        <div id="client-projects" style={{ background: "linear-gradient(to bottom, #BFA2DB, #312244)" }}>
        
        <Typography variant="h1" sx={{ fontFamily: "'Zain', serif", margin: "auto", textAlign: "center", paddingTop: '3rem' }}>
            Work Experience
        </Typography>
        <CompanyGrid />
        </div>
        {/* <div id="personal-projects">
          <PersonalProjects />
        </div> */}
        <div id="client-projects" style={{ backgroundColor: "#312244" }}>
        <Typography variant="h1" sx={{ fontFamily: "'Zain', serif", fontWeight: 700, margin: "auto", textAlign: "center", paddingTop: '3rem' }}>
            Client Projects
        </Typography>
        <br />
        <ProjectGrid />
        </div>

      </div>
    );
  };
  
  export default ProjectsPage;