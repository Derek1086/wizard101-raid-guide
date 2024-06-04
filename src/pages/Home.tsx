import Box from "@mui/material/Box";
import Title from "../components/Text/Title";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Class from "../components/Class";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuffTable from "../components/BuffTable";
import StatTable from "../components/StatTable";
import CustomImage from "../components/CustomImage";

const Home = () => {
  return (
    <>
      <Header role="" />
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "33.3%",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
              color: "#db5c5c",
            }}
          >
            Fire Team
          </Typography>
          <Link
            to={"/firejade"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Death-School.gif" title="Fire Jade" />
          </Link>
          <Link
            to={"/fire1"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Fire-School.gif" title="Fire 1" />
          </Link>
          <Link
            to={"/fire2"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Fire-School.gif" title="Fire 2" />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "33.4%",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
              color: "#cccc00",
            }}
          >
            Myth Team
          </Typography>
          <Link
            to={"/mythjade"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Death-School.gif" title="Myth Jade" />
          </Link>
          <Link
            to={"/myth1"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Myth-School.gif" title="Myth 1" />
          </Link>
          <Link
            to={"/myth2"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Myth-School.gif" title="Myth 2" />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "33.3%",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
              color: "#b641e0",
            }}
          >
            Storm Team 2
          </Typography>
          <Link
            to={"/supportpuller"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Life-School.gif" title="Support/Puller" />
          </Link>
          <Link
            to={"/storm4"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Storm-School.gif" title="Storm 4" />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
              color: "#b641e0",
            }}
          >
            Storm Team 1
          </Typography>
          <Link
            to={"/stormjade"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Balance-School.gif" title="Storm Jade" />
          </Link>
          <Link
            to={"/storm1"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Storm-School.gif" title="Storm 1" />
          </Link>
          <Link
            to={"/storm2"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Storm-School.gif" title="Storm 2" />
          </Link>
          <Link
            to={"/storm3"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Class imgSrc="/Storm-School.gif" title="Storm 3" />
          </Link>
        </Box>
      </Box>
      <Title text="Boss Strats" />
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Link to={"/yetaxa"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Yetaxa/Yetaxa.png" title="Yetaxa" />
        </Link>
        <Link to={"/cameca"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Cameca/Cameca.png" title="Cameca" />
        </Link>
        <Link to={"/ixta"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Ixta/Ixta.png" title="Ixta" />
        </Link>
        <Link to={"/autloc"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Autloc/Autloc.png" title="Autloc" />
        </Link>
        <Link to={"/hunhau"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/Hunhau/Hunhau.png" title="Hunhau" />
        </Link>
      </Box>
      <Title text="Puzzle/Mob Fight Strats" />
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Link to={"/north"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/SouthPuzzle/token.png" title="North Token 1 and 2" />
        </Link>
        <Link to={"/west"} style={{ textDecoration: "none", color: "white" }}>
          <Class imgSrc="/WestPuzzle/skull.png" title="West Skull 1 and 2" />
        </Link>
        <Link
          to={"/stupefy"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Class imgSrc="/MythJade/stupefycard.png" title="Stupefy" />
        </Link>
      </Box>
      <Title text="Roshambo" />
      <div>
        <CustomImage imgSrc="/roshambo.png" alt="" height="150px" />
        <Title text="Buffs" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px",
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
        <Title text="Stat Caps" />
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
      <Footer />
    </>
  );
};

export default Home;
