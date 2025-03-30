// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Image from 'next/image';
// import { GitHub, Link } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';
// import type { Project } from '@/types/project';

// interface ProjectCardTileProps {
//   project: Project;
//   onClick: () => void;
// }

// const StyledCard = styled(Card)<{ bgcolor?: string }>(({ bgcolor }) => ({
//   backgroundColor: bgcolor || '#f5f5f5',
//   cursor: 'pointer',
//   transition: 'transform 0.2s ease',
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100%',
//   '&:hover': {
//     transform: 'scale(1.02)',
//     boxShadow: `0px 6px 15px ${bgcolor || '#999'}40`,
//   },
// }));

// const StyledCardContent = styled(CardContent)<{ bgcolor?: string }>(({ bgcolor }) => ({
//   flexGrow: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   backgroundColor: bgcolor ? `${bgcolor}20` : '#f0f0f0',
// }));

// const ProjectCardTile: React.FC<ProjectCardTileProps> = ({ project, onClick }) => {
//   return (
//     <StyledCard bgcolor={project.backgroundColor} onClick={onClick}>
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           height: 300,
//         //   backgroundColor: '#fff',
//         }}
//       >
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           style={{ objectFit: 'contain' }}
//         />
//       </Box>

//       <StyledCardContent bgcolor={project.backgroundColor}>
//         {/* Title + Links Row */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             gap: 1,
//             mb: 1,
//           }}
//         >
//           <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
//             {project.title}
//           </Typography>
//           <Box onClick={(e) => e.stopPropagation()}>
//             {project.liveLink && (
//               <IconButton
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener"
//                 aria-label="Live site"
//                 size="small"
//               >
//                 <Link fontSize="small" />
//               </IconButton>
//             )}
//             {project.githubLink && (
//               <IconButton
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener"
//                 aria-label="GitHub repo"
//                 size="small"
//               >
//                 <GitHub fontSize="small" />
//               </IconButton>
//             )}
//           </Box>
//         </Box>

//         <Typography variant="body2">{project.description}</Typography>
//       </StyledCardContent>
//     </StyledCard>
//   );
// };

// export default ProjectCardTile;

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Image from 'next/image';
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
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }}
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
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
                size="small"
                sx={{ color: 'white' }}
              >
                <Link fontSize="small" />
              </IconButton>
            )}
            {project.githubLink && (
              <IconButton
                href={project.githubLink}
                target="_blank"
                rel="noopener"
                size="small"
                sx={{ color: 'white' }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Description + Stack */}
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
