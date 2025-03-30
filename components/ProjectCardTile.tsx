import React from 'react';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
  return (
    <StyledCard bgcolor={project.backgroundColor} onClick={onClick}>
      <CardMedia
        component="img"
        height="160"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCardTile;