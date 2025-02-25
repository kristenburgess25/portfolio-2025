import { Typography } from "@mui/material";

const ResumeSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem auto", alignItems: "center", width: "100%" }}>

      {/* Full-Size PDF Display Without Controls */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "90vh",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <object
          data="/kristen-burgess-resume-2025.pdf"
          type="application/pdf"
          style={{ width: "100%", height: "100%" }}
        >
          <Typography>
            Your browser does not support PDFs. 
            <a href="/kristen-burgess-resume-2025.pdf" target="_blank" rel="noopener noreferrer">
              Click here to view the resume.
            </a>
          </Typography>
        </object>
      </div>

      {/* Download Button */}
      {/* <Button
        variant="contained"
        color="primary"
        href="/resume.pdf"
        download="My_Resume.pdf"
        startIcon={<DownloadIcon />}
        style={{ marginTop: "1rem" }}
      >
        Download Resume
      </Button> */}
    </div>
  );
};

export default ResumeSection;
