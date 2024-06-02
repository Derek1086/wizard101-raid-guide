import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Class from "../components/Class";
import Header from "../components/Header";
import BuffTable from "../components/BuffTable";
import StatTable from "../components/StatTable";

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
          width: "80%",
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
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Boss Strats
      </Typography>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Link to={"/yetaxa"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Yetaxa/Yetaxa.png" title="Yetaxa" />
        </Link>
        <Link to={"/cameca"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Cameca/Cameca.png" title="Cameca" />
        </Link>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Ixta/Ixta.png" title="Ixta" />
        </Link>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Autloc/Autloc.png" title="Autloc" />
        </Link>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Hunhau/Hunhau.png" title="Hunhau" />
        </Link>
      </Box>
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Roshambo
      </Typography>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <img src="/roshambo.png" alt="" height={"200px"} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <BuffTable />
          </div>
        </div>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ flexGrow: 1, marginTop: 2 }}
        >
          Stat Caps
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "50px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "80%",
            }}
          >
            <StatTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
