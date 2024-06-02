import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm1Autloc = () => {
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
        the Storm Jade and casting Restoring Rain 1 or Dual Strike 2 depending
        on Strat
      </Typography>
      <StratRenderer />
      <Navigation prev="/storm1/ixta" next="/storm1/hunhau" />
    </>
  );
};

export default Storm1Autloc;
