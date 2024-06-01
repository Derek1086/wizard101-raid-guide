import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Class from "../components/Class";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Choose your role
      </Typography>
      <Box
        sx={{
          width: "80%", // 75% width of the screen
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Link
          to={"/firejade"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Class imgSrc="/Fire-School.gif" title="Fire Jade" />
        </Link>
        <Link to={"/fire1"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Fire-School.gif" title="Fire 1" />
        </Link>
        <Link to={"/fire2"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Fire-School.gif" title="Fire 2" />
        </Link>
        <Link
          to={"/mythjade"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Class imgSrc="/Myth-School.gif" title="Myth Jade" />
        </Link>
        <Link to={"/myth1"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Myth-School.gif" title="Myth 1" />
        </Link>
        <Link to={"/myth2"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Myth-School.gif" title="Myth 2" />
        </Link>
        <Link
          to={"/stormjade"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Class imgSrc="/Storm-School.gif" title="Storm Jade" />
        </Link>
        <Link to={"/storm1"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Storm-School.gif" title="Storm 1" />
        </Link>
        <Link to={"/storm2"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Storm-School.gif" title="Storm 2" />
        </Link>
        <Link to={"/storm3"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Storm-School.gif" title="Storm 3" />
        </Link>
        <Link to={"/storm4"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Storm-School.gif" title="Storm 4" />
        </Link>
        <Link
          to={"/supportpuller"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Class imgSrc="/Storm-School.gif" title="Support/Puller" />
        </Link>
      </Box>
    </>
  );
};

export default Home;
