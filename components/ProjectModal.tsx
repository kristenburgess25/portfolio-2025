import React, { useEffect, useState } from 'react';
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
  const [animateIn, setAnimateIn] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const fadedBg = project.backgroundColor ? `${project.backgroundColor}20` : '#f0f0f0';

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Main Modal */}
      <Dialog
        open
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            opacity: animateIn ? 1 : 0,
            transform: animateIn ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            borderRadius: '12px',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle
          sx={{
            position: 'relative',
            backgroundColor: project.backgroundColor,
            color: '#fff',
          }}
        >
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
          {/* Description */}
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

          {/* Links */}
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
                  Live
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
                  Repo
                </Button>
              )}
            </Box>
          )}

          {/* Screenshot Grid */}
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
                      onClick={() => setExpandedImage(src)}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Expanded Screenshot Viewer */}
      {expandedImage && (
        <Dialog
          open
          onClose={() => setExpandedImage(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: '#000',
              padding: 2,
              borderRadius: '12px',
            },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={() => setExpandedImage(null)}
              sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <Image
              src={expandedImage}
              alt="Expanded screenshot"
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
            />
          </Box>
        </Dialog>
      )}
    </>
  );
};

export default ProjectModal;
