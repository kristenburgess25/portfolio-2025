"use client";

import CompanyGrid from "@/components/CompanyGrid";
import ProjectGrid from "@/components/ProjectGrid";
import { Typography } from "@mui/material";

const ProjectsPage: React.FC = () => {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Zain:wght@400;700&display=swap" rel="stylesheet"/>
        <div style={{ backgroundColor: "#09212b" }}>
        
        <Typography variant="h1" sx={{ fontFamily: "'Zain', serif", margin: "auto", textAlign: "center", paddingTop: '3rem' }}>
            Work Experience
        </Typography>
        <CompanyGrid />
        </div>
        <div style={{ backgroundColor: "black" }}>
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