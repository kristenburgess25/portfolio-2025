"use client";

import CompanyGrid from "@/components/CompanyGrid";
import ProjectGrid from "@/components/ProjectGrid";
import { Typography } from "@mui/material";

const ProjectsPage: React.FC = () => {
  return (
    <div id="employment-history">
      <div id="client-projects" style={{ background: "linear-gradient(to bottom, #BFA2DB, #312244)" }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: "'Zain', serif", 
          margin: "auto", 
          textAlign: "center", 
          paddingTop: '3rem',
          color: "#312244",
          "@media (max-width: 768px)": {
              fontSize: "3.5rem", // Adjust for mobile
            } 
        }}
      >
        Work Experience
      </Typography>
      <br />
      <CompanyGrid />
      </div>
      
      <div id="client-projects" style={{ backgroundColor: "#312244" }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: "'Zain', serif", 
            margin: "auto", 
            textAlign: "center", 
            paddingTop: '3rem', 
            color: "#BFA2DB",
            "@media (max-width: 768px)": {
                fontSize: "3.5rem", // Adjust for mobile
              }
            }}
          >
            Projects
        </Typography>
        <ProjectGrid />
      </div>

    </div>
  );
  };
  
  export default ProjectsPage;