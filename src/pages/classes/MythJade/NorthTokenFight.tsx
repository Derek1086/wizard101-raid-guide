import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import MythJadeFishing from "./Fishing";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const NorthTokenFight = () => {
  return (
    <>
      <Header />
      <NorthPuzzle />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
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
            Right Token 2 Fight
          </Typography>
          <NorthRight />
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
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        Watch in chat for call of Stupefy East Mob's school by drums team (IF
        SCHOOL IS LIFE OR FIRE MYTH TEAM CANNOT DO STUPEFY)
      </Typography>
      <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="250px" />
      <Navigation prev="/mythjade" next="/mythjade/specialcases" />
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
        Raining North?
      </Typography>
      <MythJadeFishing />
    </>
  );
};

export default NorthTokenFight;
