import Typography from "@mui/material/Typography";
import CustomImage from "../CustomImage";

const NorthPuzzle = () => {
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
        North Puzzle
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
        }}
      >
        Collect three tokens total, one from searching in pet mode, two from
        defeating mobs
      </Typography>
      <CustomImage imgSrc="/SouthPuzzle/token.png" alt="" height="60px" />
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
        }}
      >
        Pet Token Locations
      </Typography>
      <CustomImage imgSrc="/NorthPuzzle/map.png" alt="" height="300px" />
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
        }}
      >
        Tokens must be found in the North and set the three turnstiles for Fire
        team to summon Yetaxa
      </Typography>
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="300px" />
    </>
  );
};

export default NorthPuzzle;
