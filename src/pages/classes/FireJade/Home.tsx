import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/Setups/DeckSetup";
import RecStats from "../../../components/Setups/RecStats";

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
      <Title text="Fire Jade POV" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
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
