// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Image from 'next/image';
// import { GitHub, Link } from '@mui/icons-material';
// import type { Project } from '@/types/project';

// interface ProjectCardTileProps {
//   project: Project;
//   onClick: () => void;
// }

// const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Box
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       sx={{
//         borderRadius: '4px',
//         overflow: 'hidden',
//         background: 'linear-gradient(135deg, rgba(191, 162, 219, 0.3), rgba(49, 34, 68, 0.3))',
//         backdropFilter: 'blur(10px)',
//         WebkitBackdropFilter: 'blur(10px)',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         cursor: 'pointer',
//         '&:hover': {
//           transform: 'scale(1.01)',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
//         },
//         maxWidth: '100%',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1rem',
//       }}
      
//     >
//       {/* Title + Links */}
//       <Box 
//         sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             padding: '1rem 1rem 0 1rem', 
//         }}>
//         <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', color: 'white' }}>
//           {project.title}
//         </Typography>
//         <Box onClick={(e) => e.stopPropagation()}>
//           {project.liveLink && (
//             <IconButton
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener"
//               size="small"
//               sx={{ color: 'white' }}
//             >
//               <Link fontSize="small" />
//             </IconButton>
//           )}
//           {project.githubLink && (
//             <IconButton
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener"
//               size="small"
//               sx={{ color: 'white' }}
//             >
//               <GitHub fontSize="small" />
//             </IconButton>
//           )}
//         </Box>
//       </Box>

//       {/* Image container (bigger!) */}
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           height: 280, // was 220 — now bigger!
//           borderRadius: '6px',
//           overflow: 'hidden',
//         }}
//       >
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           style={{
//             objectFit: 'contain',
//             borderRadius: '6px',
//           }}
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />

//         {/* Hover overlay */}
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             zIndex: 2,
//             padding: '1rem',
//             color: 'white',
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)',
//             opacity: hovered ? 1 : 0,
//             transition: 'opacity 0.3s ease',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Typography variant="body2" sx={{ mb: 1 }}>
//             {project.description}
//           </Typography>

//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//             {project.techStack.map((tech, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   backgroundColor: '#fff',
//                   color: '#000',
//                   padding: '2px 6px',
//                   borderRadius: '4px',
//                   fontSize: '0.75rem',
//                 }}
//               >
//                 {tech}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectCardTile;


// ----- PROJECT CARD TILE WITHOUT FRAME ----- // 

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { GitHub, Link } from '@mui/icons-material';
import type { Project } from '@/types/project';

interface ProjectCardTileProps {
  project: Project;
  onClick: () => void;
}

const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        width: '100%',
        height: 350,
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, borderRadius: '4px' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{
            objectFit: 'contain',
            borderRadius: '4px',
            filter: 'brightness(0.95) saturate(0.9) contrast(0.95)', // subtle image tone-down
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Subtle overlay tint */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(180deg, rgba(49, 34, 68, 0.06), rgba(49, 34, 68, 0.12))',
            mixBlendMode: 'multiply',
            pointerEvents: 'none', // so clicks go through to parent
          }}
        />
      </Box>

      {/* Hover Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          padding: '1rem',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Top Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            {project.title}
          </Typography>
          <Box onClick={(e) => e.stopPropagation()}>
            {project.liveLink && (
              <IconButton
                href={project.liveLink}
                target="_blank"
                rel="noopener"
                size="medium"
                sx={{ color: 'white' }}
              >
                <Link fontSize="medium" />
              </IconButton>
            )}
            {project.githubLink && (
              <IconButton
                href={project.githubLink}
                target="_blank"
                rel="noopener"
                size="medium"
                sx={{ color: 'white' }}
              >
                <GitHub fontSize="medium" />
              </IconButton>
            )}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', margin: 'auto' }}>
            {/* <Button variant="outlined" sx={{ color: '#bda1da', borderColor: "#bda1da" }}> 
                More
            </Button>  */}
						<Button
                sx={{
                  color: '#BFA2DB',
                  fontFamily: "'Zain', serif",
                  fontSize: "1rem",
                  textTransform: 'none',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  border: '1px solid #BFA2DB',
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
        </Box>

        {/* Description + Tech Stack */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.techStack.map((tech, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCardTile;
