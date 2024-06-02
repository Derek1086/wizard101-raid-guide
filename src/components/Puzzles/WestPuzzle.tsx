import { Typography } from "@mui/material";
import CustomImage from "../CustomImage";

const WestPuzzle = () => {
  return (
    <>
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
        West Puzzle
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
        Head West and find Cacao Pod's (you can only hold one at a time)
        <br />
        Every time you pick up one, deposit it in the pod collector on the West
        base of the pyramid
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
        <CustomImage imgSrc="/WestPuzzle/pods.png" alt="" height="125px" />
        <CustomImage
          imgSrc="/WestPuzzle/podcollector.png"
          alt=""
          height="125px"
        />
      </div>
    </>
  );
};

export default WestPuzzle;
