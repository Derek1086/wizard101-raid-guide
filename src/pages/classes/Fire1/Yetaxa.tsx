import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const Fire1Yetaxa = () => {
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
        Yetaxa Boss Fight
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
        Head North and work with Fire Jade and Fire to deposit Death fish in
        North, South, and both West Fish n' Wisps
      </Typography>
      <CustomImage imgSrc="/Yetaxa/fishnwisps.png" alt="" height="200px" />
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
        Head to the top/side of the pyramid to avoid getting pulled by mob that
        spawns when summoning Yetaxa.
        <br />
        Wait for the Fire Jade to pull the fight, then join right after the Fire
        Jade. If it is a strat that requires you to cast Donate Power 1, cast it
        first, then join the fight.
      </Typography>
      <StratRenderer />
      <Navigation prev="/fire1/westskullfight2" next="/fire1/cameca" />
    </>
  );
};

export default Fire1Yetaxa;
