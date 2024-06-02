import Header from "../../Header";
import Typography from "@mui/material/Typography";

import HunhauStrat1 from "./Strat1";

const Hunhau = () => {
  return (
    <>
      <Header />
      <div>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ flexGrow: 1, marginTop: 2 }}
        >
          Hunhau Main Strat
        </Typography>
        <Typography
          variant="h6"
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
          Cantrips (MUST BE SENT IN ORDER)
        </Typography>
        <Typography
          variant="body1"
          component="div"
          color="text.secondary"
          align="center"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          *Polymoprhs join fight*
          <br />
          <br />
          Donate Power 2 (Optional)
          <br />
          Myth Jade Cast Restoring Rain 3<br />
          Fire 2 Cast Restoring Rain 1<br />
          Myth 2 Cast Restoring Rain 1<br />
          Storm 3 Cast Restoring Rain 1<br />
          <br />
          *WAIT FOR CALL TO SEND Dual Strikes*
          <br /> <br />
          Myth 1 Case Dual Strike 3<br />
          Storm 2 Cast Dual Strike 2<br />
          Fire 1 Cast Dual Strike 1<br />
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
            <HunhauStrat1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hunhau;
