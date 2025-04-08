import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { GitHub, Link } from '@mui/icons-material';
import type { Project } from '@/types/project';

interface ProjectCardTileProps {
  project: Project;
  onClick: () => void;
}

const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: '4px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(191, 162, 219, 0.3), rgba(49, 34, 68, 0.3))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        },
        maxWidth: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
      
    >
      {/* Title + Links */}
      <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem 1rem 0 1rem', 
        }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', color: 'white' }}>
          {project.title}
        </Typography>
        <Box onClick={(e) => e.stopPropagation()}>
          {project.liveLink && (
            <IconButton
              href={project.liveLink}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: 'white' }}
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
              sx={{ color: 'white' }}
            >
              <GitHub fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Image container (bigger!) */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 280, // was 220 — now bigger!
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{
            objectFit: 'contain',
            borderRadius: '6px',
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Hover overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            padding: '1rem',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.techStack.map((tech, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
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
      </Box>
    </Box>
  );
};

export default ProjectCardTile;
