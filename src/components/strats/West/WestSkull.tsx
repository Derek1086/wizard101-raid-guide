import WestSkull1 from "./WestSkull1";
import WestSkull2 from "./WestSkull2";
import WestSkull1Myth from "./WestSkull1Myth";
import Header from "../../Header";
import Typography from "@mui/material/Typography";

const WestSkull = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        West Skull 1
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
          <WestSkull1 />
        </div>
      </div>

      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        West Skull 1 (Myth Team)
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
          <WestSkull1Myth />
        </div>
      </div>
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        West Skull 2
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
    </>
  );
};

export default WestSkull;
