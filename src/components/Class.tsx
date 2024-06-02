import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ClassProps = {
  imgSrc: string;
  title: string;
};

const Class: React.FC<ClassProps> = ({ imgSrc, title }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        margin: "0 5px",
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        component="label"
        sx={{
          padding: 0,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          border: "none",
          boxShadow: "none",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          style={{ width: "55%", height: "auto" }}
        />
      </Button>
      <Typography
        variant="body1"
        component="div"
        align="center"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Class;
