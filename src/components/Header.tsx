import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function getColor(role: string) {
  switch (role) {
    case "Fire 1":
      return "#db5c5c";
    case "Fire 2":
      return "#db5c5c";
    case "Myth 1":
      return "#cccc00";
    case "Myth 2":
      return "#cccc00";
    case "Ice":
      return "#95b7f5";
    case "Storm 1":
      return "#b641e0";
    case "Storm 2":
      return "#b641e0";
    case "Storm 3":
      return "#b641e0";
    case "Storm 4":
      return "#b641e0";
    case "Fire Jade":
      return "#c3c3bb";
    case "Myth Jade":
      return "#c3c3bb";
    case "Support/Puller":
      return "#90EE90";
    case "Storm Jade":
      return "orange";
    default:
      return "inherit";
  }
}

function getIcon(role: string) {
  switch (role) {
    case "Fire 1":
      return "/Fire-School.gif";
    case "Fire 2":
      return "/Fire-School.gif";
    case "Myth 1":
      return "/Myth-School.gif";
    case "Myth 2":
      return "/Myth-School.gif";
    case "Storm 1":
      return "/Storm-School.gif";
    case "Storm 2":
      return "/Storm-School.gif";
    case "Storm 3":
      return "/Storm-School.gif";
    case "Storm 4":
      return "/Storm-School.gif";
    case "Fire Jade":
      return "/Death-School.gif";
    case "Myth Jade":
      return "/Death-School.gif";
    case "Support/Puller":
      return "/Life-School.gif";
    case "Storm Jade":
      return "/Balance-School.gif";
    default:
      return "";
  }
}

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 20% 0px 20%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img height="30px" src={getIcon(role)} alt="" />
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: getColor(role),
            }}
          >
            {role}
          </Typography>
          <img height="30px" src={getIcon(role)} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
