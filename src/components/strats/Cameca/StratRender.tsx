import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CamecaStrat1 from "./Strat1";
import CamecaStrat2 from "./Strat2";
import CamecaStrat3 from "./Strat3";
import CamecaStrat4 from "./Strat4";

const StratRender = () => {
  const [strat, setStrat] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStrat = event.target.value;
    setStrat(selectedStrat);
    console.log(selectedStrat);
  };
  return (
    <>
      <Title text="Choose minion school(s)" />
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
            <MenuItem value={"Strat 1"}>
              <img src="/NotLife.png" alt="NotLife" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 2"}>
              <img src="/Life-School.gif" alt="Life" height="25px" />{" "}
            </MenuItem>
            <MenuItem
              value={"Strat 3"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/NotLife.png" alt="NotLife" height="25px" />
              {"   "}
              AND
              {"    "}
              <img src="/Death-School.gif" alt="Death" height="25px" />
              /
              <img src="/Storm-School.gif" alt="Storm" height="25px" />
              {"   "}
              ANY TRUE MYTHS
            </MenuItem>
            <MenuItem
              value={"Strat 4"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Life-School.gif" alt="Life" height="25px" />
              {"   "}
              AND
              {"    "}
              <img src="/Death-School.gif" alt="Death" height="25px" />
              /
              <img src="/Storm-School.gif" alt="Storm" height="25px" />
              {"   "}
              ANY TRUE MYTHS
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      {strat !== "" && strat === "Strat 1" && (
        <>
          <Body text="Cantrips" />
          <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
              <CamecaStrat1 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 2" && (
        <>
          <Body text="Cantrips" />
          <Subtitle text="Myth 1 Cast Donate Power 2" />
          <Subtitle text="Myth 2 Cast Donate Power 2" />
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
              <CamecaStrat2 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 3" && (
        <>
          <Body text="Cantrips" />
          <Subtitle text="IF USING FYTH'S IGNORE" />
          <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
              <CamecaStrat3 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 4" && (
        <>
          <Body text="Cantrips" />
          <Subtitle text="IF USING FYTH'S IGNORE" />
          <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
              <CamecaStrat4 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StratRender;
