"use client";

import ClientGrid from "@/components/ClientGrid";
import ProjectGrid from "@/components/ProjectGrid";
import { Typography } from "@mui/material";

const ProjectsPage: React.FC = () => {
    return (
      <div>
        <Typography variant="h3">
            Places Ive Worked 
        </Typography>
        <ClientGrid />
        <Typography variant="h3">
            Things Ive Done 
        </Typography>
        <ProjectGrid />

      </div>
    );
  };
  
  export default ProjectsPage;