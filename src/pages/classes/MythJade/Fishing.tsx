import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";

const MythJadeFishing = () => {
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
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        Head West and catch 4 Myth Fish with Myth 1 and Myth 2
        <br />
        Coordinate with Myth 1 and Myth 2 where to deposit Myth Fish in South,
        North, and both West Fish n' Wisps
      </Typography>
      <CustomImage imgSrc="/WestPuzzle/deathpond.png" alt="" height="200px" />
    </>
  );
};

export default MythJadeFishing;
