import Typography from "@mui/material/Typography";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import IxtaStrat1 from "./Strat1";
import IxtaStrat2 from "./Strat2";
import IxtaStrat3 from "./Strat3";
import IxtaGoatStrat1 from "./GoatStrat1";
import IxtaGoatStrat2 from "./GoatStrat2";

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
            </MenuItem>
            <MenuItem value={"Strat 2"}>
              <img src="/Death-School.gif" alt="Death" height="25px" />
            </MenuItem>
            <MenuItem
              value={"Strat 3"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Fire-School.gif" alt="Fire" height="25px" />
              <img src="/Death-School.gif" alt="Death" height="25px" />
              {"   "}
              OR
              {"    "}
              <img src="/Death-School.gif" alt="Death" height="25px" />
              <img src="/Life-School.gif" alt="Life" height="25px" />
            </MenuItem>
            <MenuItem
              value={"Strat 4"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/NotDeath.png" alt="NotDeath" height="25px" />
              {"   "}
              GOATLING PETS
            </MenuItem>
            <MenuItem
              value={"Strat 5"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Death-School.gif" alt="Death" height="25px" />
              {"   "}
              GOATLING PETS
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
            Storm 1 Cast Donate Power 2
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
              <IxtaStrat1 />
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
            Stupefy Round 1 <br />
            Storm 1 Cast Donate Power 2
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
              <IxtaStrat2 />
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
            Stupefy Round 1 <br />
            Storm 3 Cast Donate Power 3
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
              <IxtaStrat3 />
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
            Storm 1 Cast Donate Power 2
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
              <IxtaGoatStrat1 />
            </div>
          </div>
        </>
      )}
      {strat !== "" && strat === "Strat 5" && (
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
            Storm 3 Cast Donate Power 3<br />
            Storm 1 Cast Donate Power 1
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
              <IxtaGoatStrat2 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StratRenderer;
