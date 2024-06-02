import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import MythStrat from "../../../components/strats/Stupefy/Myth";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeStupefy = () => {
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
          padding: "20px",
        }}
      >
        Stupefy
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
        Head to the corresponding Stupfy Mob. West (Left) or East (Right)
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
        <CustomImage
          imgSrc="/WestPuzzle/westskullfight.png"
          alt=""
          height="200px"
        />
        <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="200px" />
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
        When Fire team is ready for Yetaxa, call out to Fire Jade to 'Spawn
        Yetaxa' and enter the Stupefy fight
        <br />
        On hitting round of Stupefy, let Fire Jade know so they can get ready to
        pull the fight
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
        When you see the Cyclops appear in the leaves of the Myth Scion spell
        call out to Fire Jade 'Pull Now'
      </Typography>
      <CustomImage imgSrc="/MythJade/stupefy.png" alt="" height="200px" />
      <MythStrat />
      <Navigation prev="/mythjade/specialcases" next="/mythjade/puzzles" />
    </>
  );
};

export default MythJadeStupefy;
