import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { GitHub, Link } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import type { Project } from '@/types/project';

interface ProjectCardTileProps {
  project: Project;
  onClick: () => void;
}

const StyledCard = styled(Card)<{ bgcolor?: string }>(({ bgcolor }) => ({
  backgroundColor: bgcolor || '#f5f5f5',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: `0px 6px 15px ${bgcolor || '#999'}40`,
  },
}));

const StyledCardContent = styled(CardContent)<{ bgcolor?: string }>(({ bgcolor }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: bgcolor ? `${bgcolor}20` : '#f0f0f0',
}));

const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
  return (
    <StyledCard bgcolor={project.backgroundColor} onClick={onClick}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 300,
        //   backgroundColor: '#fff',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <StyledCardContent bgcolor={project.backgroundColor}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2">{project.description}</Typography>
        </Box>

        {/* Links */}
        <CardActions sx={{ justifyContent: 'flex-end', paddingTop: 2 }}>
          {project.liveLink && (
            <IconButton
              href={project.liveLink}
              target="_blank"
              rel="noopener"
              aria-label="Live site"
              onClick={(e) => e.stopPropagation()} // Prevent modal
            >
              <Link fontSize="small" />
            </IconButton>
          )}
          {project.githubLink && (
            <IconButton
              href={project.githubLink}
              target="_blank"
              rel="noopener"
              aria-label="GitHub repo"
              onClick={(e) => e.stopPropagation()} // Prevent modal
            >
              <GitHub fontSize="small" />
            </IconButton>
          )}
        </CardActions>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProjectCardTile;
