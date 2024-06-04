import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Title from "./Text/Title";

type ClassProps = {
  role: string;
};

const Header: React.FC<ClassProps> = ({ role }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "center", padding: "20px" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h4" component="h1" align="center">
                Viridian Wizards Crying Sky Raid Guide
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Title text={role} />
    </>
  );
};

export default Header;
