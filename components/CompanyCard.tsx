// --- NON FLIPPING CARD --- //

// "use client";

// import React from "react";
// import { Card, CardMedia, CardContent, Typography, CardActions, Button, List, ListItem, Divider } from "@mui/material";

// interface Company {
//   clientName: string;
//   logo: string;
//   description: string;
//   link?: string; // Optional link to the live project or GitHub repo
//   keyAchievements: string[];
//   backgroundColor: string;
// }

// interface CompanyCardProps {
//   project: Company;
// }

// const CompanyCard: React.FC<CompanyCardProps> = ({ project }) => {
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
//           backgroundColor: `${project.backgroundColor}`, // Optional: Add a background for better visuals
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
//         <Divider /> 
//         <Typography variant="body2"> Key Achievements</Typography>
//         <List dense>
//           {project.keyAchievements.map((item, index) => (
//             <ListItem key={index}>
//               <Typography variant="body2"> {item} </Typography>
//             </ListItem>
//           )) }
//         </List>
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

// export default CompanyCard;

// --- FLIPPING CARD --- //

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
  height: "100%",
  position: "relative",
  margin: "20px", // Add margin to ensure space around each card
}));


// Styling for the flipping mechanism
const FlipCardInner = styled("div")(({ flipped }: { flipped: boolean }) => ({
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s ease-in-out",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
}));

// Styling for card sides
const CardSide = styled(Card)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
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
        sx={{
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: flipped ? "rotateY(180deg)" : "rotateY(10deg)", // 🔥 Subtle tilt to hint at flipping
          },
        }}
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
          <CardContent sx={{ margin: "auto" }}>
            {/* <Typography gutterBottom variant="h5">
              {project.clientName}
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          {project.link && (
            <CardActions sx={{ margin: "auto 1rem 1rem auto"}}>
              <Button sx={{ color: "#8282E7", fontFamily:"'Zain', serif", fontSize: "1rem" }} size="small">
                More ⚡
              </Button>
            </CardActions>
          )}
        </CardSide>

        {/* Back Side */}
        <CardSide 
          sx={{ 
            transform: "rotateY(180deg)", 
            background:`${project.backgroundColor}`, 
            borderTop: `1rem solid ${project.backgroundColor}`
          }} 
          onClick={handleFlip}>
          <CardContent sx={{ 
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "100%"
            }}
          >
            <Typography gutterBottom variant="h5" fontSize="1.15rem">
              Impact at {project.clientName}
            </Typography>
            <List dense>
              {project.keyAchievements.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="body2">{item}</Typography>
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


