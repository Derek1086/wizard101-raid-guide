import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Subtitle from "../../Text/Subtitle";
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
          <InputLabel id="demo-select-small-label">Minion Schools</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={strat}
            label="Minion Schools"
            onChange={handleChange}
          >
            <MenuItem value={"Strat 1"} sx={{ display: "flex", gap: "10px" }}>
              <img src="/NotFire.png" alt="NotFire" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/NotLife.png" alt="NotLife" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 2"}>
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 3"}>
              <img src="/Life-School.gif" alt="Life" height="25px" />
            </MenuItem>
            <MenuItem
              value={"Strat 4"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
              <img src="/Life-School.gif" alt="Life" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Myth-School.gif" alt="Myth" height="25px" />
              <img src="/Life-School.gif" alt="Life" height="25px" />
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      {strat !== "" && strat === "Strat 1" && (
        <>
          <Body text="Cantrips" />
          <Subtitle text="Stupefy Round 1" />
          <Subtitle text="Fire 2 Cast Donate Power 3" />
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
          <Body text="Cantrips" />
          <Subtitle text="Stupefy Round 1" />
          <Subtitle text="Fire 1 Cast Donate Power 1" />
          <Subtitle text="Fire 2 Cast Donate Power 3" />
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
          <Body text="Cantrips" />
          <Subtitle text="Stupefy Round 1" />
          <Subtitle text="Fire 2 Cast Donate Power 3" />
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
          <Body text="Cantrips" />
          <Subtitle text="Stupefy Round 1" />
          <Subtitle text="Fire 2 Cast Donate Power 3" />
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
