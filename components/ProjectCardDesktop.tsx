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
  Modal,
} from "@mui/material";
import { GitHub, Link, ExpandMore as ExpandMoreIcon, Close as CloseIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})<{ expand: boolean }>(({ expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
}));

const ProjectCardDesktop: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
            maxWidth: 1000,
            margin: "2rem auto",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: project.backgroundColor,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
            transform: "translateX(3px)",
            boxShadow: `0px 6px 15px ${project.backgroundColor}40`,
            },
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "stretch",
            flexDirection: { xs: "column", md: "row" }, 
          }}
        >
          {/* Image Section */}
          <Box sx={{ width: "20%", margin: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "50%" }}
              image={project.image}
              alt={project.title}
            />
            {/* Links */}
            <CardActions sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}>
              {project.liveLink && (
                <IconButton href={project.liveLink} target="_blank" rel="noopener" aria-label="live site">
                  <Link fontSize="large" />
                </IconButton>
              )}
              {project.githubLink && (
                <IconButton href={project.githubLink} target="_blank" rel="noopener" aria-label="GitHub repo">
                  <GitHub fontSize="large" />
                </IconButton>
              )}
            </CardActions>
          </Box>

          {/* Main Content Section */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 2, paddingBottom: 0 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Divider sx={{ margin: "1rem 0" }} /> 
              <Typography variant="body2" fontWeight="bold">
                Tech Stack:
              </Typography>
              {/* Tech Stack Pills */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                {project.techStack.map((tech, index) => (
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

        {/* Expandable Section */}
        {/* TODO: Pull this into its own reusable component */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 3 }}>
            <Typography paragraph sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
              {project.moreDetails}
            </Typography>

            {project.screenshots.length > 0 && (
              <>
                <Divider sx={{ margin: "1rem 0" }} />
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2, justifyContent: "center" }}>
                  {project.screenshots.map((src, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      image={src}
                      alt={`Screenshot ${index + 1}`}
                      sx={{
                        width: "48%",
                        objectFit: "cover",
                        borderRadius: "4px",
                        boxShadow: 1,
                        cursor: "pointer",
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)", 
                        },
                      }}
                      onClick={() => setSelectedImage(src)} 
                    />
                  ))}
                </Box>
              </>
            )}
          </CardContent>
        </Collapse>
      </Card>

      {/* Modal for Enlarged Screenshot Display */}
      <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: "900px",
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: "absolute", top: "10px", right: "10px", zIndex: 2 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full-Size Image */}
          {selectedImage && (
            <CardMedia
              component="img"
              image={selectedImage}
              alt="Expanded Screenshot"
              sx={{ width: "100%", height: "auto", borderRadius: 2 }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCardDesktop;
