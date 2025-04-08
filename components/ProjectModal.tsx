import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GitHub, Link } from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import type { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const fadedBg = project.backgroundColor ? `${project.backgroundColor}20` : '#f0f0f0';

  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ position: 'relative', backgroundColor: project.backgroundColor, color: '#fff' }}>
        {project.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ backgroundColor: fadedBg }}>
        {/* Full Description */}
        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          {project.moreDetails}
        </Typography>

        {/* Tech Stack */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Tech Stack:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {project.techStack.map((tech, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#ddd',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.85rem',
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        {/* Live + GitHub Links */}
        {(project.liveLink || project.githubLink) && (
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            {project.liveLink && (
              <Button
                variant="contained"
                href={project.liveLink}
                target="_blank"
                rel="noopener"
                sx={{ background: project.backgroundColor }}
                startIcon={<Link />}
              >
                Live Site
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="contained"
                href={project.githubLink}
                target="_blank"
                rel="noopener"
                sx={{ background: project.backgroundColor }}
                startIcon={<GitHub />}
              >
                GitHub Repo
              </Button>
            )}
          </Box>
        )}

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <ImageList cols={2} gap={12}>
              {project.screenshots.map((src, index) => (
                <ImageListItem key={index}>
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
