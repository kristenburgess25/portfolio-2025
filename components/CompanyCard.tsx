"use client";

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Link,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface Company {
  clientName: string;
  logo: string;
  description: string;
  link?: string;
  keyAchievements: string[];
  backgroundColor: string;
}

interface CompanyCardProps {
  project: Company;
}

// Styling for the flip container
const FlipContainer = styled("div")(() => ({
  perspective: "1000px",
  width: "100%",
  height: "430px",
  position: "relative",
  borderRadius: '4px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(191, 162, 219, 0.25), rgba(49, 34, 68, 0.25))',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease-in-out',

  // Apply wiggle on hover (desktop only)
  "@media (min-width: 768px)": {
    cursor: "pointer",
  },
}));

const FlipCardInner = styled("div")(({ flipped }: { flipped: boolean }) => ({
  width: "100%",
  height: "auto",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s ease-in-out",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",

  "@media (min-width: 768px)": {
    cursor: "pointer",
    "&:hover": {
      transform: flipped ? "rotateY(180deg)" : "rotateY(7deg)",
    },
  },

  ".flip-back": {
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(0,0,0,0.2) transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.3)",
      borderRadius: "4px",
    },
  },
}));


const CardSide = styled(Card)(() => ({
  position: "absolute",
  width: "100%",
  height: "430px",
  minHeight: "430px",
  borderRadius: '4px',
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  background: 'transparent',
  boxShadow: 'none',
  borderTop: `0.5rem solid #312244`,
}));


const CompanyCard: React.FC<CompanyCardProps> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <FlipContainer style={{ width: '100%', height: 430 }}>
      <FlipCardInner 
        flipped={flipped}
        onClick={handleFlip} // Keep the click-to-flip functionality
      >
        {/* Front Side */}
        <CardSide onClick={handleFlip}>
          <Link href={project.link} target="_blank" rel="noopener"> 
            <CardMedia
              component="img"
              image={project.logo}
              alt={project.clientName}
              sx={{
                height: 140,
                objectFit: "contain",
                padding: "1.5rem",
                backgroundColor: project.backgroundColor,
              }}
            />
          </Link>
          <CardContent sx={{ margin: "auto", padding: '1rem', color: 'white' }}>
  <Typography variant="body2" sx={{ color: 'white', fontSize: '0.95rem' }}>
    {project.description}
  </Typography>
</CardContent>

          {project.link && (
            <CardActions sx={{ margin: "auto 1rem 1rem auto"}}>
              <Button
                sx={{
                  color: '#BFA2DB',
                  fontFamily: "'Zain', serif",
                  fontSize: "1rem",
                  textTransform: 'none',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  // border: '1px solid #BFA2DB',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #BFA2DB, #312244)',
                    color: 'white',
                    borderColor: '#BFA2DB',
                  }
                }}
                size="small"
              >
                More ⚡
              </Button>
            </CardActions>
          )}
        </CardSide>

        {/* Back Side */}
        <CardSide 
          className="flip-back" // Apply scrollable class
          sx={{ 
            transform: "rotateY(180deg)", 
            // background: `${project.backgroundColor}`, 
            borderTop: `1rem solid #312244`,
          }} 
          onClick={handleFlip}
        >
          <CardContent
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '4px',
              padding: '1.2rem',
              height: '100%',
              overflowY: 'auto',
              color: 'white',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              fontSize="1.15rem"
              sx={{ color: 'white' }}
            >
              Impact at {project.clientName}
            </Typography>
            <List dense>
              {project.keyAchievements.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </CardSide>
      </FlipCardInner>
    </FlipContainer>
  );
};

export default CompanyCard;



