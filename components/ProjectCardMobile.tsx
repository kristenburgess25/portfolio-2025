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

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    liveLink?: string;
    githubLink?: string;
    techStack: string[];
    moreDetails: string;
    screenshots: string[];
    backgroundColor: string;
  };
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})<{ expand: boolean }>(({ expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
}));

const ProjectCardMobile: React.FC<ProjectCardProps> = ({ project }) => {
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
          margin: "16px auto",
          borderRadius: "4px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: project.backgroundColor,
        }}
      >
        {/* Mobile Layout: Image at the Top */}
        <Box sx={{ textAlign: "center", padding: "1rem" }}>
          <CardMedia
            component="img"
            sx={{ width: "40%", maxHeight:"150px", objectFit: "contain", borderRadius: "50%", margin: "auto" }}
            image={project.image}
            alt={project.title}
          />
        </Box>

        {/* Title & Description */}
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
            {project.description}
          </Typography>
          <Divider sx={{ margin: "1rem 0" }} />

          {/* Tech Stack */}
          <Typography variant="body2" fontWeight="bold">
            Tech Stack:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px", justifyContent: "center" }}>
            {project.techStack.map((tech, index) => (
              <Box key={index} sx={{ backgroundColor: "#eee", padding: "4px 8px", borderRadius: "4px", fontSize: "0.85rem" }}>
                {tech}
              </Box>
            ))}
          </Box>
        </CardContent>

        {/* Expand Button on the LEFT, Links on the RIGHT */}
        <CardActions sx={{ display: "flex", justifyContent: "space-between", paddingX: 2 }}>
          {/* Expand Button (Left-Aligned) */}
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon fontSize="large" />
          </ExpandMore>

          {/* Links (Right-Aligned) */}
          <Box sx={{ display: "flex", gap: 1 }}>
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
          </Box>
        </CardActions>

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
                        width: "75%",
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
            maxWidth: "800px",
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

export default ProjectCardMobile;
