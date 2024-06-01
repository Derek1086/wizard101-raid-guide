import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/DeckSetup";
import RecStats from "../../../components/RecStats";

const FireJade = () => {
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
      <Navigation prev="/" next="/firejade/fishing" />
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
