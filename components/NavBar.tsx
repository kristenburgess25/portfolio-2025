"use client"; // Forces client-side execution

import { Link, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavbarContainer = styled(AppBar)(() => ({
  backgroundColor: "#211332", // Deep plum color
  color: "#F5ECFF",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
}));

const NavLinks = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexGrow: 1,
  marginRight: "2rem",
}));

const navItems = [
  { label: "Home", path: "/" },
  // { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "mailto:kb@kristen-burgess.dev" }
];

const NavBar: React.FC = () => {
  return (
    <NavbarContainer position="sticky">
      <Toolbar>
        <NavLinks sx={{ marginRight: "auto" }}>
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              sx={{
                color: "#F5ECFF",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1rem",
                marginLeft: "2rem",
                "&:hover": {
                  color: "#BFA2DB", //Soft lilac on hover
                  transition: "color 0.3s ease-in-out",
                },
              }}
            >
              <Typography>{label}</Typography>
            </Link>
          ))}
        </NavLinks>
      </Toolbar>
    </NavbarContainer>
  );
};

export default NavBar;
