// VERTICAL PROJECT CARD 
// "use client";

// import React from "react";
// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

// interface Project {
//   clientName: string;
//   logo: string;
//   description: string;
//   link?: string; // Optional link to the live project or GitHub repo
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <Card sx={{ maxWidth: 345, height: 500, margin: "auto" }}>
//       {/* Image or Logo */}
//       <CardMedia
//         component="img"
//         height="200px"
//         image={project.logo}
//         alt={project.clientName}
//         sx={{
//           height: 140, // Fixed height
//           objectFit: "contain", // Ensures the image fits within the bounds
//           backgroundColor: "white"
//         }}
//       />

//       {/* Content */}
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {project.clientName}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {project.description}
//         </Typography>
//       </CardContent>
//       {/* Actions */}
//       {project.link && (
//         <CardActions>
//           <Button size="small" href={project.link} target="_blank" rel="noopener">
//             Learn More
//           </Button>
//         </CardActions>
//       )}
//     </Card>
//   );
// };

// export default ProjectCard;


// HORIZONTAL PROJECT CARD 
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
    <Card sx={{ 
      maxWidth: 1000, 
      margin: "16px auto", 
      borderRadius: 2, 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
      backgroundColor: backgroundColor,
      // backgroundColor: "rgba(255, 255, 255, 0.9)" // Slight transparency 
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
        {/* Image Section */}
        <Box sx={{ width: "20%", margin: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "50%" }}
              image={image}
              alt={title}
            />
          {/* Icons for Links */}
          <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
            {liveLink && (
              <IconButton href={liveLink} target="_blank" rel="noopener" aria-label="live site">
                <Link/>
              </IconButton>
            )}
            {githubLink && (
              <IconButton href={githubLink} target="_blank" rel="noopener" aria-label="GitHub repo">
                <GitHub />
              </IconButton>
            )}
          </CardActions>
        </Box>

        {/* Main Content Section */}
        <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 2, paddingBottom: 0 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Divider sx={{ margin: "1rem 0"}} />
            <Typography variant="body2" fontWeight="bold">
                Tech Stack: 
            </Typography>
            <Typography variant="body2">
                {techStack.map(String).join(', ')}
            </Typography>

          </CardContent>
          {/* Chevron Aligned to Bottom Right */}
          <CardActions sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Box>
      </Box>

      {/* Expandable Section */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <Typography paragraph>{moreDetails}</Typography>
          {/* Display Screenshots */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            {screenshots?.map((src, index) => (
              <CardMedia
                key={index}
                component="img"
                image={src}
                alt={`Screenshot ${index + 1}`}
                sx={{ width:"48%", objectFit: "cover", borderRadius: 1, boxShadow: 1 }}
              />
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
