import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Ixta/StratRender";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Storm3Ixta = () => {
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
        Ixta Boss Fight
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
        IF NOT DOING GOATLING STRAT DISREGARD AND SCROLL DOWN
      </Typography>
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
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
        After the mob passes the Ixta fight, let the Storm Jade pull the fight.
        Only join after everyone else joins. Make sure to Cast Donate Power 3
        depending on strat
      </Typography>
      <StratRenderer />
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
        If not doing Goatling Strat, head South and help find tokens while
        waiting on Stupefy
      </Typography>
      <SouthPuzzle />
      <Navigation prev="/storm3/fishing" next="/storm3/hunhau" />
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
        Raining South?
      </Typography>
      <WestPuzzle />
    </>
  );
};

export default Storm3Ixta;
