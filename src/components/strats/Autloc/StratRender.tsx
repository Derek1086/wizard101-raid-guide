import Typography from "@mui/material/Typography";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import AutlocStrat1 from "./Strat1";
import AutlocStrat2 from "./Strat2";
import AutlocOniStrat1 from "./OniStrat1";
import AutlocOniStrat2 from "./OniStrat2";

const StratRenderer = () => {
  const [strat, setStrat] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStrat = event.target.value;
    setStrat(selectedStrat);
    console.log(selectedStrat);
  };

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
        Choose minion schools
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
        <FormControl sx={{ m: 1, minWidth: 120, width: "25%" }} size="small">
          <InputLabel id="demo-select-small-label">Minion Schools</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={strat}
            label="Minion Schools"
            onChange={handleChange}
          >
            <MenuItem value={"Strat 1"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/NotDeath.png" alt="NotDeath" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/NotIce.png" alt="NotIce" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 2"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/Death-School.gif" alt="Death" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Ice-school.gif" alt="Ice" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 3"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/NotDeath.png" alt="NotDeath" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/NotIce.png" alt="NotIce" height="25px" />
              {"    "}
              ONI STRAT
            </MenuItem>
            <MenuItem value={"Strat 4"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/Death-School.gif" alt="Death" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Ice-school.gif" alt="Ice" height="25px" />
              {"    "}
              ONI STRAT
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      {strat !== "" && strat === "Strat 1" && (
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
            }}
          >
            Cantrips
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
            Storm 4 Cast Donate Power 2<br />
            Storm 1 Cast Restoring Rain 1<br />
            Plague if = Storm
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
              <AutlocStrat1 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 2" && (
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
            }}
          >
            Cantrips
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
            Storm 4 Cast Donate Power 3<br />
            Storm 1 Cast Dual Strike 2<br />
            Storm 2 Cast Dual Strike 1
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
              <AutlocStrat2 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 3" && (
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
            }}
          >
            Cantrips
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
            Storm 4 Cast Donate Power 2<br />
            Storm 1 Cast Restoring Rain 1
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
              <AutlocOniStrat1 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 4" && (
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
            }}
          >
            Cantrips
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
            Storm 4 Cast Donate Power 3<br />
            Storm 1 Cast Dual Strike 2<br />
            Storm 2 Cast Dual Strike 1
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
              <AutlocOniStrat2 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StratRenderer;
