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
        Head north and work with fire team to deposit all fish in North fish n
        wisps and ensure all tokens are set correctly
      </Typography>
      <CustomImage imgSrc="/Yetaxa/map.png" alt="" height="100px" />
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
        Head to the drum in the middle, and wait for stupefy team to call out
        when to spawn yetaxa. after spawning, head to the back of north if it
        isnt raining and check what mob spawned, coatl or sky crier (grandma)
        <br />
        Wait with fire team and wait for stupefy team to call when to pull, when
        they call to pull, pull the minion first
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
        choose minion school to generate strat
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
