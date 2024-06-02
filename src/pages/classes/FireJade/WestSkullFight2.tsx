import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/West/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const FireJadeWestSkullFight2 = () => {
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
        West Skull Fight 2
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
        Head West to Skull 2 Fight
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="250px"
      />
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
        Pull Sky Screecher and follow the strat
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/skyscreecher.png"
        alt=""
        height="250px"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <WestSkull2 />
        </div>
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
        After defeating Sky Screecher, collect the Crytal Skull
      </Typography>
      <CustomImage imgSrc="/WestPuzzle/skull.png" alt="" height="100" />
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
        Work with Fire 1 and Fire 2 to get a total of 4 Death fish if not
        already caught from the death pond
      </Typography>
      <CustomImage imgSrc="/WestPuzzle/deathpond.png" alt="" height="150px" />

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
        Head to the West end of the pyramid and deposit the Crystal Skull
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/skullcollector.png"
        alt=""
        height="150px"
      />
      <Navigation prev="/firejade/fishing" next="/firejade/yetaxa" />
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

export default FireJadeWestSkullFight2;
