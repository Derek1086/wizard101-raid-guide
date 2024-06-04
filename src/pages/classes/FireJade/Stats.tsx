import DeckSetup from "../../../components/Setups/DeckSetup";
import Title from "../../../components/Text/Title";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title=""
        mainSrc="FireJade/main-deck.png"
        itemSrc="FireJade/item-deck.png"
        sideSrc="FireJade/side-deck.png"
        main="Bottom Path Fire Elf x2, Betrayal, Curse/Hex"
        item="Pet Fuel, IC Bladestorm, Wyldfire Ruby (+35%)"
        side="Bottom Path Immolate x2, Shatter (3 Shields) x2, Donate Power x2, Spirit Blade"
        cantrip="None"
      />
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
    </div>
  );
};

export default Stats;
