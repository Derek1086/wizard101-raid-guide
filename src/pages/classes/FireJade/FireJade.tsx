import Header from "../../../components/Header";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import DeckSetup from "../../../components/DeckSetup";
import RecStats from "../../../components/RecStats";

const FireJade = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <DeckSetup
        title="Fire Jade"
        mainSrc="FireJade/main-deck.png"
        itemSrc="FireJade/item-deck.png"
        sideSrc="FireJade/side-deck.png"
        main="Bottom Path Fire Elf x2, Betrayal, Curse/Hex"
        item="Pet Fuel, IC Bladestorm, Wyldfire Ruby (+35%)"
        side="Bottom Path Immolate x2, Shatter (3 Shields) x2, Donate Power x2, Spirit Blade"
        cantrip="None"
      />
      <RecStats
        title="Fire Jade"
        stats="High Universal Resist, High Health, 100% Pip Chance, Fire Mastery, 25% Fire Accuracy, High Fire/Ice Resist"
      />
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
          sx={{ width: "30%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          sx={{ width: "30%", height: "70px" }}
          color="secondary"
          size="large"
          onClick={() => navigate("/firejade/fishing")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Start Raid
        </Button>
      </div>
      <Typography
        variant="h5"
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
        Fire Jade POV
      </Typography>
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yHACIpxSQWc?si=2bOMuI3mq4FfPAMA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </>
  );
};

export default FireJade;
