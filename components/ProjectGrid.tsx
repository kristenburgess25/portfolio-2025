// // PROJECT GRID -- FIRST ITERATION -- SINGLE COLUMN // 
// "use client";

// import React from "react";
// import { useMediaQuery, useTheme } from "@mui/material";
// // import ProjectCard from "./ProjectCard";
// import ProjectCardDesktop from "./ProjectCardDesktop";
// import ProjectCardMobile from "./ProjectCardMobile";
// import { projects } from "../data/projects"

// const ProjectGrid: React.FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

//   return (
//     <div id="projects-grid" style={{ marginBottom: "-1rem", padding: "0 1.5rem 3rem 1.5rem" }}>
//       {projects.map((project, index) => (
//         // <ProjectCard key={index} {...project} />
//         isMobile ? (
//           <ProjectCardMobile key={index} project={project} /> 
//         ) : (
//           <ProjectCardDesktop key={index} project={project} />
//         )
//       ))}
//     </div>
//   );
// };

// export default ProjectGrid;


// **------ PROJECT GRID - STAGGERED TILES ------** //

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ProjectCardTile from './ProjectCardTile';
import ProjectModal from './ProjectModal';
import { projects } from "../data/projects"
import type { Project } from '@/types/project';

const TileContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1rem',
});

interface ProjectGridProps {
  projects: Project[];
}

const tilePattern = [
  { md: 8 }, { md: 4 },
  // { md: 6 }, { md: 6 },
  { md: 4 }, { md: 4 }, { md: 4 },
  { md: 6 }, { md: 6 },
  { md: 3 }, { md: 3 }, { md: 3 }, { md: 3 },
  { md: 4 }, { md: 4 }, { md: 4 },
  { md: 4 }, { md: 4 }, { md: 4 }
];

const ProjectGrid: React.FC<ProjectGridProps> = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <TileContainer>
      <Grid container spacing={2}>
        {projects.map((project, index) => {
          const gridProps = tilePattern[index % tilePattern.length];
          return (
            <Grid item key={project.id} xs={12} sm={6} {...gridProps}>
              <ProjectCardTile
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </Grid>
          );
        })}
      </Grid>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </TileContainer>
  );
};

export default ProjectGrid;
