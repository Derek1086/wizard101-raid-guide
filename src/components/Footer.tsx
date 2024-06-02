import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center", padding: "20px" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            component="h1"
            align="center"
          >
            Credits
            <br />
            Legacy DD2 - Antlivesmatter
            <br />
            Drums Guide - Majorsmilesback
            <br />
            weakness Ixta - Prismma
            <br />
            Viridian CS Varian - Euxjoy
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
