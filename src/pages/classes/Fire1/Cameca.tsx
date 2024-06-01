import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CustomImage from "../../../components/CustomImage";

import CamecaStrat1 from "../../../components/strats/Cameca/Strat1";
import CamecaStrat2 from "../../../components/strats/Cameca/Strat2";
import CamecaStrat3 from "../../../components/strats/Cameca/Strat3";
import CamecaStrat4 from "../../../components/strats/Cameca/Strat4";

const Fire1Cameca = () => {
  const [strat, setStrat] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStrat = event.target.value;
    setStrat(selectedStrat);
    console.log(selectedStrat);
  };

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
          paddingTop: "20px",
        }}
      >
        Cameca Boss Fight
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
          padding: "20px",
        }}
      >
        Head north and get health from north fish n wisps, then head south and
        meetup with myth jade, myth 1 and myth 2
      </Typography>
      <CustomImage imgSrc="/Yetaxa/map.png" alt="" height="100px" />
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
        Get health from south fish n wisps if still need, then wait for myth
        jade to spawn cameca
        <br />
        for strats 1, 3, and 4, talk with fire 2 and decide who will cast donate
        power 2, for strat 2, fire 1 and 2 will have to both cast donate power 2
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
          padding: "20px",
        }}
      >
        choose minion school to generate strat
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
          <InputLabel id="demo-select-small-label">Minion School</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={strat}
            label="Minion School"
            onChange={handleChange}
          >
            <MenuItem value={"Strat 1"}>
              <img src="/Life-School.png" alt="Life" height="25px" />
            </MenuItem>
            <MenuItem value={"Strat 2"}>
              <img src="/Life-School.png" alt="Life" height="25px" />{" "}
            </MenuItem>
            <MenuItem
              value={"Strat 3"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Life-School.png" alt="Life" height="25px" />
              {"   "}
              AND
              {"    "}
              <img src="/Death-School.gif" alt="Death" height="25px" />
              <img src="/Storm-School.gif" alt="Storm" height="25px" />
            </MenuItem>
            <MenuItem
              value={"Strat 4"}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <img src="/Life-School.png" alt="Life" height="25px" />
              {"   "}
              AND
              {"    "}
              <img src="/Death-School.gif" alt="Death" height="25px" />
              <img src="/Storm-School.gif" alt="Storm" height="25px" />
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
            Fire 1 or Fire 2 Cast Donate Power 2
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
              <CamecaStrat1 />
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
            Fire 1 Cast Donate Power 2<br />
            Fire 2 Cast Donate Power 2
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
              <CamecaStrat2 />
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
            IF USING FYTH'S IGNORE <br />
            Fire 1 or Fire 2 Cast Donate Power 2
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
              <CamecaStrat3 />
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
            IF USING FYTH'S IGNORE <br />
            Fire 1 or Fire 2 Cast Donate Power 2
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
              <CamecaStrat4 />
            </div>
          </div>
        </>
      )}
      <Navigation prev="/fire1/yetaxa" next="/fire1/hunhau" />
    </>
  );
};

export default Fire1Cameca;
