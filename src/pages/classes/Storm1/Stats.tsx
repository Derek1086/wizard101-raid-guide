import DeckSetup from "../../../components/Setups/DeckSetup";
import Title from "../../../components/Text/Title";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title="GOATLING"
        mainSrc="Storm1/goat-main-deck.png"
        itemSrc="Storm1/goat-item-deck.png"
        sideSrc="Storm1/goat-side-deck.png"
        main="Cleanse Charm, Turmoil Oni, Storm Trap, Elemental Blade"
        item="Star Blade, Threefold Fever x2"
        side="Curse/Hex, Lightning Bats x3, Elemental Blade"
        cantrip="Donate Power 1 (Ixta), Donate Power 2 (Ixta), Restoring Rain 1 (Autloc), Dual Strike 2 (Autloc)"
      />
      <a
        href="https://www.twitch.tv/videos/2118249660"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title text="Storm 1 POV" />
      </a>
    </div>
  );
};

export default Stats;
