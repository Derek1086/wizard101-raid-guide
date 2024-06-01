import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
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
        variant="h5"
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
        Cast the Reveal Invisible Cantrip in the orange spots to reveal tokens
      </Typography>
      <CustomImage imgSrc="/SouthPuzzle/token.png" alt="" height="100px" />
      <CustomImage imgSrc="/SouthPuzzle/map.png" alt="" height="300px" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ color: "#00d1c0" }} fontSize="large" />
          </div>
          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Astral Token
          </Typography>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ color: "#00ff00" }} fontSize="large" />
          </div>
          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Wildlife Token
          </Typography>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ color: "#b75cf7" }} fontSize="large" />
          </div>
          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            School Token
          </Typography>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ color: "#ff9300" }} fontSize="large" />
          </div>
          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Stand here to reveal
          </Typography>
        </div>
      </div>
      <Typography
        variant="h5"
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
