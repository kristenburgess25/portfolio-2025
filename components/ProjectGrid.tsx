"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// import ProjectCard from "./ProjectCard";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";
import { projects } from "../data/projects"

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
