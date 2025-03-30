import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import type { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {project.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" paragraph>{project.moreDetails}</Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>Tech Stack: {project.techStack.join(', ')}</Typography>

        <Box>
          <ImageList cols={2} gap={8}>
            {project.screenshots.map((src, index) => (
              <ImageListItem key={index}>
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;