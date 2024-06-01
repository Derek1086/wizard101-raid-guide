import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire1Drums = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <EastPuzzle />
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
          onClick={() => navigate("/fire1")}
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
          onClick={() => navigate("/fire1/westskullfight2")}
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
        Raining East?
      </Typography>
      <SouthPuzzle />
    </>
  );
};

export default Fire1Drums;
