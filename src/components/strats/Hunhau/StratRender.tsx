import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import HunhauStrat1 from "./Strat1";

const StratRenderer = () => {
  return (
    <>
      <Typography
        variant="h6"
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
        Use Will-casts on Round 1/2 to guarantee pull
        <br />
        Discard everything useless in hand
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      ></div>
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          padding: "10px",
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
    </>
  );
};

export default StratRenderer;
