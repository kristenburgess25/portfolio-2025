"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ProjectCardTile from './ProjectCardTile';
import ProjectModal from './ProjectModal';
import ProjectCardTileMobile from './ProjectCardTileMobile';
import { projects } from "../data/projects"
import type { Project } from '@/types/project';
import type { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const TileContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1rem',
});

const FilterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1rem',
});

// Maps label shown in the UI to actual tag string in project data
const filterMap: Record<string, string> = {
  "Featured": "featured",
  "Shopify": "shopify",
  "Front End": "frontend",
  "Back End": "backend",
  "Full Stack": "fullstack",
};
const filterLabels = Object.keys(filterMap);

const getFilterButtonStyles = (isSelected: boolean): SxProps<Theme> => ({
  textTransform: 'none',
  width: '7rem',
  fontWeight: 500,
  borderRadius: '4px',
  padding: '0.4rem 1.2rem',
  margin: '0 0.5rem',
  fontSize: '1.2rem',
  fontFamily: "'Zain', serif",
  transition: 'all 0.25s ease-in-out',
  boxShadow: isSelected ? 3 : 'none',
  background: isSelected ? 'linear-gradient(135deg, #BFA2DB, #312244)' : 'transparent',
  color: isSelected ? 'white' : '#BFA2DB',
  borderColor: '#BFA2DB',
  '&:hover': {
    background: isSelected ? 'linear-gradient(135deg, #BFA2DB, #312244)' : 'rgba(191, 162, 219, 0.1)',
    borderColor: '#BFA2DB',
  },
});



const tilePattern = [
  { md: 7 }, { md: 5 },
  { md: 4 }, { md: 4 }, { md: 4 },
  { md: 6 }, { md: 6 },
  { md: 3 }, { md: 3 }, { md: 3 }, { md: 3 },
  { md: 4 }, { md: 4 }, { md: 4 },
  { md: 4 }, { md: 4 }, { md: 4 }
];

const ProjectGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredProjects = selectedFilter
    ? selectedFilter === "Featured"
      ? projects.filter(project => project.featured)
      : projects.filter(project =>
          project.tags?.some(tag => tag.toLowerCase() === filterMap[selectedFilter].toLowerCase())
        )
    : projects;

  return (
    <TileContainer>
      {/* Filter Buttons */}
      <FilterContainer>
  {isMobile ? (
    <Select
      value={selectedFilter ?? ''}
      onChange={(e) => {
        const value = e.target.value;
        setSelectedFilter(value === '' ? null : value);
      }}
      displayEmpty
      size="small"
      variant="outlined"
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: '#E8D8F6', // light lilac
            borderRadius: '4px',
            marginTop: '0.5rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          },
        },
      }}
      sx={{
        fontFamily: "'Zain', serif",
        fontWeight: 'medium',
        fontSize: '1.2rem',
        color: '#BFA2DB',
        backgroundColor: '#201331',
        borderRadius: '4px',
        padding: '0.2rem 1rem',
        minWidth: '200px',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#BFA2DB',
        },
        '& .MuiSvgIcon-root': {
          color: '#BFA2DB',
        },
      }}
    >
      <MenuItem value="" sx={{fontFamily: "'Zain', serif", fontSize: '1.2rem'}}>
        <em>All</em>
      </MenuItem>
      {filterLabels.map((label) => (
        <MenuItem key={label} value={label} sx={{fontFamily: "'Zain', serif", fontSize: '1.2rem'}}>
          {label}
        </MenuItem>
      ))}
    </Select>
  ) : (
    <>
      <Button
        variant={!selectedFilter ? 'contained' : 'outlined'}
        onClick={() => setSelectedFilter(null)}
        sx={getFilterButtonStyles(!selectedFilter)}
      >
        All
      </Button>
      {filterLabels.map((label) => (
        <Button
          key={label}
          variant={selectedFilter === label ? 'contained' : 'outlined'}
          onClick={() => setSelectedFilter(label)}
          sx={getFilterButtonStyles(selectedFilter === label)}
        >
          {label}
        </Button>
      ))}
    </>
  )}
</FilterContainer>


      {/* Grid of Projects */}
      <Grid container spacing={2}>
        {filteredProjects.map((project, index) => {
          const gridProps = tilePattern[index % tilePattern.length];
          return (
            <Grid item key={project.id} xs={12} sm={6} {...gridProps}>
            {isMobile ? (
              <ProjectCardTileMobile
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ) : (
              <ProjectCardTile
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            )}
          </Grid>
          );
        })}
      </Grid>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </TileContainer>
  );
};

export default ProjectGrid;
