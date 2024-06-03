import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/Setups/DeckSetup";
import RecStats from "../../../components/Setups/RecStats";

const Storm1 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 1"
        mainSrc="Storm1/main-deck.png"
        itemSrc="Storm1/item-deck.png"
        sideSrc="Storm1/side-deck.png"
        main="Cleanse Charm, Energy Transfer, Storm Scion, Storm Trap, Storm Blade, Elemental Blade x2"
        item="None"
        side="Lightning Bats x3, Storm Blade x2, Curse x2"
        cantrip="Donate Power 1 (Ixta), Donate Power 2 (Ixta), Restoring Rain 1 (Autloc), Dual Strike 2 (Autloc)"
      />
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
      <RecStats
        title="Storm 1"
        stats="207% Storm Damage, 59% Storm Pierce, 35% Storm Accuracy, 100% Pip Chance"
      />
      <Navigation prev="/" next="/storm1/drums" />
    </>
  );
};

export default Storm1;
