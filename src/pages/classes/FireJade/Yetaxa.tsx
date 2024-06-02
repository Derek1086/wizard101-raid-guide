import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const FireJadeYetaxa = () => {
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
          padding: "20px",
        }}
      >
        Head North and work with Fire 1 and Fire 2 to deposit all Death fish in
        North, South, and both West Fish n' Wisps.
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
        Ensure all North tokens are set correctly to spawn Yetaxa
        <br />
        Head to the drum in the middle, and wait for stupefy team to call out
        when to spawn Yetaxa. After spawning, head to the back of North IF IT
        ISNT RAINING NORTH and check what mob spawned, Coatl (fast) or Sky Crier
        (slow). If Coatl, let it pass to the top of pyramid before starting
        Yetaxa
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/Yetaxa/coatl.png" alt="" height="200px" />
        <CustomImage imgSrc="/Yetaxa/skycrier.png" alt="" height="200px" />
      </div>
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
          padding: "20px",
        }}
      >
        Wait with fire team and wait for stupefy team to call when to pull.
        <br /> When they call to pull, pull the minion first
      </Typography>
      <StratRenderer />
      <Navigation
        prev="/firejade/westskullfight2"
        next="/firejade/southpulling"
      />
    </>
  );
};

export default FireJadeYetaxa;
