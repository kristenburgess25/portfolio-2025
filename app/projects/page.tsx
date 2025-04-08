"use client";

import CompanyGrid from "@/components/CompanyGrid";
import ProjectGrid from "@/components/ProjectGrid";
// import PersonalProjects from "@/components/PersonalProjects";
import { Typography } from "@mui/material";

const ProjectsPage: React.FC = () => {
    return (
      <div id="employment-history">
        {/* <div id="personal-projects">
          <PersonalProjects />
        </div> */}
        <div id="client-projects" style={{ background: "linear-gradient(to bottom, #BFA2DB, #312244)" }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: "'Zain', serif", 
            margin: "auto", 
            textAlign: "center", 
            paddingTop: '3rem',
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
              color: "white",
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