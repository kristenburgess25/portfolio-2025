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

interface PersonalProjectCardProps {
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

const PersonalProjectCard: React.FC<PersonalProjectCardProps> = ({
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
        maxWidth: 800,
        margin: "16px auto",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Media Section */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: 0,
            paddingTop: "100%", // Makes it a square
            objectFit: "cover",
          }}
        />

        {/* Main Content Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" fontWeight="bold">
              Tech Stack:
            </Typography>
            <Typography variant="body2">
              {techStack.map(String).join(", ")}
            </Typography>
          </CardContent>

          {/* Icons and Expand Chevron Row */}
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
              {liveLink && (
                <IconButton
                  href={liveLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="live site"
                >
                  <Link />
                </IconButton>
              )}
              {githubLink && (
                <IconButton
                  href={githubLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub repo"
                >
                  <GitHub />
                </IconButton>
              )}
            </Box>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Box>
      </Box>

      {/* Expandable Section */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{moreDetails}</Typography>
          {/* Display Screenshots */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            {screenshots.map((src, index) => (
              <CardMedia
                key={index}
                component="img"
                image={src}
                alt={`Screenshot ${index + 1}`}
                sx={{
                  width: 120,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PersonalProjectCard;
