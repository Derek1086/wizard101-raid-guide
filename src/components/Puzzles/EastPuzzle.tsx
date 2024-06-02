import Typography from "@mui/material/Typography";
import CustomImage from "../CustomImage";

const EastPuzzle = () => {
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
        East Puzzle
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
        Drums are yellow sigils that spawn in specific locations. Once a player
        steps onto a drum it turns green. This is based on a minigame during the
        main questline in Zafaria.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CustomImage imgSrc="/EastPuzzle/yellow.png" alt="" height="100px" />
        <CustomImage imgSrc="/EastPuzzle/green.png" alt="" height="100px" />
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
        Below is a map of all the drums and what number is assigned to them
      </Typography>
      <CustomImage imgSrc="/EastPuzzle/map.png" alt="" height="300px" />
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
        Once in position for your drum, call out your assigned number (ex. 5).
        Once all positions are ready, 1 can start drums.
        <br />
        Look back and forth to avoid the wisps and look towards the 2 drum
        locations if you have two. If you have more than one drum, make sure to
        stand in the middle, white circle below as an example
      </Typography>
      <CustomImage imgSrc="/EastPuzzle/positioning.png" alt="" height="150px" />
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
        When drums are done, Ixta will spawn. If someone misses a drum, a mob
        will spawn and someone will have to kill it in order to restart drums
      </Typography>
    </>
  );
};

export default EastPuzzle;
