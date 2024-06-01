import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const WestSkullFight2 = () => {
  const navigate = useNavigate();

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
        Head West to Skull Fight (next to the death pond)
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
        Pull Mob and Follow these steps
      </Typography>
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
          padding: "20px",
        }}
      >
        Collect Skull, then work with fire 1 and 2 to get a total of 4 death
        fish in the death pond
      </Typography>
      <CustomImage imgSrc="/WestPuzzle/skull.png" alt="" height="150px" />
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
        Head to the west end of the pyramid and deposit the skull
      </Typography>
      <CustomImage
        imgSrc="/WestPuzzle/skullcollector.png"
        alt=""
        height="150px"
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "20%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/firejade/fishing")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ width: "20%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/firejade/yetaxa")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Next
        </Button>
      </div>
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

export default WestSkullFight2;
