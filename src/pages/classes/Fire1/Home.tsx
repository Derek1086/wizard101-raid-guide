import Header from "../../../components/Header";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import DeckSetup from "../../../components/DeckSetup";
import RecStats from "../../../components/RecStats";

const Fire1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <DeckSetup
        title="Fire 1"
        mainSrc="Fire1/main-deck.png"
        itemSrc="Fire1/item-deck.png"
        sideSrc="Fire1/side-deck.png"
        main="Fire Trap, Bernie Notice, Caldera Jinn, Helephant, Spirit Trap"
        item="Amulet Blade (+40%), Deck Sun Trap"
        side="Top Path Immolate x2, Empower, Cleanse Charm, Donate Power x2, Spirit Shield x3, Spirit Trap"
        cantrip="Donate Power 1, Donate Power 2, Dual Strike 1"
      />
      <RecStats
        title="Fire 1"
        stats="195% Damage, 68% Pierce, 30% Accuracy, 100% Pip Chance, "
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
          onClick={() => navigate("/fire1/drums")}
          style={{
            color: "white",
            backgroundColor: "#272727",
            fontSize: "calc(0.8em + 0.8vmin)",
          }}
        >
          Start Raid
        </Button>
      </div>
    </>
  );
};

export default Fire1;
