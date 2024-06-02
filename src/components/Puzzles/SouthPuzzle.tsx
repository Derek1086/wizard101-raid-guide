import Typography from "@mui/material/Typography";
import CustomImage from "../CustomImage";

const SouthPuzzle = () => {
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
        South Puzzle
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
        Cast the 'Reveal Invisible' Cantrip in the black numbered spots to
        reveal tokens
      </Typography>
      <CustomImage imgSrc="/SouthPuzzle/token.png" alt="" height="60px" />
      <CustomImage imgSrc="/SouthPuzzle/map.png" alt="" height="450px" />
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
        Tokens must be found in the south and deposited at the southern base of
        the pyramid
      </Typography>
    </>
  );
};

export default SouthPuzzle;
