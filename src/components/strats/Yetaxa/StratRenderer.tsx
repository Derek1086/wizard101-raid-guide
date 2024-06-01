import Typography from "@mui/material/Typography";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import YetaxaStrat1 from "./Strat1";
import YetaxaStrat2 from "./Strat2";
import YetaxaStrat3 from "./Strat3";
import YetaxaStrat4 from "./Strat4";

const StratRenderer = () => {
  const [strat, setStrat] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStrat = event.target.value;
    setStrat(selectedStrat);
    console.log(selectedStrat);
  };

  return (
    <>
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
          <InputLabel id="demo-select-small-label">Minion School</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={strat}
            label="Minion School"
            onChange={handleChange}
          >
            <MenuItem value={"Strat 1"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Life-School.png" alt="Life" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 2"}>
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 3"}>
              <img src="/Life-School.png" alt="Life" height="25px" />
            </MenuItem>
            <MenuItem
              value={"Strat 4"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
              <img src="/Life-School.png" alt="Life" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Myth-School.gif" alt="Myth" height="25px" />
              <img src="/Life-School.png" alt="Life" height="25px" />
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
              padding: "20px",
            }}
          >
            Stupefy Round 1 <br />
            Fire 2 Cast Donate Power 3
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
              <YetaxaStrat1 />
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
              padding: "20px",
            }}
          >
            Stupefy Round 1 <br />
            Fire 1 Cast Donate Power 1<br />
            Fire 2 Cast Donate Power 3
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
              <YetaxaStrat2 />
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
              padding: "20px",
            }}
          >
            Stupefy Round 1 <br />
            Fire 2 Cast Donate Power 3
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
              <YetaxaStrat3 />
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
              padding: "20px",
            }}
          >
            Stupefy Round 1 <br />
            Fire 2 Cast Donate Power 3
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
              <YetaxaStrat4 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StratRenderer;
