import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import MythJadeFishing from "./Fishing";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeSpecialCases = () => {
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
          padding: "20px",
        }}
      >
        Special Cases
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
        On the way to Myth Pond in West, check for Stupefy West Mob's school (IF
        SCHOOL IS LIFE OR FIRE MYTH TEAM CANNOT DO STUPEFY)
      </Typography>
      <MythJadeFishing />
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
        On the way to Myth Pond in West, check for Stupefy West Mob's school (IF
        SCHOOL IS LIFE OR FIRE MYTH TEAM CANNOT DO STUPEFY)
        <br />
        In this case, notify Support/Puller and Storm 4 to do Stupefy instead
        <br />
        Myth Jade and Myth 2 will wake over the West Skull 1 Fight (same strat
        as Stupefy)
        <br />
        If Storm team is doing Stupefy do the West Skull 1 fight whenever Myth 2
        is ready (Leave skull on the ground for Storm Team to pick up)
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="200px"
      />
      <Navigation prev="/mythjade/northtokenfight" next="/mythjade/stupefy" />
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
        Raining West?
      </Typography>
      <SouthPuzzle />
    </>
  );
};

export default MythJadeSpecialCases;
