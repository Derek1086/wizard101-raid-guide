import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire1Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/fire1" next="/fire1/westskullfight2" />
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

export default Fire1Drums;
