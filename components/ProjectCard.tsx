"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

interface Project {
  clientName: string;
  logo: string;
  description: string;
  link?: string; // Optional link to the live project or GitHub repo
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500, margin: "auto" }}>
      {/* Image or Logo */}
      <CardMedia
        component="img"
        height="200px"
        image={project.logo}
        alt={project.clientName}
        sx={{
          height: 140, // Fixed height
          objectFit: "contain", // Ensures the image fits within the bounds
          backgroundColor: "black", // Optional: Add a background for better visuals
        }}
      />

      {/* Content */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.clientName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      {/* Actions */}
      {project.link && (
        <CardActions>
          <Button size="small" href={project.link} target="_blank" rel="noopener">
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectCard;
