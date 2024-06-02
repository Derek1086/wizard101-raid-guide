import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/West/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire2WestSkullFight2 = () => {
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
        Head West to Skull 2 Fight with the Fire Jade
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="150px"
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
        Let Fire Jade pull Sky Screecher, then join
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
          padding: "10px",
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
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        After defeating Sky Screecher, go to the death pond and work with Fire
        Jade and Fire 1 to collect the rest of the 4 Death fish if needed
      </Typography>
      <Navigation prev="/fire2/fishing" next="/fire2/yetaxa" />
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

export default Fire2WestSkullFight2;
