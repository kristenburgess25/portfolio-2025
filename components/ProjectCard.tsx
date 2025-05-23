"use client";

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Box,
  Divider,
} from "@mui/material";
import { GitHub, Link, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  techStack: string[];
  moreDetails: string;
  screenshots: string[];
  backgroundColor: string;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})<{ expand: boolean }>(({ expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveLink,
  githubLink,
  techStack,
  moreDetails,
  screenshots,
  backgroundColor,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 1000,
        margin: "16px auto",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: backgroundColor,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
        {/* Image Section */}
        <Box sx={{ width: "20%", margin: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "50%" }}
            image={image}
            alt={title}
          />
          {/* Icons for Links */}
          <CardActions sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}>
            {liveLink && (
              <IconButton href={liveLink} target="_blank" rel="noopener" aria-label="live site">
                <Link fontSize="large" />
              </IconButton>
            )}
            {githubLink && (
              <IconButton href={githubLink} target="_blank" rel="noopener" aria-label="GitHub repo">
                <GitHub fontSize="large" />
              </IconButton>
            )}
          </CardActions>
        </Box>

        {/* Main Content Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 2, paddingBottom: 0 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="body2" fontWeight="bold">
              Tech Stack:
            </Typography>
            {/* Tech Stack Pills */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
              {techStack.map((tech, index) => (
                <Box key={index} sx={{ backgroundColor: "#eee", padding: "4px 8px", borderRadius: "4px", fontSize: "0.85rem" }}>
                  {tech}
                </Box>
              ))}
            </Box>
          </CardContent>
          {/* Chevron Aligned to Bottom Right */}
          <CardActions sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon fontSize="large" />
            </ExpandMore>
          </CardActions>
        </Box>
      </Box>

      {/* Expandable Section (Works Exactly Like Before) */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 3 }}>
          <Typography paragraph sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
            {moreDetails}
          </Typography>
          {/* Display Screenshots */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            {screenshots?.map((src, index) => (
              <CardMedia
                key={index}
                component="img"
                image={src}
                alt={`Screenshot ${index + 1}`}
                sx={{ width: "48%", objectFit: "cover", borderRadius: 2, boxShadow: 1 }}
              />
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
