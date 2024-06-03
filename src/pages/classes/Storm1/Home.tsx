import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const Storm1 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 1 GOATLING"
        mainSrc="Storm1/goat-main-deck.png"
        itemSrc="Storm1/goat-item-deck.png"
        sideSrc="Storm1/goat-side-deck.png"
        main="Cleanse Charm, Turmoil Oni, Storm Trap, Elemental Blade"
        item="Star Blade, Threefold Fever x2"
        side="Curse/Hex, Lightning Bats x3, Elemental Blade"
        cantrip="Donate Power 1 (Ixta), Donate Power 2 (Ixta), Restoring Rain 1 (Autloc), Dual Strike 2 (Autloc)"
      />
      <Navigation prev="/" next="/storm1/drums" />
      <a
        href="https://www.twitch.tv/videos/2118249660"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title text="Storm 1 POV" />
      </a>
    </>
  );
};

export default Storm1;
