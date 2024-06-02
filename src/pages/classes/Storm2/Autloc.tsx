import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm2Autloc = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        Autloc Boss Fight
      </Typography>
      <Typography
        variant="h6"
        component="div"
        color="text.secondary"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        If South isn't done, go back a page and complete South
      </Typography>
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Typography
        variant="h6"
        component="div"
        color="text.secondary"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        Head West and help find pods. Once done, get health from West Fish n'
        Wisps
        <br />
        Once Autloc spawns, let the Storm Jade pull the fight. Only join after
        Storm 1 joins. If Strat 2, make sure to Cast Dual Strike 1 before
        joining
      </Typography>
      <StratRenderer />
      <Navigation prev="/storm2/ixta" next="/storm2/hunhau" />
    </>
  );
};

export default Storm2Autloc;
