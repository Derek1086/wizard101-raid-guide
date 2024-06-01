import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import YetaxaStrat1 from "../../../components/strats/Yetaxa/Strat1";
import YetaxaStrat2 from "../../../components/strats/Yetaxa/Strat2";
import YetaxaStrat3 from "../../../components/strats/Yetaxa/Strat3";
import YetaxaStrat4 from "../../../components/strats/Yetaxa/Strat4";

const YetaxaFight = () => {
  const navigate = useNavigate();
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
        Yetaxa Boss Fight
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
          padding: "20px",
        }}
      >
        Head north and work with fire team to deposit all fish in North fish n
        wisps and ensure all tokens are set correctly
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
        <img src="/Yetaxa/map.png" alt="" height={"100px"} />
      </div>
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
        Head to the drum in the middle, and wait for stupefy team to call out
        when to spawn yetaxa. after spawning, head to the back of north if it
        isnt raining and check what mob spawned, coatl or sky crier (grandma)
        <br />
        Wait with fire team and wait for stupefy team to call when to pull, when
        they call to pull, pull the minion first
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
        <FormControl sx={{ m: 1, minWidth: 120, width: "50%" }} size="small">
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "20%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/firejade/westskullfight")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ width: "20%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/firejade/yetaxa")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default YetaxaFight;
