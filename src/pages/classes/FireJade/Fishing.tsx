import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const FishingFireIce = () => {
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
        Fishing
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
        Catch 4 Fire and 4 Ice Fish in the ponds in the top right near drums
      </Typography>
      <CustomImage
        imgSrc="/FireJade/fire-ice-fishing.png"
        alt=""
        height="200px"
      />
      <Navigation prev="/firejade" next="/firejade/westskullfight2" />
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
        Raining East?
      </Typography>
      <SouthPuzzle />
    </>
  );
};

export default FishingFireIce;
