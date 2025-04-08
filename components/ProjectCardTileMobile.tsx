"use client";

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, Link } from '@mui/icons-material';
import Image from 'next/image';
import type { Project } from '@/types/project';

interface ProjectCardTileMobileProps {
  project: Project;
  onClick: () => void;
}

const ProjectCardTileMobile: React.FC<ProjectCardTileMobileProps> = ({ project, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        borderRadius: '4px',
        backgroundColor: '#b499cf',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Title + Links Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', color: '#201331' }}>
          {project.title}
        </Typography>
        <Box>
          {project.liveLink && (
            <IconButton
              href={project.liveLink}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: '#201331' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link fontSize="small" />
            </IconButton>
          )}
          {project.githubLink && (
            <IconButton
              href={project.githubLink}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: '#201331' }}
              onClick={(e) => e.stopPropagation()}
            >
              <GitHub fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Image */}
      <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'contain', borderRadius: '4px' }}
        />
      </Box>

      {/* Tech Stack */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.techStack.map((tech, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#745f8d',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '0.75rem',
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCardTileMobile;
