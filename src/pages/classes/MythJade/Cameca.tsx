import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const MythJadeCameca = () => {
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
        Cameca Boss Fight
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
        Wait for Fire 1, Myth 1, and Myth 2 to come South
        <br />
        After getting health from South Fish n' Wisps and finding all South
        tokens, make sure the turnstiles are set in order of Astral, School
        Toke, then Wildlife (order is important it can bug if not in the right
        order)
      </Typography>
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
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
        To spawn Cameca, Stand in the middle of the turnstiles where the fight
        will be, and cast the cantrip 'Reveal Invisible'
        <br />A drum will spawn, which you will interact with. Make sure to
        backup right after so you don't get pulled
      </Typography>
      <StratRender />
      <Navigation prev="/mythjade/puzzles" next="/mythjade/hunhau" />
    </>
  );
};

export default MythJadeCameca;
