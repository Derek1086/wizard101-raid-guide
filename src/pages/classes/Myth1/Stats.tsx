import DeckSetup from "../../../components/Setups/DeckSetup";
import Title from "../../../components/Text/Title";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title=""
        mainSrc="Myth1/main-deck.png"
        itemSrc="Myth1/item-deck.png"
        sideSrc="Myth1/side-deck.png"
        main="Myth Jinn x2, Myth Trap, Myth Blade, Myth Scion, Spirit Trap, Elemental Trap"
        item="None"
        side="Myth Blade, Shatter (3 Shields), Empower, Cleanse Charm, Spirit Shield x4"
        cantrip="Dual Strike 3 (Hunhau)"
      />
      <Title text="Fyth 1 POV" />
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
          src="https://www.youtube.com/embed/r7e2RkoXrhw?si=UYsXPeuzC5kpyICZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default Stats;
